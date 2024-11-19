import ImgArr from "../img_assets";
import "./css/Home.css";
import Skills from "../components/SkillBox";

export default function Home(){
    
    return (<>        
        <div id="part1">
            <div id="part1_c1">
            
                <h1 className="home_h1">FrontEnd<br/>Developer.</h1>
    
                <p id="part1_c1_1">Passionate in front-end development with a strong foundation in HTML, CSS, and some on JavaScript. Also committed to keep learning and growth in the other field of computer science.</p>
                <h4>Status: <strong className="status"></strong> Junior Software Developer and Operations @ Guard Genius Sdn. Bhd.</h4>
              
                <div className="w-full flex justify-center mb-3">
                <button id="contactNow"  className="text-3xl sm:text-2xl text-slate-800 bg-slate-200 "><a href="https://wa.link/k7r72h">Contact Now</a></button>
                </div>

            </div>
            <div id="part1_c2">
                <img id="myPic"src={ImgArr("profile_pic")} alt="mypicture"/>
            </div>
        </div>

        <div id="part2">
            <div id="part2_child1">
                <h1>Skill Set.</h1>
            </div>

            <div id="part2_child2">
                <div id="part2_child2_1">
                    <Skills skill={"HTML"}/>
                    <Skills skill={"CSS"}/>
                    <Skills skill={"Java"}/>
                    <Skills skill={"JavaScript"}/>
                    <Skills skill={"Python"}/>
                    <Skills skill={"MySQL"}/>
                    <Skills skill={"VS Code"}/>
                    <Skills skill={"Android Studio"}/>
                    <Skills skill={"XML"}/>
                    <Skills skill={"FastAPI"}/>
                    <Skills skill={"Flutter"}/>
                    
                </div>
            </div>
        </div>
    </>);
}


