import GetContactUs from "../../components/panelAdmin/GetContactUs/GetContactUs";
import axios from "axios";

const GetContactUsUser = (props) => {
    const {getAllContactUs} = props
    return (
        <GetContactUs dataContactUs={getAllContactUs} />
    );
};

export default GetContactUsUser;

export async function getServerSideProps() {

   const getAllContactUsUser = await axios.get(process.env.NEXT_PUBLIC_GET_CONTACTUS_USER);
    return {
        props:{
            getAllContactUs : getAllContactUsUser.data.getAllContactUs,

        }
    }
}