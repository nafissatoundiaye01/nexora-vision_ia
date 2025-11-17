'use client';

interface VideoSectionProps {
  videos: string[];
  title: string;
  icon: React.ReactNode;
  labels: {
    [key: string]: { title: string; subtitle: string };
  };
}

export default function VideoSection({ videos, title, icon, labels }: VideoSectionProps) {
  if (videos.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => {
          const fileName = video.split('/').pop() || '';
          const label = labels[fileName] || { title: `Vidéo #${index + 1}`, subtitle: 'Détection automatique' };

          return (
            <div key={index} className="rounded-xl shadow-lg overflow-hidden border-2 border-slate-200 relative bg-black">
              <video
                src={video}
                className="w-full aspect-video"
                controls
                playsInline
                preload="metadata"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <h4 className="text-white font-semibold text-sm">{label.title}</h4>
                <span className="text-xs text-white/70">{label.subtitle}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
