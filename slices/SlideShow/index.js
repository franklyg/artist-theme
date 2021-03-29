/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Slide } from 'react-slideshow-image';

const SlideShow = ({ slice }) => (
  <section>
    <Slide easing="ease">
      
        { 
          slice?.items?.map((item, i) => 
            <div 
              className="each-slide" key={`img-${i}`}
              sx={{
                display: 'flex',
                width: '100%'
              }}
            >
              <img 
              src={item.slideImage.url} 
              alt={item.slideImage.alt} 
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              />
            </div>
          ) 
        }
    </Slide>
  </section>
);

export default SlideShow;
