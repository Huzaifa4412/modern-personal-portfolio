"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";

const images: string[] = [
  "/khizar-portfolio/img1.jpg",
  "/khizar-portfolio/img2.jpg",
  "/khizar-portfolio/img3.png",
  "/khizar-portfolio/img4.png",
  "/khizar-portfolio/img5.png",
  "/khizar-portfolio/img6.png",
  "/khizar-portfolio/img7.jpg",
];

const Card: React.FC = () => {
  return (
    <Wrapper>
      <div className="scene">
        <div
          className="carousel"
          style={{ "--num": images.length } as React.CSSProperties}
        >
          {images.map((src, i) => (
            <div
              className="carousel__cell"
              key={i}
              style={
                {
                  "--i": i,
                } as React.CSSProperties
              }
            >
              <div className="gradient-bg">
                <Image src={src} alt={`Image ${i + 1}`} fill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .scene {
    width: 320px;
    height: 400px;
    perspective: 1200px;

    @media (max-width: 768px) {
      width: 240px;
      height: 320px;
    }

    @media (max-width: 480px) {
      width: 200px;
      height: 280px;
    }
  }

  .carousel {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 40s infinite linear;
  }

  .carousel__cell {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc((360deg / var(--num)) * var(--i))) translateZ(480px);
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
      transform: rotateY(calc((360deg / var(--num)) * var(--i)))
        translateZ(360px);
    }

    @media (max-width: 480px) {
      transform: rotateY(calc((360deg / var(--num)) * var(--i)))
        translateZ(280px);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-360deg);
    }
  }

  .gradient-bg {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      #ff9a9e 0%,
      #fad0c4 25%,
      #a18cd1 50%,
      #fbc2eb 75%,
      #f5f7fa 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.4s ease-in-out;

    img {
      object-fit: contain;
      padding: 12px;
      z-index: 2;
    }
  }
`;
