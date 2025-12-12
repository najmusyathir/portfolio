import ProjectImage from './ProjectImage';
import ProjectLinkButton from './ProjectLinkButton';

interface ProjectCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    dateLabel: string;
    date: string;
    thumbnail?: string;
}

export default function ProjectCard({
    imageSrc,
    imageAlt,
    title,
    description,
    techStack,
    link,
    dateLabel,
    date,
    thumbnail
}: ProjectCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl duration-300">
            <div className="flex flex-col">
                {/* Image Section */}
                <ProjectImage 
                    src={imageSrc} 
                    alt={imageAlt}
                    thumbnail={thumbnail}
                />
                
                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className='flex flex-col items-center'>
                        {/* Title */}
                        <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#353E4C]">
                            {title}
                        </h2>
                        
                        {/* Brief Description */}
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                            {description}
                        </p>
                        
                        {/* Tech Stacks */}
                        <div className="mb-4">
                            <h5 className="text-xs font-semibold text-[#353E4C] mb-2 uppercase tracking-wide">
                                Tech Stack
                            </h5>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-2.5 py-1 bg-[#f3f3f3] text-[#353E4C] rounded-full text-xs font-medium border border-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Visit Link Button */}
                    <ProjectLinkButton link={link} />
                    
                    {/* Release Date */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs text-gray-600 font-medium">
                                {dateLabel}: <span className="text-[#353E4C]">{date}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

