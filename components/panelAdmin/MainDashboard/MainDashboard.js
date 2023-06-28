import React, {useState} from 'react';
import Styles from './MainDashboard.module.scss';
import SideBar from "../SideBar/SideBar";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {techCompanies} from '../../../static/data'
import Image from "next/image";
import {useRouter} from 'next/router'
import axios from "axios";
import clsx from "clsx";

const MainDashboard = (props) => {
        const router = useRouter()
        const {dataEditProject} = props;
        const {AllProjects} = dataEditProject

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

        const handlerClick = (id, method = '') => {
            if (!method) {
                router.push(`dashboardamircv/${id}`);
            } else {
                axios.delete(`${process.env.NEXT_PUBLIC_DELETE_PROJECT}/${id}`)
                const infoDelete = document.querySelector(`.project_${id}`);
                infoDelete.remove();
            }
        }

        const dataMapAllProject = AllProjects?.map(item => {
            return (
                <>
                    <div key={`item_${item.id}`}
                         className={clsx(`project_${item.id}`, Styles['row-project__box-image'])}>
                        <span className={Styles['row-project__box-image__box-image']}>
                            <Image src={item.image} width={'100'} height={'100'} style={{width: '100%'}}></Image>
                        </span>
                        <span>{item.title}</span>
                        <span>{item.link}</span>

                        <button onClick={() => handlerClick(item.id)}>
                            Edit
                        </button>
                        <button onClick={() => handlerClick(item.id, 'delete')}>
                            Delete
                        </button>
                        
                    </div>
                </>
            )
        });

        return (
            <>
                <form method='post' action={process.env.NEXT_PUBLIC_POST_ATTR_PROJECT}
                      encType="multipart/form-data">
                    <div className={Styles['main-dashboardamircv']}>
                        <SideBar/>
                        <section className={Styles['main-dashboardamircv__section-project']}>
                            <div className={Styles['main-dashboardamircv__section-project__input']}>
                                <input type="text" name='nameProject' placeholder='Name Project'
                                       onChange={changeHandlers}/>
                                <input type="text" name='linkProject' placeholder='Link Project'
                                       onChange={changeHandlers}/>
                                <Select options={techCompanies} isMulti name={'technology[]'}
                                        className={Styles['main-dashboardamircv__section-project__input_select']}
                                        placeholder={'technology'}
                                        onChange={selectHandler}/>
                                <input type="file" name='imageProject' placeholder='image Project'
                                       onChange={changeHandlersSelectFile}/>
                                <button>Send</button>
                            </div>
                        </section>
                    </div>
                </form>
                <div className={Styles['row-project']}>
                    {dataMapAllProject}
                </div>

            </>

        );
    }
;

export default MainDashboard;