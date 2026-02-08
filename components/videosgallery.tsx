
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { BookOpen, FileText, Image, Laptop, Play } from 'lucide-react';

// interface Video {
//   id: number;
//   videoUrl: string;
// }

// export default function VideoGallery() {
//   const [playingId, setPlayingId] = useState<number | null>(null);

//   const videos: Video[] = [
//     {
//       id: 1,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568675/threadsdownloader.com_d5e4e7_8_gaq5y2.mp4",
//     },
//     {
//       id: 2,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568680/threadsdownloader.com_d5e4e7_1_imhgee.mp4",
//     },
//     {
//       id: 3,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568688/threadsdownloader.com_d5e4e7_t4txjx.mp4",
//     },
//     {
//       id: 4,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568682/threadsdownloader.com_d5e4e7_7_kdedgq.mp4",
//     },
//     {
//       id: 5,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568668/threadsdownloader.com_d5e4e7_2_i3aab5.mp4",
//     },
//     {
//       id: 6,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568658/threadsdownloader.com_d5e4e7_4_wvpxq6.mp4",
//     },
//     {
//       id: 7,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568658/threadsdownloader.com_d5e4e7_9_idbhwd.mp4",
//     },
//     {
//       id: 8,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568578/threadsdownloader.com_d5e4e7_6_zx8itp.mp4",
//     },
//     {
//       id: 9,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568576/threadsdownloader.com_d5e4e7_3_wtlp6t.mp4",
//     },
//     {
//       id: 10,
//       videoUrl: "https://res.cloudinary.com/dkwabt89v/video/upload/v1770568570/threadsdownloader.com_d5e4e7_11_ygfmtr.mp4",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-green-50/50 via-blue-50/50 to-white min-h-screen pt-8 pb-24 md:pt-16 md:pb-32">
//       {/* Floating Icons Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className="absolute top-20 left-10 text-[#7B2CBF]/10"
//         >
//           <Laptop className="w-24 h-24" />
//         </motion.div>
//         <motion.div 
//           animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute top-32 right-20 text-[#9D4EDD]/10"
//         >
//           <FileText className="w-20 h-20" />
//         </motion.div>
//         <motion.div 
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
//           className="absolute bottom-20 left-1/4 text-[#C77DFF]/10"
//         >
//           <Image className="w-16 h-16" />
//         </motion.div>
//         <motion.div 
//           animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
//           transition={{ duration: 7, repeat: Infinity, delay: 2 }}
//           className="absolute bottom-32 right-1/4 text-[#7B2CBF]/10"
//         >
//           <BookOpen className="w-20 h-20" />
//         </motion.div>
//       </div>

//       <div className="min-h-screen p-4 sm:p-6 lg:p-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
//             Video Gallery
//           </h1>

//           {/* Video Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {videos.map((video) => (
//               <div key={video.id} className="group">
//                 {/* Video Card */}
//                 <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
//                   {/* Video Player or Play Button */}
//                   <div className="relative aspect-video bg-gray-900">
//                     {playingId === video.id ? (
//                       // Video Player
//                       <video
//                         className="w-full h-full object-cover"
//                         controls
//                         autoPlay
//                         playsInline
//                         onEnded={() => setPlayingId(null)}
//                       >
//                         <source src={video.videoUrl} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     ) : (
//                       // Black background with Play Button
//                       <div
//                         className="w-full h-full bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-all duration-300"
//                         onClick={() => setPlayingId(video.id)}
//                       >
//                         <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg">
//                           <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="white" />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





















































// 'use client';

// import { videos } from "@/lib/videourls";
// import React, { useRef } from "react";
// import { useState } from "react";


// // VideoPreviewGallery Component
// interface Video {
//   id: number;
//   videoUrl: string;
// }

// interface VideoPreviewGalleryProps {
//   videoUrls?: string[];
//   title?: string;
//   visibleCards?: number;
// }

// const VideoPreviewGallery: React.FC<VideoPreviewGalleryProps> = ({
//   videoUrls = [],
//   title = "Video Preview Gallery",
//   visibleCards = 4
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//   const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
   
//   // Convert videoUrls array to Video objects
//   const videos: Video[] = videoUrls.length > 0 
//     ? videoUrls.map((url, index) => ({
//         id: index + 1,
//         videoUrl: url
//       }))
//     :[];

