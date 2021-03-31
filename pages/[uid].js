import { Client } from "../prismicKits";
import Head from 'next/head';
import SliceZone from "next-slicezone";
import { useGetStaticPaths } from "next-slicezone/hooks";
import { query } from "next-slicezone/features/query";
import Navigation from '../partials/navigation'
import resolver from "../sm-resolver.js";

const Page = (props) => {
  return(
    <>

      <Navigation dataJSON={props.dataJSON}/>
      <SliceZone {...props} resolver={resolver} />
    </>
  )
};

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   uid: ({ params }) => params.uid,
// });

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
  uid: ({ params }) => params.uid,
})

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: "page",
  fallback: process.env.NODE_ENV === "development",
  formatPath: ({ uid }) => ({ params: { uid } }),
});

export default Page;
