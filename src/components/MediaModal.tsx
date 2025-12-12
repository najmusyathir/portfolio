import { useEffect } from 'react';

interface MediaModalProps {
    src: string;
    alt: string;
    type: 'image' | 'video';
    isOpen: boolean;
    onClose: () => void;
}

export default function MediaModal({ src, alt, type, isOpen, onClose }: MediaModalProps) {
    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-60 text-white p-2"
                aria-label="Close modal"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Media container */}
            <div 
                className="relative max-w-[80vw] max-h-[95vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {type === 'image' ? (
                    <img 
                        src={src} 
                        alt={alt}
                        className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />
                ) : (
                    <video 
                        src={src}
                        controls
                        autoPlay
                        className="max-w-full max-h-[95vh] rounded-lg shadow-2xl"
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
}

