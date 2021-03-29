/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section 
    className="blog"
    sx={{
      maxWidth: '750px',
      padding: '0 2rem'
    }}
  >
    <RichText render={slice.primary.copy} />
  </section>
);

export default MySlice;
