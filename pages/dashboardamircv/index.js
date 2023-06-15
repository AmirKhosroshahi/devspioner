import React from 'react';
import MainDashboard from '../../components/panelAdmin/MainDashboard/MainDashboard';
import axios from "axios";

const dashboardamircv = (props) => {
    const {getAllProjectEdit} = props;

    return (
        <div>
            <MainDashboard dataEditProject={getAllProjectEdit}/>
        </div>
    );
};

export default dashboardamircv;

export async function getServerSideProps() {

    const getAll = await axios.get(process.env.NEXT_PUBLIC_GET_ALL_PROJECTS)
    return {
        props: {
            getAllProjectEdit : getAll.data,
        }
    }

}