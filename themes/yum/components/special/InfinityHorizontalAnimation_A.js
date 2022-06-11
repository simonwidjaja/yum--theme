import React from 'react'
import styled from 'styled-components'
import * as yum from '@@yum'

export default function InfinityHorizontalAnimation_A(props) {
  let className = props.className ? props.className : '';
  let style = props.style ? props.style : {};

  let el = React.createRef();

  React.useEffect(() => {

    function init() {
      console.log('ScrollTrigger.refresh()');
      ScrollTrigger.refresh();
    }
    new ResizeObserver(init).observe( document.body );

    let wrapper = el.current.querySelector('.wrapper');
    let slidingContent = el.current.querySelector('.sliding-content');

    gsap.fromTo(slidingContent, 
      {
        x: 0,
      },
      {
        x: window.innerWidth-3657,
        duration: 30,
        ease: 'linear',
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom',
          end: 'bottom top',
          // markers: true,
          onLeave: function(self) {
            self.animation.pause()
          },
          onEnter: function(self) {
            self.animation.play()            
          },
          onEnterBack: function(self) {
            self.animation.play()            
          },
          onLeaveBack: function(self) {
            self.animation.pause()
          }
        }
      }
    );

    return (() => {
      el.current && gsap.kill(slidingContent);
    })
  });

  return (
    <Component ref={el} className={"InfinityHorizontalAnimation_A "+className} style={style}>
      
      <yum.Container>
        <div className="base">
          <yum.Spacer height="50" />
          <yum.Headline center separator inverted sub="Welcher Stil passt zu Deinem Produkt oder Dienstleistung?">Markenbotschafter</yum.Headline>
        </div>
      </yum.Container>

      <div className="wrapper">

        <div className="sliding-content">
        </div>

      </div>

    </Component>
  )
}


////////////////////////////////////////////////////
// Styles
////////////////////////////////////////////////////

const Component = styled.div`
  
  // ${props => props.theme?.mixin?.font('primary')} 
  // ${props => props.theme?.mixin?.fontSize('h1')}
  
  // ${props => props.theme?.mq?.min('sm')} {
  //  border-right: 10px solid blue;
  //}

  position: relative;
  margin: 120px 0 200px 0;
  overflow: hidden;

  .base {
    background-color: var(--purple);
    background-image: url(/themes/yum/backgrounds/purple_room.jpg);
    background-size: cover;
    margin-bottom: 100px;
    border-radius: 32px;
    height: 500px;
  }

  .wrapper {
    position: absolute;
    bottom: 0px;
    height: 400px;

    .sliding-content {
      width: 4000px;
      height: 391px;
      background-image: url(/themes/yum/wip/characters_all.png);
      background-repeat: repeat-x;
      background-position: 0 50%;
    }
  }

`
