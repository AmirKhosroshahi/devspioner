import React, {useEffect, useState} from 'react';
import HeaderLanding from "../../components/HeaderLanding/HeaderLanding";
import Advice from "../../components/Advice/Advice";
import Recent_projects from "../../components/Recent_projects/Recent_projects";
import ViewProject from '../../components/ViewProject/ViewProject';
import H_head from '../../components/H_head/H_head';
import Styles from "./index.module.scss";
import SectionAdvantage from "../SectionAdvantage/SectionAdvantage";
import {projects} from "../../static/language";

const Landing = ({imageLandingProjects, projectsLanding}) => {
    const [daraProject,setDataProject] = useState([]);
    useEffect(()=>{
        setDataProject(projects);
    },[])
    const viewAllProjects = projectsLanding?.map((item, index) => {
        return (
            <ViewProject key={`item_${item.id}`} id={index} title={item.title} link={item.link} image={item.image}
                         technology={item.technology}/>
        )
    })
    return (
        <div>
            <HeaderLanding/>
            <Advice/>
            <SectionAdvantage />
            {/*<Recent_projects image={imageLandingProjects}/>*/}
            <H_head className={Styles.globalCenter}>{daraProject[0]}</H_head>
            {viewAllProjects}
        </div>
    );
};

export default Landing;
