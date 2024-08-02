import Image from "next/image";
import HomeNavbar from "./components/user/Home/HomeNavbar";
import Banner from "./components/user/Home/Banner";
import CardVideoSection from "./components/user/Home/CardVideoSection";
import Footer from "./components/user/Home/Footer";

export default function Home() {
  return (
    <main className="">
    <HomeNavbar/>
    <Banner/>
    <CardVideoSection/>
    <Footer/>
    </main>
  );
}
