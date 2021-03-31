import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Navigation from '../partials/navigation'
import resolver from "../sm-resolver.js";

const Page = (props) => {

  const [data, setData] = useState();

  useEffect(() => {

    const fetchData = async () => {
        var dataJSON = [];

        const SPOTIFY_ID = '0CXrZUvQjJYUiI0oztItS5';
        const TRACK_TYPE = 'track';
      
        const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${TRACK_TYPE}%3A${SPOTIFY_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
        dataJSON = await res.json();
        console.log(dataJSON)
        return setData(dataJSON)
    }
    fetchData()
  }, []);

  return (
    <>
      <Head>
        <title>Fragmiint</title>
      </Head>
      <Navigation />
      <SliceZone {...props} resolver={resolver} />
    </>
  )
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps(
  {
    client: Client(),
    uid: () => "home"
  }
);

export default Page;
