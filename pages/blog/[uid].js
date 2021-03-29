/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui';
import { Client } from "../../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import Navigation from '../../partials/navigation';
import resolver from "../../sm-resolver";

const Page = (props) => {
  return(
    <>
      <Navigation />
      <div
        sx={{
          maxWidth: '750px',
          margin: '2rem 0',
          padding: '0 2rem',
        }}
      >
        <h1
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
        >{ props.data.post_title[0].text.toUpperCase() }</h1>
      </div>
      <SliceZone {...props} resolver={resolver} />
    </>
  )
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "post",
  uid: ({ params }) => params.uid,
});

export const getStaticPaths = useGetStaticPaths({ 
  client: Client(),
  type: "post",
  fallback: process.env.NODE_ENV === "development",
  formatPath: ({ uid }) => ({ params: { uid } }),
});

export default Page;