/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React, {useState, useEffect } from 'react';
import Music from '../../components/MusicItem';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MusicPage = ({ slice }) => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      var dataJSON = [],
          api = []
      for(var i = 0; i < slice.items.length; i++){
        const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${slice.items[i].trackType}%3A${slice.items[i].spotifyID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
        dataJSON = await res.json()
        api.push(dataJSON)
      }
      setData(api)
    }
    fetchData()
  }, []);


  return(
    <section>
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
        console.log(data),
        data == '' ? 
        <div className  ="pre-load">
          <p><b>LOADING</b></p>
        </div> 
        :
        data.map((item, i) => 
          <div key={i} sx={{
            width: '100%',
            '@media screen and (min-width: 769px)': {
              width: '33.333333%',
              padding: '0 3%',
            },
            margin: '0 0 3% 0',
          }}>
            {console.log(item)}
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

export default MusicPage;
