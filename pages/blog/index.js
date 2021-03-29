/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";
import { default as NextLink } from 'next/link'
import Navigation from '../../partials/navigation'

// Project components & functions
import { Client } from "../../prismicKits";
import { hrefResolver, linkResolver } from '../../prismicKits'

/**
 * Homepage component
 */
const Home = ({ posts }) => {
  return(
    <div>
      <Navigation />
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

  return {
    props: {
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Home;