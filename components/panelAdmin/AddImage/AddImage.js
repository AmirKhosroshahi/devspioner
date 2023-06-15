import Styles from "../MainDashboard/MainDashboard.module.scss";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import React from "react";
import axios from "axios";


function AddImage({dataImage}) {

    const styleParent = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(24%, 1fr))',
        padding: '43px 160px 52px 165px',
    }
    const style = {
        color: 'white',
        width: '332px',
        border: '1px solid',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin:'10px 0'
    }
    const handlerClick = (id) => {

        axios.delete(`${process.env.NEXT_PUBLIC_DELETE_IMAGE_INFO}/${id}`)
        const infoDelete = document.querySelector(`.image_${id}`);
        infoDelete.remove();
    }

    const getAllImageInfo = dataImage?.map(item => {
        return (
            <>
                <div key={`item__${item.id}`} style={style} className={`image_${item.id}`}>
                        <span style={{padding: '10px'}}>
                            <Image src={`/image/image_info/${item.image}`} width={'100'} height={'100'}
                                   style={{width: '100%'}}></Image>
                        </span>
                    {item.title}
                    <button onClick={() => handlerClick(item.id)} className={Styles['delete']}>Delete</button>
                </div>
            </>
        )
    });

    return (
        <>
            <form method='post' action={`${process.env.NEXT_PUBLIC_POST_IMAGE_PROJECTS}`}
                  encType="multipart/form-data">
                <div className={Styles['main-dashboardamircv']}>
                    <SideBar/>
                    <section className={Styles['main-dashboardamircv__section-project']}>
                        <div className={Styles['main-dashboardamircv__section-project__input']}>
                            <input type="file" name='imageProjects' placeholder='image Project'/>
                            <button>Send</button>
                        </div>
                    </section>
                </div>
            </form>
            <div style={styleParent} >
                {getAllImageInfo}
            </div>
        </>

    );
}

export default AddImage;