import { useState } from 'react';
import MediaModal from './MediaModal';

interface ProjectImageProps {
    src: string;
    alt: string;
    thumbnail?: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Determine if media is video or image
    const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mov');
    const mediaType = isVideo ? 'video' : 'image';

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div 
                className={`w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative ${isModalOpen ? 'pointer-events-none' : ''}`}
            >
                {isVideo ? (
                    <video 
                        src={src}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={handleImageClick}
                    />
                ) : (
                    <img 
                        src={src} 
                        alt={alt} 
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={handleImageClick}
                    />
                )}
            </div>

            {/* Media Modal */}
            <MediaModal
                src={src}
                alt={alt}
                type={mediaType}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

