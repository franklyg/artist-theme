/** @jsxRuntime classic /
/* @jsx jsx */
import Head from 'next/head';
import { jsx } from 'theme-ui';

import SliceZone from "next-slicezone";
import { useGetStaticPaths } from "next-slicezone/hooks";
import { query } from "next-slicezone/features/query";

import { Client } from "../../prismicKits";
import Navigation from '../../partials/navigation';
import resolver from "../../sm-resolver";

const Page = (props) => {
  return(
    <>
      <Head>
        <title>Fragmiint</title>
      </Head>
      <Navigation dataJSON={props.dataJSON} />
      <div
        sx={{
          maxWidth: '750px',
          margin: '2rem 0',
          padding: '0 2rem',
        }}
      >
        {/* <h1
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
        >{ props.data.post_title[0].text.toUpperCase() }</h1> */}
      </div>
      <SliceZone {...props} resolver={resolver} />
    </>
  )
};

export const useGetStaticProps = ({
  uid,
  lang,
  params,
  client,
  body = 'body',
  type = 'page',
  queryType = 'repeat',
}) => {
  const apiParams = params || { lang }

  return async function getStaticProps({
    preview = null,
    previewData = {},
    params = {}
  }) {

    const { ref = null } = previewData
    const resolvedUid = typeof uid === 'function' ? uid({ params, previewData, preview }) : (uid || null)

    try {
      const doc = await query({
        queryType,
        apiParams: Object.assign({ ref }, apiParams),
        type,
        uid: resolvedUid,
        client,
      })

      var dataJSON = [];

      const SPOTIFY_ID = '0CXrZUvQjJYUiI0oztItS5';
      const TRACK_TYPE = 'track';

      const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${TRACK_TYPE}%3A${SPOTIFY_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
      dataJSON = await res.json();
      
      return {
        props: {
          ...doc,
          error: null,
          slices: doc ? doc.data[body] : [],
          dataJSON
        }
      }

    } catch(e) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`[next-slicezone] ${e.toString()}`)
      }
      return {
        props: {
          ref,
          error: e.toString(),
          uid: resolvedUid,
          slices: [],
          // registry: null
        }
      }
    }
  }
}

export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: "post",
  uid: ({ params }) => params.uid,
})

export const getStaticPaths = useGetStaticPaths({ 
  client: Client(),
  type: "post",
  fallback: process.env.NODE_ENV === "development",
  formatPath: ({ uid }) => ({ params: { uid } }),
});

export default Page;