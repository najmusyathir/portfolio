import './css/project_box.css'

function ProjectsItem({  title="",    pic="",    link='',    desc=""
})
{

    return(
        <div className='project-item'>
            {title}<br/>
            {pic}<br/>
            {link}<br/>
            {desc}<br/>
        </div>
    );
}

export default ProjectsItem;