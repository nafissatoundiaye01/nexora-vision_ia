'use client';

import { useEffect } from 'react';

export default function AntiCaptureProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Protection globale contre les captures d'écran
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquer PrintScreen
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        alert('Les captures d\'écran sont désactivées pour protéger le contenu.');
        return false;
      }

      // Bloquer Cmd+Shift+3/4/5 (macOS screenshot)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        return false;
      }

      // Bloquer Win+Shift+S (Windows Snipping Tool)
      if (e.key === 's' && e.shiftKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        return false;
      }

      // Bloquer F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (DevTools)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Désactiver le clic droit sur tout le document
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Autoriser le clic droit uniquement sur les inputs et textareas
      if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    };

    // Détecter les tentatives de capture via DevTools
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      // Détection silencieuse (pas de log en production)
      if (widthThreshold || heightThreshold) {
        // DevTools détecté
      }
    };

    // Bloquer la sélection sur les vidéos
    const preventVideoSelection = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
      }
    };

    // Ajouter les écouteurs
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', preventVideoSelection);
    document.addEventListener('dragstart', preventVideoSelection);

    // Vérifier périodiquement les DevTools
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Ajouter un watermark invisible
    const watermark = document.createElement('div');
    watermark.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;z-index:9999;';
    watermark.textContent = `NEXORA-${new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`;
    document.body.appendChild(watermark);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', preventVideoSelection);
      document.removeEventListener('dragstart', preventVideoSelection);
      clearInterval(devToolsInterval);
      if (watermark && watermark.parentNode) {
        watermark.parentNode.removeChild(watermark);
      }
    };
  }, []);

  return <>{children}</>;
}
