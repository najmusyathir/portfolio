
import ImgModel from '../img_assets';


export default function Projects(){
    return (
        <div>        
            <div id="part1" className='pb-5'>
                <div className="div_flex_col">
                    <h1>My Projects.</h1>
                    <div className="w-full flex flex-col justify-center align-center text-center">
                        <p className="text-center w-full px-4">Showcasing a collection of side projects focused solely on front-end development, highlighting my expertise in creating responsive and engaging user interfaces.</p>
                        <div className="w-full mt-5 flex justify-center gap-3 gap-y-10 px-4 flex-wrap">
                            <a href='https://bakers-heist.vercel.app/'>
                                <img src={ImgModel('project1')} className="cursor-pointer"/>         
                            </a>
                            <a href='https://astral-apparel.vercel.app/'>
                                <img src={ImgModel('project2')} className="cursor-pointer"/>         
                            </a>
                            <img src={ImgModel('project3')} className="cursor-pointer"/>         
                        </div>
                    </div>
               </div>

            </div>
                <div className="part2 w-full my-20 bg-white">
                    <h3>
                        More projects coming soon...
                    </h3>
                </div>
        </div>
    )
}