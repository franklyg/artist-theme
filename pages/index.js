import Head from 'next/head'
import { Client } from "../prismicKits";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Navigation from '../partials/navigation'
import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <>
      <Head></Head>
      <Navigation />
      <SliceZone {...props} resolver={resolver} />
    </>
  )
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: () => "home",
});

export default Page;
