/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';


const HeaderElem = ({ slice }) => (
  <section
    
    sx={{
      maxWidth: '750px',
      margin: '2rem 0',
      padding: '0 2rem',
    }}
  >
    <h2
      sx={{
        borderTop: '6px solid #4f4f4f',
        width: '100%',
        display: 'block',
        fontSize: 5,
        fontWeight: 'bold',
        padding: '1.5rem 0',
        color: '#4f4f4f',
        lineHeight: 1
      }}
    >{ slice.primary.headline }</h2>
  </section>
);

export default HeaderElem;
