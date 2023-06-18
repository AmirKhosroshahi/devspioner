import React, {useEffect, useState} from 'react';

import Styles from "../../components/panelAdmin/MainDashboard/MainDashboard.module.scss";
import SideBar from "../../components/panelAdmin/SideBar/SideBar";
import Select from "react-select";
import {techCompanies} from "../../static/data";
import {useRouter} from 'next/router'
import axios from "axios";
import makeAnimated from 'react-select/animated';

const Editid = (props) => {
    const {ProjectInfo} = props
    const {infoProject} = ProjectInfo;
    const router = useRouter();
    const idProject = router.query.editid;
    const [dataForm, setDataForm] = useState({
        nameProject: '',
        linkProject: '',
    });
    const changeHandlers = (event) => {
        setDataForm({
            ...dataForm,
            [event?.target?.name]: event?.target?.value,
        })

    }
    const changeHandlersSelectFile = (event) => {
        if (event?.target?.files) {
            setDataForm({
                ...dataForm,
                [event?.target?.name]: [{
                    name: event?.target?.files[0].name,
                    baseURI: event?.target?.value,
                    size: event?.target?.files[0].size,
                    type: event?.target?.files[0].type,

                }]
            })
        }

    }
    const selectHandler = (event) => {
        setDataForm({
            ...dataForm,
            event
        })
    }

    const animatedComponents = makeAnimated();
    const filterCode = infoProject.technology.split(',');

    const arrOfNum = filterCode.map(str => {
        return parseInt(str, 10);
    });

    const filterTech = techCompanies.filter((element) => {
        return arrOfNum.includes(element.value);
    });
    return (
        <form method='post' action={`${process.env.NEXT_PUBLIC_BASE_URL}/sendAttrProject/${idProject}`}
              encType="multipart/form-data">
            <div className={Styles['main-dashboardamircv']}>
                <SideBar/>
                <section className={Styles['main-dashboardamircv__section-project']}>
                    <div className={Styles['main-dashboardamircv__section-project__input']}>
                        <input type="text" defaultValue={infoProject.title} name='nameProject'
                               placeholder='Name Project'
                               onChange={changeHandlers}/>
                        <input type="text" defaultValue={infoProject.link} name='linkProject' placeholder='Link Project'
                               onChange={changeHandlers}/>
                        {
                            <Select name={'technology[]'}
                                    className={Styles['main-dashboardamircv__section-project__input_select']}
                                    placeholder={'select technology'}
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={filterTech}
                                    isMulti
                                    onChange={(option) => selectHandler(option)}
                                    options={techCompanies}
                            />

                        }

                        <input type="file" name='imageProject' placeholder='image Project'
                               onChange={changeHandlersSelectFile}/>
                        <button>Send</button>

                    </div>
                </section>
            </div>
        </form>
    );
};

export default Editid;

export async function getServerSideProps(context) {
    const {editid} = context.query;
    const getProjectInfo = await axios.get(`${process.env.NEXT_PUBLIC_GET_PROJECT_INFO}/${editid}`)

    return {
        props: {
            ProjectInfo: getProjectInfo.data,
        }
    }

}