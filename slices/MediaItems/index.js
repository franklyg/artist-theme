/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import Link from 'next/link'
import GridItem from '../../components/GridItem'

const MediaItems = ({ slice }) => {

  const [showMedia, showMediaState] = useState({})
  let mediaLength = slice.primary.numOfColumns;
  console.log(mediaLength)

  const toggleState = id => {
    showMediaState(show => ({
      ...show,
      [id]: !show[id]
    }));
  };

  const setColumnAmount = id => {
    let num = '';
    for(var i = 0; i < mediaLength; i++) {
      num += `1fr `
    }
    return num;
  }
  
  setColumnAmount()
  return (
    <GridItem
      columnsAmount={ setColumnAmount() }
    >
        { 
          slice?.items?.map((item, i) => 
            <Link href="/">
              <a 
                onMouseEnter={() => toggleState(i)} 
                onMouseLeave={() => toggleState(i)} 
                key={i}
              >
                <span
                  sx={{
                    m: 3, 
                    position: 'relative',
                    paddingBottom: '56.25%',
                    overflow: 'hidden',
                    display: 'block'
                  }}
                >
                  {showMedia[i] ? 
                    <video 
                      autoPlay
                      muted 
                      loop
                      sx={{
                        width: '100%',
                        height: '100%',
                        p: 0,
                        m: 0,
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        bottom: '0',
                        left: '0',
                        margin: 'auto',
                        display: 'block',
                        transitionDelay: '1s',
                        transition: 'all .5s ease',
                        opacity: `${showMedia[i] ? '1' : '0'}`,
                        objectFit: 'cover'
                      }}
                    >
                      <source src={item.mediaItemsVideo.url} type="video/mp4" />
                    </video> : null
                  }
                  <img 
                  sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    opacity: `${showMedia[i] ? '0' : '1'}`,
                    transition: 'all .25s ease',
                    margin: 'auto',
                    display: 'block',
                    objectFit: 'cover'

                  }}
                  src={item.mediaItemsVideoThumbnail.url} alt={item.mediaItemsVideoThumbnail.alt} key={`img-${i}`}/>
                </span>
              </a>
            </Link>
          ) 
        }
    </GridItem>
  );
}

export default MediaItems;
