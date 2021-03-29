/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';


const FoldSection = ({ slice }) => {
  return(
    <section 
      sx={{
        backgroundImage: `url(${slice.primary.foldBackgroundImage.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh'
      }}>
      <div sx={{
            fontSize: 5,
            fontFamily: 'heading'
          }}
      >
        <RichText render={slice.primary.title} />
      </div>
    </section>
  )
}

FoldSection.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoldSection;