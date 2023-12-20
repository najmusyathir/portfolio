

function Card({
    imgRef="", title="", desc="", links="", clickable="false"
    }){    return (
    <a className="cards" href={links} data-clickable={clickable}>
        <img src={imgRef}/>
        <h3>{title}</h3>
        <p>{desc}</p>
    </a>
        );
}

export default function About(){
    
    return (<>
    <div id="about">
        <div id="part1">
                <div id="about_p1_c1">
                    <h1>About Me.</h1>

                    <div id="about_p1_c1_1">
                    <p>Originating from a background in PC Building, I discovered my passion for crafting comfortable workstations that inspire productivity. As I delved deeper into this pursuit, I realized my inclination towards a field that could maximize the potential of such setups. This journey led me to the realm of computer science. <br/><br/>My initial foray into coding commenced in 2019 with Python. Exploring its application through mathematical logic, I uncovered a natural affinity for this domain. This revelation prompted a significant shift in my academic trajectory—from initially considering the medical and health field, I pivoted towards Computer Science, commencing my degree journey in 2021.<br/><br/>

                    The blend of crafting ideal work environments with the problem-solving aspects of computer science resonated deeply with me. It's an exciting intersection where my skills and passions converge, propelling me towards a fulfilling journey in this dynamic field</p>
                    </div>

                </div>

                <div id="about_p1_c2">
                    <img src="./src/assets/aboutme_bkg.jpeg" alt="My PC Setup"/>
                    
                </div>
  
            </div>

        <div id="part2">

            <h1>My activities</h1>

            <p>Painting a Dynamic Canvas: <strong>"Nurturing Creative Genius, Technology, and Design"</strong></p>

            <div id="cards">
            
        <Card
        imgRef={"./src/assets/aboutme_1.jpg"}
        title={"Graphic Designs Sightseeing"}
        links={"https://www.instagram.com/arshakirpk/"}
        desc={"Love to see modern UI/UX designs from creative designers and highly interested to make their designs fully functional."
        }
        clickable="true"
        />

        <Card
        imgRef={"./src/assets/aboutme_2(2).jpeg"}
        title={"PC Building"}
        desc={"Enthusiastic about constructing high-end and new-gen PCs, passionate in create cozy and inspiring workstations."} />

        <Card
        imgRef={"./src/assets/aboutme_3.png"}
        title={"Coding and Web Developing"}
        desc={"Enjoy LeetCode challenges in honing problem-solving skills, crafting dynamic websites, and exploring cutting-edge technologies in the field of web development."}
        links="https://leetcode.com/najmusyathir/"/>

            </div>
        </div>

    </div>
    </>);
}
