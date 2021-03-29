/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import Link from 'next/link'

import GridItem from '../../components/GridItem'

const TourDates = ({slice}) => {
  function theDate (str){
    const year = str.replace(/-/g, ' ').substr(0, 4);
    const month = str.replace(/-/g, ' ').substr(5,2)
    const date = str.replace(/-/g, ' ').substr(7,4)
    const fullDate = `${ month }${ date } ${ year }`
    return fullDate;
  } 
  return(
    <section>  
      <div>
        { slice?.items?.map((item, i) => (
          <>
            <div
              sx={{
                border: '1px solid black',
                marginBottom: 3
              }}
            >
              <GridItem
                key={i} 
                columnsAmount={'1fr 1fr 1fr 1fr'}
              >
                <p
                  sx={{
                    p: 3
                  }}
                >{ item.tourDatesVenue }</p>
                <p
                  sx={{
                    p: 3
                  }}
                >{ item.tourDatesCity }</p>
                <p 
                  sx={{
                    p: 3
                  }}
                >
                { 
                  theDate(item.tourDatesDay.replace(/-/g, ' '))
                }
                </p>
                <Link href={ item.tourDatesLink.url }>
                  <a
                    sx={{
                      alignSelf: 'stretch',
                    }}
                  >
                    <span 
                      sx={{
                        p: 3,
                        background: 'black',
                        color: 'white',
                        display: 'block',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <b>{item.tourDatesLinkCopy }</b>
                    </span>
                  </a>
                </Link>
              </GridItem>
            </div>
          </>
          )
        )}
      </div>  
    </section>

  )
}

export default TourDates;