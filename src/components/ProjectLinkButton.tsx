interface ProjectLinkButtonProps {
    link?: string;
}

export default function ProjectLinkButton({ link }: ProjectLinkButtonProps) {
    // If link is available, show "Visit Site" button
    if (link) {
        return (
            <div className="mb-4">
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#353E4C] text-white rounded-lg text-sm font-medium shadow-sm"
                >
                    <span>Visit Site</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        );
    }

    // If no link, show "No Link Available" badge
    return (
        <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium border border-gray-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>No Link Available</span>
            </div>
        </div>
    );
}

