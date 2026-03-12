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
        {/* Custom YouTube Shorts-style red icon */}
        <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
          <svg 
            viewBox="0 0 24 24" 
            className="w-full h-full drop-shadow-2xl" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M17.61 4.38L6.44 10.82C5.07 11.61 5.07 13.58 6.44 14.37L17.61 20.81C18.98 21.6 20.72 20.61 20.72 19.03V6.16C20.72 4.58 18.98 3.59 17.61 4.38Z" 
              fill="#FF0000" 
            />
            <path 
              d="M17.61 4.38L6.44 10.82C5.07 11.61 5.07 13.58 6.44 14.37L17.61 20.81C18.98 21.6 20.72 20.61 20.72 19.03V6.16C20.72 4.58 18.98 3.59 17.61 4.38Z" 
              fill="white" 
              fillOpacity="0.2"
            />
            <path 
              d="M10 8.5V15.5L15.5 12L10 8.5Z" 
              fill="white" 
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-6 left-4 right-4 bg-black/40 backdrop-blur-md p-3 rounded-xl text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center transform translate-y-2 group-hover:translate-y-0">
        Ver Testimonio
      </div>
    </div>
  );
}
