import React, {useEffect} from "react";
import '../styles/global_style.scss'
import Layout from '../components/Layout/Layout'
import {useRouter} from "next/router";
import {cursorPointer,blink} from "../functionControlle/allFunction";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(()=>{
        let getUrl = router.pathname;
        document.title = getUrl === '/' ? 'Home' : getUrl.replace('/','');

        //Character head
        let tagPointer = document.querySelector('.pointer');
        //Right Eye
        let rightEye = document.querySelector('.pointer__right-eye');
        //Left Eye
        let leftEye = document.querySelector('.pointer__left-eye');
        //Nose
        let nose = document.querySelector('.pointer__nose');
        cursorPointer(tagPointer,rightEye,leftEye,nose);
        blink(rightEye,leftEye)
    },[router])
  return (
     <Layout>
      <Component {...pageProps} />
     </Layout>
  )
}

