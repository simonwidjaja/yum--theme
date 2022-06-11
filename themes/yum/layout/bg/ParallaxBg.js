import React from "react";
import styled from "styled-components";

/**
 * 
 */

export default function ParallaxBg() {
  React.useEffect(() => {
    gsap.to(".parallax-bg-1", {
      // yPercent: 60,
      yPercent: 10,
      // ease: "none",
      // ease: "power2.inOut",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".parallax-bg",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: 3,
      }, 
    });
    gsap.to(".parallax-bg-2", {
      yPercent: 30,
      // ease: "none",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".parallax-bg",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: .1,
      }, 
    });
    return () => {
      console.log('test');
      gsap.killTweensOf(".parallax-bg-1");
      gsap.killTweensOf(".parallax-bg-2");
    }
  });
  return (
    <Component className="parallax-bg">
      <div className="parallax-bg-1"></div>
      <div className="parallax-bg-2"></div>
    </Component>
  );
}

////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
  overflow: hidden;

  .parallax-bg-1 {
    position: absolute;
    top: -600px;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(/themes/yum/wip/se_wip_far.svg);
    background-position: 50% 0;
    background-size: cover;
    // filter: grayscale(1) blur(4px);
    filter: blur(4px);
    opacity: .7;
  }

  .parallax-bg-2 {
    position: absolute;
    top: -600px;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(/themes/yum/wip/se_wip_close.svg);
    background-position: 50% 0;
    background-size: cover;
    // filter: blur(4px);
    // filter: grayscale(1) blur(4px);
    // filter: grayscale(1);
    opacity: .6;
  }
`;
