import React from 'react';
import AllProject from "../../components/AllProject/AllProject";
import axios from "axios";

const Index = (props) => {
    const {AllProjects} = props?.dataProjects
    const {imageLandingProjects} = props?.datImageProjects
    const {AllOurClient} = props?.dataOurClient
    return (
        <div>
            <AllProject projectsLanding={AllProjects} imageLandingProjects={imageLandingProjects} ourClient={AllOurClient}/>
        </div>
    );
};

export async function getServerSideProps({res,reg}) {

    const allProjects = await axios.get(process.env.NEXT_PUBLIC_GET_ALL_PROJECTS)
    const imageProjects = await axios.get(process.env.NEXT_PUBLIC_GET_IMAGE_PROJECT_LANDING)
    const ourClient = await axios.get(process.env.NEXT_PUBLIC_API_OUR_CLIENT)
    return {
        props: {
            dataProjects: allProjects.data,
            datImageProjects: imageProjects.data,
            dataOurClient: ourClient.data
        }
    }
}

export default Index;