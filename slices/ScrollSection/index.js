/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useRef, useState } from 'react'
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


const ScrollSection = ({ slice }) => {

  

  return (
    <section>
      <div id="trigger" sx={{
        height: '100vh',
        background: 'red'
      }}/>
      <Controller>
        <div sx={{height: '100vh'}} />
        <div sx={{height: '100vh'}} />
        <Scene
            duration={500}
          >
            {(progress) => (
              <div sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                alignItems: 'end',
                background: 'red',
                height: '100vh'
              }}>
                {/* {progress} */}
                <Tween        
                  from={{
                    css:{
                      height: 0
                    }
                  }}
                  to={{
                    css:{
                      height: '100vh'
                    },
                    ease: 'Linear.ease',
                  }}
                  stagger={.25}
                  totalProgress={progress}
                  paused
                >
                  <div className="stagger" sx={{ background: 'white' }} />
                  <div className="stagger" sx={{ background: 'black' }} />
                  <div className="stagger" sx={{ background: 'white' }} />
                  <div className="stagger" sx={{ background: 'black' }} />
                  <div className="stagger" sx={{ background: 'white' }} />
                </Tween>
              </div>
            )}
          </Scene>
      </Controller>
      <div sx={{height: '100vh'}} />
      <div sx={{height: '100vh'}} />
    </section>
  );
}

export default ScrollSection;
