'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoFacadeProps {
  videoUrl: string;
  title: string;
}

export function VideoFacade({ videoUrl, title }: VideoFacadeProps) {
  const [showVideo, setShowVideo] = useState(false);

  // Extract video ID from URL
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';

  if (showVideo) {
    return (
      <iframe
        className="w-full h-full"
        src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer group bg-slate-900"
      onClick={() => setShowVideo(true)}
    >
      {thumbnailUrl && (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary">
          <Play className="w-8 h-8 fill-current ml-1" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
        Haz clic para ver testimonio
      </div>
    </div>
  );
}
