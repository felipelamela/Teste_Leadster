import Head from 'next/head';
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Main from "../component/Main/Main";
import TitleSec from "../component/TitleSec/TitleSec"
import DescriSec from "@/component/DescriSec/DescriSec";


export default function Home() {
  return (
    <>
      <Head><link rel="icon" href="/favicon.ico" sizes="any" /></Head>
      <Header />
      <TitleSec />
      <Main />
      <DescriSec />
      <Footer />
    </>
  );
}
