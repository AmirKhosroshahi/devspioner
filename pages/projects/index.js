import React from 'react';
import AllProject from "../../components/AllProject/AllProject";
import axios from "axios";

const Index = (props) => {
    const {AllProjects} = props.dataProjects;
    const {imageLandingProjects} = props.datImageProjects;
    return (
        <div>
            <AllProject projectsLanding={AllProjects} imageLandingProjects={imageLandingProjects} />
        </div>
    );
};

export async function getServerSideProps({ req, res }) {

    const allProjects = await axios.get(`${process.env.REACT_APP_GET_ALL_PROJECTS}`)
    const imageProjects = await axios.get(`${process.env.REACT_APP_GET_IMAGE_PROJECT_LANDING}`)
    return {
        props: {
            dataProjects : allProjects.data,
            datImageProjects : imageProjects.data
        },
    }

}

export default Index;