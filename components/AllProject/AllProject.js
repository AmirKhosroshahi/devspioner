import React from 'react';
import Styles from './AllProject.module.scss';
import ViewProject from "../ViewProject/ViewProject";
import H_head from '../H_head/H_head';
import Recent_projects from "../Recent_projects/Recent_projects";
import OurClients from "../OurClients/OurClients";
const AllProject = ({projectsLanding,imageLandingProjects,ourClient}) => {

    const viewAllProjects = projectsLanding?.map((item,index)=>{
        return(
            <ViewProject key={`item_${item.id}`}  id={index} title={item.title} link={item.link} image={item.image} technology={item.technology}/>
        )
    })
    return (
        <section className={Styles.contentAllProject}>
            <div>
                <H_head >Project</H_head>
                {viewAllProjects}
                <Recent_projects image={imageLandingProjects} />
                <OurClients ourClients={ourClient} />
            </div>
        </section>
    );
};

export default AllProject;
