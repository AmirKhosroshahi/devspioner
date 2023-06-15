import AddImage from "../../components/panelAdmin/AddImage/AddImage";
import axios from "axios";
const AddImages = ({getAllImage})=> {
    const {imageLandingProjects} = getAllImage;
    return (
        <AddImage dataImage={imageLandingProjects}/>
    );
}

export default AddImages;

export async function getServerSideProps () {

    const getAllImages = await axios.get(process.env.NEXT_PUBLIC_GET_IMAGE_PROJECT_LANDING_All);

    return {
        props:{
           getAllImage : getAllImages.data,
        }
    }

}