//   // Determine visible cards based on screen size
//   const getVisibleCards = (): number => {
//     if (typeof window !== 'undefined') {
//       if (window.innerWidth < 640) return 1; // Mobile
//       if (window.innerWidth < 1024) return 2; // Tablet
//       if (window.innerWidth < 1280) return 3; // Small desktop
//       return visibleCards; // Large desktop
//     }
//     return visibleCards;
//   };

//   const [currentVisibleCards, setCurrentVisibleCards] = useState(getVisibleCards());

//   // Update visible cards on resize
//   React.useEffect(() => {
//     const handleResize = () => {
//       setCurrentVisibleCards(getVisibleCards());
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handlePrevious = (): void => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
//   };

//   const handleNext = (): void => {
//     setCurrentIndex((prev) => {
//       const maxIndex = videos.length - currentVisibleCards;
//       return prev < maxIndex ? prev + 1 : prev;
//     });
//   };

//   const handlePlayPauseClick = (videoId: number, e: React.MouseEvent): void => {
//     e.stopPropagation();
    
//     const video = videoRefs.current[videoId];
//     if (!video) return;

//     if (playingVideo === videoId) {
//       video.pause();
//       setPlayingVideo(null);
//     } else {
//       Object.keys(videoRefs.current).forEach((key) => {
//         const id = parseInt(key);
//         if (id !== videoId && videoRefs.current[id]) {
//           videoRefs.current[id]?.pause();
//         }
//       });
      
//       video.play();
//       setPlayingVideo(videoId);
//     }
//   };

//   const handleVideoPlay = (videoId: number): void => {
//     setPlayingVideo(videoId);
//   };

//   const handleVideoPause = (videoId: number): void => {
//     setPlayingVideo(null);
//   };

//   const handleVideoEnded = (videoId: number): void => {
//     setPlayingVideo(null);
//   };

//   const handleSkipForward = (videoId: number, e: React.MouseEvent): void => {
//     e.stopPropagation();
//     const video = videoRefs.current[videoId];
//     if (video) {
//       video.currentTime = Math.min(video.currentTime + 10, video.duration);
//     }
//   };

//   const handleSkipBackward = (videoId: number, e: React.MouseEvent): void => {
//     e.stopPropagation();
//     const video = videoRefs.current[videoId];
//     if (video) {
//       video.currentTime = Math.max(video.currentTime - 10, 0);
//     }
//   };

//   if (videos.length === 0) {
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
//       <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
//         {title}
//       </h1>

//       <div className="relative w-full max-w-7xl">
//         <button
//           onClick={handlePrevious}
//           className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//           disabled={currentIndex === 0}
//           aria-label="Previous videos"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
//           disabled={currentIndex >= videos.length - currentVisibleCards}
//           aria-label="Next videos"
//         >
//           <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         <div className="overflow-hidden px-12 sm:px-14 md:px-16">
//           <div
//             className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / currentVisibleCards + (currentVisibleCards === 1 ? 3 : currentVisibleCards === 2 ? 2 : 1.5))}%)`
//             }}
//           >
//             {videos.map((video) => (
//               <div
//                 key={video.id}
//                 className={`shrink-0 ${
//                   currentVisibleCards === 1 
//                     ? 'w-[calc(100%-12px)]' 
//                     : currentVisibleCards === 2 
//                     ? 'w-[calc(50%-8px)]' 
//                     : currentVisibleCards === 3 
//                     ? 'w-[calc(33.333%-16px)]' 
//                     : 'w-[calc(25%-18px)]'
//                 } min-w-50`}
//               >
//                 <div className="relative group rounded-2xl overflow-hidden aspect-video bg-gray-800 shadow-2xl hover:shadow-red-600/20 transition-shadow duration-300">
//                   <video
//                     ref={(el: HTMLVideoElement | null) => { videoRefs.current[video.id] = el; }}
//                     className="w-full h-full object-cover"
//                     onPlay={() => handleVideoPlay(video.id)}
//                     onPause={() => handleVideoPause(video.id)}
//                     onEnded={() => handleVideoEnded(video.id)}
//                     playsInline
//                     preload="metadata"
//                     controls
//                     controlsList="nodownload"
//                     muted={false}
//                   >
//                     <source src={video.videoUrl} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>

//                   <div 
//                     className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
//                     onClick={(e) => handlePlayPauseClick(video.id, e)}
//                   >
//                     <div className="bg-red-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
//                       {playingVideo === video.id ? (
//                         <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                         </svg>
//                       ) : (
//                         <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M8 5v14l11-7z" />
//                         </svg>
//                       )}
//                     </div>
//                   </div>

