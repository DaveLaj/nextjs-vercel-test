"use client";
import React from "react";
import { LottieComponentProps } from "lottie-react";
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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