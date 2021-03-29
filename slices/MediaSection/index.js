import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';


const MySlice = ({ slice }) => {

  return(
    <section>
      <div>
        <img />
        <h2></h2>
      </div>
    </section>
  )
}
  

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