//                   {playingVideo === video.id && (
//                     <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
//                       <button
//                         onClick={(e) => handleSkipBackward(video.id, e)}
//                         className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
//                         aria-label="Skip backward 10 seconds"
//                       >
//                         <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
//                           <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
//                         </svg>
//                       </button>
//                       <button
//                         onClick={(e) => handleSkipForward(video.id, e)}
//                         className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
//                         aria-label="Skip forward 10 seconds"
//                       >
//                         <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
//                           <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
//                         </svg>
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center mt-6 md:mt-8 gap-2">
//           {Array.from({ length: Math.max(0, videos.length - currentVisibleCards + 1) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-600 hover:bg-gray-500'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };





// const videosgallery = () => {
//   return (
//     <div>
//       <VideoPreviewGallery videoUrls={videos}/>
//     </div>
//   )
// }

// export default videosgallery






























'use client';

import { videos } from "@/lib/videourls";
import React, { useRef } from "react";
import { useState } from "react";


// VideoPreviewGallery Component
interface Video {
  id: number;
  videoUrl: string;
}

interface VideoPreviewGalleryProps {
  videoUrls?: string[];
  title?: string;
}

const VideoPreviewGallery: React.FC<VideoPreviewGalleryProps> = ({
  videoUrls = [],
  title = "Video Preview Gallery"
}) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
   
  // Convert videoUrls array to Video objects
  const videos: Video[] = videoUrls.length > 0 
    ? videoUrls.map((url, index) => ({
        id: index + 1,
        videoUrl: url
      }))
    : [];

  const handlePlayPauseClick = (videoId: number, e: React.MouseEvent): void => {
    e.stopPropagation();
    
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideo === videoId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      Object.keys(videoRefs.current).forEach((key) => {
        const id = parseInt(key);
        if (id !== videoId && videoRefs.current[id]) {
          videoRefs.current[id]?.pause();
        }
      });
      
      video.play();
      setPlayingVideo(videoId);
    }
  };

  const handleVideoPlay = (videoId: number): void => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = (videoId: number): void => {
    setPlayingVideo(null);
  };

  const handleVideoEnded = (videoId: number): void => {
    setPlayingVideo(null);
  };

  const handleSkipForward = (videoId: number, e: React.MouseEvent): void => {
    e.stopPropagation();
    const video = videoRefs.current[videoId];
    if (video) {
      video.currentTime = Math.min(video.currentTime + 10, video.duration);
    }
  };

  const handleSkipBackward = (videoId: number, e: React.MouseEvent): void => {
    e.stopPropagation();
    const video = videoRefs.current[videoId];
    if (video) {
      video.currentTime = Math.max(video.currentTime - 10, 0);
    }
  };

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center">
        {title}
      </h1>

      <div className="w-full max-w-7xl">
        {/* Grid Layout: 1 column (mobile), 2 columns (medium), 3 columns (large) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <div key={video.id} className="w-full">
              <div className="relative group rounded-2xl overflow-hidden aspect-video bg-gray-800 shadow-2xl hover:shadow-red-600/20 transition-shadow duration-300">
                <video
                  ref={(el: HTMLVideoElement | null) => { videoRefs.current[video.id] = el; }}
                  className="w-full h-full object-cover"
                  onPlay={() => handleVideoPlay(video.id)}
                  onPause={() => handleVideoPause(video.id)}
                  onEnded={() => handleVideoEnded(video.id)}
                  playsInline
                  preload="metadata"
                  controls
                  controlsList="nodownload"
                  muted={false}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200 cursor-pointer opacity-0 group-hover:opacity-100"
                  onClick={(e) => handlePlayPauseClick(video.id, e)}
                >
                  <div className="bg-red-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    {playingVideo === video.id ? (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </div>

                {playingVideo === video.id && (
                  <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <button
                      onClick={(e) => handleSkipBackward(video.id, e)}
                      className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
                      aria-label="Skip backward 10 seconds"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                        <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
                      </svg>
                    </button>
                    <button
                      onClick={(e) => handleSkipForward(video.id, e)}
                      className="bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 pointer-events-auto"
                      aria-label="Skip forward 10 seconds"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
                        <text x="12" y="16" fontSize="8" textAnchor="middle" fill="white" fontWeight="bold">10</text>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const videosgallery = () => {
  return (
    <div>
      <VideoPreviewGallery videoUrls={videos}/>
    </div>
  )
}

export default videosgallery