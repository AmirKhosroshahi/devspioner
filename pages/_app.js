import React, {useEffect} from "react";
import '../styles/global_style.scss';
import Layout from '../components/Layout/Layout';
import {useRouter} from "next/router";
import {cursorPointer, blink} from "../functionControlle/allFunction";
import axios from "axios";

function MyApp({Component, pageProps}) {
    const router = useRouter();
    useEffect(() => {
        let getUrl = router.pathname;
        document.title = getUrl === '/' ? 'Home' : getUrl.replace('/', '');
        
        //Character head
        let tagPointer = document.querySelector('.pointer');
        //Right Eye
        let rightEye = document.querySelector('.pointer__right-eye');
        //Left Eye
        let leftEye = document.querySelector('.pointer__left-eye');
        //Nose
        let nose = document.querySelector('.pointer__nose');
        cursorPointer(tagPointer, rightEye, leftEye, nose);
        blink(rightEye, leftEye)
    }, [router])
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_GET_IP_CLIENT).then(res => {
            try {
                let country = res?.data?.country ? res?.data?.country : 'en'
                localStorage.setItem('country', JSON.stringify(country))
            } catch (e) {
            
            }
        });
    }, [])
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;