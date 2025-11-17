'use client';

import { useEffect, useRef } from 'react';

interface ProtectedVideoProps {
  src: string;
  className?: string;
  showLabel?: boolean;
  label?: string;
  subtitle?: string;
}

export default function ProtectedVideo({
  src,
  className = '',
  showLabel = false,
  label,
  subtitle
}: ProtectedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Protection 1: Désactiver le clic droit
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Protection 2: Bloquer les raccourcis clavier de capture
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquer PrintScreen, Cmd+Shift+3/4/5 (Mac), Win+Shift+S (Windows)
      if (
        e.key === 'PrintScreen' ||
        (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) ||
        (e.metaKey && e.key === 's') ||
        (e.ctrlKey && e.key === 's')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Protection 3: Détecter les tentatives de capture via API
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      }
    };

    // Protection 4: Désactiver la sélection et le drag
    const preventSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Protection 5: Bloquer l'inspection d'élément sur la vidéo
    const preventInspect = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J
        (e.ctrlKey && e.key === 'U') || // Ctrl+U
        e.key === 'F12' // F12
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Ajouter les écouteurs d'événements
    container.addEventListener('contextmenu', handleContextMenu);
    container.addEventListener('selectstart', preventSelection);
    container.addEventListener('dragstart', preventSelection);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', preventInspect);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Désactiver le téléchargement natif
    video.setAttribute('controlsList', 'nodownload');
    video.setAttribute('disablePictureInPicture', 'true');
    video.removeAttribute('download');

    // Protection contre le canvas capture
    video.crossOrigin = 'anonymous';

    return () => {
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('selectstart', preventSelection);
      container.removeEventListener('dragstart', preventSelection);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', preventInspect);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 relative bg-black select-none ${className}`}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      {/* Overlay invisible pour bloquer les clics directs */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ mixBlendMode: 'normal' }}
      />

      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video pointer-events-auto relative z-0"
        controls
        playsInline
        preload="metadata"
        controlsList="nodownload nofullscreen"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      />

      {/* Label optionnel */}
      {showLabel && label && (
        <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg z-20 pointer-events-none">
          <h4 className="text-white font-semibold text-sm">{label}</h4>
          {subtitle && <span className="text-xs text-white/70">{subtitle}</span>}
        </div>
      )}

      {/* Watermark invisible (détection forensique) */}
      <div
        className="absolute top-0 right-0 opacity-0 pointer-events-none z-30 text-xs"
        aria-hidden="true"
      >
        NEXORA-PROTECTED
      </div>
    </div>
  );
}
