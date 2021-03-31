/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui';
import React from "react";
import { default as NextLink } from 'next/link'
import Head from "next/head";

import Prismic from '@prismicio/client';
import { query } from "next-slicezone/features/query";

import { Client } from "../../prismicKits";
import { hrefResolver, linkResolver } from '../../prismicKits'

import Navigation from '../../partials/navigation'

/**
 * Homepage component
 */
const Home = ({ posts, singleSongJSON }) => {
  return(
    <div>
      <Head>
        <title>Fragmiint</title>
      </Head>
      <Navigation dataJSON={singleSongJSON}/>
      <div
        sx={{
          maxWidth: '750px',
          padding: '2em 2rem'
        }}
      > 
        {
          posts.length <= 0 ? <p><b>Coming Soon</b></p> 
          :
          posts.map(post => 
            <div key={post.id}>
              <NextLink
                as={linkResolver(post)}
                href={hrefResolver(post)}
              >
                <a
                  sx={{
                    borderTop: '6px solid #4f4f4f',
                    width: '100%',
                    display: 'block',
                    fontSize: 5,
                    fontWeight: 'bold',
                    padding: '1.5rem 0',
                    color: '#4f4f4f',
                    lineHeight: 1,
                    cursor: 'pointer'
                  }}
                >
                  { post.data.post_title[0].text.toUpperCase() }
                </a>
              </NextLink>
            </div>
          )
        }
      </div>
    </div>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[my.post.date desc]",
      ...(ref ? { ref } : null)
    },
  )

  /*
    Collects a single song
  */
  let singleSongJSON = [];
  const SPOTIFY_ID = '0CXrZUvQjJYUiI0oztItS5';
  const TRACK_TYPE = 'track';

  const song = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${TRACK_TYPE}%3A${SPOTIFY_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
  singleSongJSON = await song.json();

  return {
    props: {
      posts: posts ? posts.results : [],
      preview,
      singleSongJSON
    }
  }
}

export default Home;