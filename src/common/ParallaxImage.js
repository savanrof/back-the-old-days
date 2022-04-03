import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImage = ({imgSrc, height, children}) => {
    return (
        <ParallaxBanner
        layers={[{image: imgSrc, amount: 0.6}]}
        style={{height: height}}
        >
            <div>
                {children}
            </div>
        </ParallaxBanner>
    )
};

export default ParallaxImage