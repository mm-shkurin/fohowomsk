import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentTree from "./ContentTree";
import Footer from "./Footer"
import React from "react";
import Slider from "./Slider";

function ContentHome() {
    const images = [
        "image 12 (2).png",
        "image 3.png",
        "image 9.png"
    ];
    return (
        <section className="ContentHome">
            <ContentOne></ContentOne>
            <ContentTwo></ContentTwo>
            <ContentTree></ContentTree>
            <Slider></Slider>
            <Footer></Footer>
        </section>

    )
}

export default ContentHome;