import fs from 'fs';
import path from 'path';

// Limite de taille en bytes (50 MB)
const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

// Fonction pour récupérer les vidéos d'un répertoire (filtrées par taille)
export function getVideosFromDirectory(directory: string): string[] {
  const publicPath = path.join(process.cwd(), 'public', directory);

  try {
    if (!fs.existsSync(publicPath)) {
      return [];
    }

    const files = fs.readdirSync(publicPath);
    return files
      .filter(file => {
        if (!file.endsWith('.mp4')) return false;

        // Vérifier la taille du fichier
        try {
          const filePath = path.join(publicPath, file);
          const stats = fs.statSync(filePath);

          // Ne garder que les vidéos de moins de 50 MB
          if (stats.size > MAX_VIDEO_SIZE) {
            return false;
          }

          return true;
        } catch (err) {
          return false;
        }
      })
      .sort()
      .map(file => `/${directory}/${file}`);
  } catch (error) {
    return [];
  }
}

// Récupération de toutes les vidéos
export function getAllVideos() {
  return {
    heroVideos: getVideosFromDirectory('hero_videos'),
    feuxRougeVideos: getVideosFromDirectory('feux_rouge'),
    sansCasqueVideos: getVideosFromDirectory('sans_casque'),
    surveillanceVideos: getVideosFromDirectory('surveillance'),
    telephoneVolantVideos: getVideosFromDirectory('telephone_au_volant'),
  };
}
