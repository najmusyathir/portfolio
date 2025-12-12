
import ImgModel from '../img_assets';
import ProjectCard from '../components/ProjectCard';
import ProjectImage from '../components/ProjectImage';


export default function Projects() {
    return (
        <div>
            <div id="part1" className='pb-5'>
                <div className="div_flex_col">
                    <h1>My Projects.</h1>
                    <div className="w-full flex flex-col justify-center align-center text-center">
                        <p className="text-center w-full px-4">Showcasing a collection of side projects focused solely on front-end development, highlighting my expertise in creating responsive and engaging user interfaces.</p>
                        <div className="w-full mt-5 flex justify-center gap-3 gap-y-10 px-4 flex-wrap">
                            <img src={ImgModel('project1')} className="cursor-pointer" />
                            <img src={ImgModel('project2')} className="cursor-pointer" />
                            <video
                                src={ImgModel('project3')}
                                className="cursor-pointer"
                                style={{ width: '350px', height: 'auto', maxHeight: '800px' }}
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="part2 w-full my-20 bg-white">
                <h3 className="mb-8">
                    Current Working Project
                </h3>
                <div className="w-full flex justify-center px-4">
                    <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section - Left */}
                            <div className="md:w-2/5 w-full h-64 md:h-auto bg-gray-100 flex items-center justify-center overflow-hidden">
                                {/* <img
                                    src={ImgModel('current_project')}
                                    alt="Acadeon Academy"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                /> */}
                                <ProjectImage src={ImgModel('current_project')} alt="Acadeon Academy" />
                            </div>

                            {/* Content Section - Right */}
                            <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    {/* Title */}
                                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#353E4C]">
                                        Acadeon Academy
                                    </h2>

                                    {/* Brief Description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                        A multi-school management platform to handle students, staff, classes, co-curriculars, sports events, exams, scores, and student records.
                                    </p>

                                    {/* Tech Stacks */}
                                    <div className="mb-4">
                                        <h5 className="text-sm font-semibold text-[#353E4C] mb-2 uppercase tracking-wide">
                                            Tech Stack
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {['Node.js', 'FastAPI', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Docker'].map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-[#f3f3f3] text-[#353E4C] rounded-full text-xs md:text-sm font-medium border border-gray-200 hover:bg-[#EBEEEE] transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Release Date */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm text-gray-600 font-medium">
                                            Release Date: <span className="text-[#353E4C]">In Progress</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delivered Projects Section */}
            <div className="part2 w-full my-20 bg-white">
                <h3 className="mb-8">
                    Delivered Projects
                </h3>
                <div className="w-full flex justify-center px-4">
                    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Project 1: Bakers Heist */}
                        <ProjectCard
                            imageSrc={ImgModel('project1')}
                            imageAlt="Bakers Heist"
                            title="Bakers Heist"
                            description="An elegant e-commerce platform for a cake shop and bakery, featuring a modern design with seamless shopping experience for customers to browse and order delicious baked goods."
                            techStack={['HTML5', 'CSS3', 'JavaScript']}
                            link="https://bakers-heist.vercel.app/"
                            dateLabel="Delivered"
                            date="January 15, 2024"
                        />

                        {/* Project 2: Astral Apparel */}
                        <ProjectCard
                            imageSrc={ImgModel('project2')}
                            imageAlt="Astral Apparel"
                            title="Astral Apparel"
                            description="A stylish online store specializing in Muslimah fashion, offering abaya, baju kurung, and other modest wear. Features a clean, elegant interface designed to showcase traditional and contemporary Islamic clothing."
                            techStack={['HTML5', 'CSS3', 'JavaScript']}
                            link="https://astral-apparel.vercel.app/"
                            dateLabel="Delivered"
                            date="March 22, 2024"
                        />

                        {/* Project 3: One Direction Fan Website */}
                        <ProjectCard
                            imageSrc={ImgModel('project3')}
                            imageAlt="PetCare Clinic System"
                            title="PetCare Clinic System"
                            description="A grooming and vet booking platform for pet clinics, offering appointments, pet profiles, and service management with a clean, user-friendly interface."
                            techStack={['Laravel', 'Blade', 'MySQL', 'JavaScript']}
                            dateLabel="Delivered"
                            date="March 8, 2025"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}