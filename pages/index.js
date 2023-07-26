import React, {useEffect} from "react";
import Landing from "../components/Landing/Landing";
import axios from "axios";
import {effectScrollHome} from "../functionControlle/allFunction";

export default function Index(props) {

    const {projectsLanding} = props.dataProjects;
    const {imageLandingProjects} = props.datImageProjects;
    useEffect(() => {
        effectScrollHome('effect-text');
    }, []);
    return (
        <Landing projectsLanding={projectsLanding} imageLandingProjects={imageLandingProjects}/>
    )
}


export async function getServerSideProps({req, res}) {

    const landingProjects = await axios.get(process.env.NEXT_PUBLIC_DATA_PROJECTS_LANDING)
    const imageProjects = await axios.get(process.env.NEXT_PUBLIC_GET_IMAGE_PROJECT_LANDING)
    return {
        props: {
            dataProjects: landingProjects.data,
            datImageProjects: imageProjects.data
        },
    }

}
