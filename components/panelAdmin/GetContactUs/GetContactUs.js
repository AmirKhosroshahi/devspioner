import Styles from "../MainDashboard/MainDashboard.module.scss";
import SideBar from "../SideBar/SideBar";
import axios from "axios";

const GetContactUs = (props) => {
    const {dataContactUs} = props
    const Style = {
        width: '100%',
        color: 'white',
        display: 'flex',
        padding: '35px',
        flexDirection: 'column',
        borderBottom: '1px solid',
    }
    const styleBtn = {
        zIndex: '2',
        border: '1px solid',
        padding: '10px',
        position: 'absolute',
        right: ' 24px'
    }
    const handleDelete = (id) => {

        axios.delete(`${process.env.NEXT_PUBLIC_DELETE_CONTACTUS_USER}/${id}`)
        const selectRow = document.querySelector(`.contact_${id}`);
        selectRow.remove();

    }
    const mapDataContactUs = dataContactUs?.map(item => {
        return (
            <div key={item.id} style={Style} className={`contact_${item.id}`}>
                <div> Name : {item.name}</div>
                <div> Email : {item.email}</div>
                <div>{item.text}</div>
                <span onClick={() => handleDelete(item.id)} style={styleBtn}>Delete</span>
            </div>
        )
    });
    return (
        <form method='post' action={`${process.env.NEXT_PUBLIC_POST_IMAGE_PROJECTS}`}
              encType="multipart/form-data">
            <div className={Styles['main-dashboardamircv']}>
                <SideBar/>
                <section className={Styles['main-dashboardamircv__section-project']}>
                    <div>
                        {mapDataContactUs}
                    </div>
                </section>
            </div>
        </form>
    );
};

export default GetContactUs;