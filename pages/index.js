import Head from 'next/head'
import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import Prismic from '@prismicio/client'
import { query } from "next-slicezone/features/query";
import Navigation from '../partials/navigation'
import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <>
      <Head>
        <title>Fragmiint</title>
      </Head>
      <Navigation dataJSON={props.dataJSON} />
      <SliceZone {...props}  resolver={resolver} />
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

    var dataJSON = [];

    const SPOTIFY_ID = '0CXrZUvQjJYUiI0oztItS5';
    const TRACK_TYPE = 'track';

    const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${TRACK_TYPE}%3A${SPOTIFY_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
    dataJSON = await res.json();

    try {
      const doc = await query({
        queryType,
        apiParams: Object.assign({ ref }, apiParams),
        type,
        uid: resolvedUid,
        client,
      })
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
        }
      }
    }
  }
}

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "home",
})


export default Page;
