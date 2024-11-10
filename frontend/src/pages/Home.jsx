import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import SpecialityMenu from "../Components/SpecialityManu";
import TopDoctors from "../Components/TopDoctors";
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