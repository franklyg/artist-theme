/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React, {useState, useEffect } from 'react';

import { Client } from "../../prismicKits";
import { query } from "next-slicezone/features/query";

import Navigation from '../../partials/navigation'

const MusicPage = (props) => {
  const [multiSongData, setMultiSongData] = useState([]);

  useEffect(() => {
    setMultiSongData(props.multipleSongsJSON)
  }, []);

  return(
    <section>
      <Navigation dataJSON={props.singleSongJSON}/>
      <div
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          margin: '2rem 0',
          padding: '0 2rem',
        }}
      >
      { 
        multiSongData == '' ? 
        <div className="pre-load">
          <p><b>LOADING</b></p>
        </div> 
        :
        multiSongData.map((item, i) => 
          <div key={i} sx={{
            width: '100%',
            '@media screen and (min-width: 769px)': {
              width: '33.333333%',
              padding: '0 3%',
            },
            margin: '0 0 2rem 0',
          }}>
            <img 
              src={`${item.entitiesByUniqueId[`${item.entityUniqueId}`].thumbnailUrl}`}
              sx={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                boxShadow: '0 0px 1px 0px rgba(0,0,0,.01), 0 3px 10px 3px rgba(0,0,0,.25)'
              }}
            />
            <div
              sx={{
                margin: '1rem 0 0',
                padding: '1rem 0 0',
                borderTop: '1px solid #242424',
                display: 'flex',
                flexFlow: 'row wrap'
              }}
            >
              <div
                sx={{
                  width: '50%'
                }}
              >
                <p><b>{`${item.entitiesByUniqueId[`${item.entityUniqueId}`].title}`}</b></p>
                <p><i>{`${item.entitiesByUniqueId[`${item.entityUniqueId}`].artistName}`}</i></p>
              </div>
              <div 
                sx={{
                  width: '50%',
                  textAlign: 'right'
                }}
              >
                <p>{`${item.entitiesByUniqueId[`${item.entityUniqueId}`].type}`}</p>
              </div>
            </div>
            <div
              sx={{
                margin: '1rem 0 0',
              }}
            >
              <a 
                href={item.linksByPlatform.spotify.url}
                sx={{
                  margin: '0 1rem 0 0'
                }}
                >Spotify</a>
              <a 
                href={item.linksByPlatform.appleMusic.url}
                sx={{
                  margin: '0 1rem 0'
                }}
              >Apple Music</a>
              <a 
                href={item.linksByPlatform.itunes.url}
                sx={{
                  margin: '0 1rem 0'
                }}  
              >iTunes</a>
              <a 
                href={item.linksByPlatform.tidal.url}
                sx={{
                  margin: '0 0 0 1rem'
                }}
              >Tidal</a>
            </div>
          </div>  
        )
      }
      </div>
    </section>

  )
}

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

      let multipleSongsJSON = [],
          singleSongJSON = [],
          songs = []
      
      /*
        Collects and array of songs.
      */
      let docs = doc.data.body[0].items;
      for(var i = 0; i < docs.length; i++){
        console.log(docs[i].trackType);
        songs = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${docs[i].trackType}%3A${docs[i].spotifyID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
        const musicData = await songs.json()
        multipleSongsJSON.push(musicData)
      }
      /*
        Collects a single song
      */
      const SPOTIFY_ID = '0CXrZUvQjJYUiI0oztItS5';
      const TRACK_TYPE = 'track';

      const song = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${TRACK_TYPE}%3A${SPOTIFY_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
      singleSongJSON = await song.json();

      return {
        props: {
          ...doc,
          error: null,
          slices: doc ? doc.data[body] : [],
          multipleSongsJSON,
          singleSongJSON
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
  uid: () => "music-page",
})

export default MusicPage;
