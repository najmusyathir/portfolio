import aboutme_1 from "./assets/aboutme_1.jpg";
import aboutme_2 from "./assets/aboutme_2.jpeg";
import aboutme_3 from "./assets/aboutme_3.png";
import aboutme_bkg from "./assets/aboutme_bkg.jpeg";
import example_ui_02 from "./assets/example_ui_02.jpeg";
import example_ui_03 from "./assets/example_ui_03.jpeg";
import profile_pic from "./assets/profile_pic.jpg";
import qr_ws from "./assets/qr_ws.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.mp4";
import current_project from "./assets/current_project.png";
import error404 from "./assets/error404.png";



const imgArr= [
    {
        id:1,
        name:"aboutme_1",
        img:aboutme_1
    },
    {
        id:2,
        name:"aboutme_2",
        img: aboutme_2
    },
    {
        id:3,
        name:"aboutme_3",
        img:aboutme_3
    },
    {
        id:4,
        name:"aboutme_bkg",
        img:aboutme_bkg
    },
    {
        id:4,
        name:"example_ui_02",
        img: example_ui_02
    },
    {
        id:5,
        name:"example_ui_03",
        img: example_ui_03
    },
    {
        id:6,
        name:"profile_pic",
        img: profile_pic
    },
    {
        id:9,
        name:"qr_ws",
        img: qr_ws
    },
    {
        id:10,
        name:"project1",
        img: project1
    },
    {
        id:11,
        name:"project2",
        img: project2
    },
    {
        id:12,
        name:"project3",
        img: project3
    },
    {
        id:13,
        name:"current_project",
        img: current_project
    }
    
]

export default function import_img(name: string){

    for(let i=0;i<imgArr.length;i++){
        if (name==imgArr[i].name){
            return imgArr[i].img;
        }
    }

    return error404;
}