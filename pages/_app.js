import React from "react";
import '../styles/global_style.css'
import Header from "../components/Header/Headers";
import Footer from "../components/Footer/Footer";
import Layout from '../components/Layout/Layout'
export default function MyApp({ Component, pageProps }) {
  return (
     <Layout>
      <Component {...pageProps} />
     </Layout>
  )
}

