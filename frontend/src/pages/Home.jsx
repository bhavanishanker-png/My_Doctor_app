import React from "react";
import Header from "../Components/Header";
import SpecialityMenu from "../Components/SpecialityManu";
import TopDoctors from "../Components/TopDoctors";
import Banner from "../Components/Banner";
const Home=()=>{
    return(
        <>
        <Header/>
        <SpecialityMenu/>
        <TopDoctors/>
        <Banner/>
        </>
    )
}
export default Home;