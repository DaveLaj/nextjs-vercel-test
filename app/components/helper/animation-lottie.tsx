"use client";

import React from "react";
import Lottie, { LottieComponentProps } from "lottie-react";

interface AnimationLottieProps {
  animationPath: object; // or a specific type for your animation data
  width?: string | number; // width is optional
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath, width }) => {
    const defaultOptions: LottieComponentProps = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
        width: width || '95%', // Default to '95%' if width is not provided
        },
    };

    return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;