/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import React, {useState, useEffect} from 'react';


function Navigation (){

  const [toggleNav, setToggleNav] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {

    const fetchData = async () => {
        var dataJSON = [];

        const SPOTIFY_ID = '0CXrZUvQjJYUiI0oztItS5';
        const TRACK_TYPE = 'track';
      
        const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${TRACK_TYPE}%3A${SPOTIFY_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
        dataJSON = await res.json();
        return setData(dataJSON)
    }
    fetchData()
  }, []);

  function toggleNavAction() {
    setToggleNav(!toggleNav)
  }

  return(
    <nav>
        <div 
            className="nav-parent"
            sx={{
                background: '#ededde'
            }}
        >
            <div
                className="button-holder"
                sx={{
                    display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '3vw 0',
                    cursor: 'pointer',
                    borderBottom: '2px solid black'
                }}
                onClick={ toggleNavAction }
            >
            <button 
                className={`menu-button  ${toggleNav ? 'animation-button' : 'animation-button-null'}`}
                type="button"
                sx={{
                    width: '4.5vw',
                    height: '3.75vw',
                    '@media screen and (min-width: 769px)': {
                        width: '2.5vw',
                        height: '1.75vw',
                    },
                    display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none'
                }}
            >
                <span className="bar"
                    sx={{
                        display: 'block',
                        width: '100%',
                        height: '2px',
                        background: 'black'
                    }}
                ></span>
                <span className="bar"
                    sx={{
                        display: 'block',
                        width: '100%',
                        height: '2px',
                        background: 'black'
                    }}
                ></span>
                <span className="bar"
                    sx={{
                        display: 'block',
                        width: '100%',
                        height: '2px',
                        background: 'black',
                    }}
                ></span>
            </button>
            </div>
            <div 
                className="logo-holder"
                sx={{
                    display: 'flex',
                    flexFlow: 'column wrap',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <a 
                    className="logo-link"
                    href="/"
                    sx={{
                        textAlign: 'center',
                        width: '13.8vh',
                        height: '1vw',
                        transformOrigin: 'center',
                        transition: 'all 1s'
                    }}
                >
                    <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2757 428.62" fill="black"><switch><g><path d="M297.21 57.3c5.86 0 8.79 2.81 8.79 8.4V102c0 5.6-2.93 8.4-8.79 8.4h-165.8c-9.93 0-18.15.83-24.64 2.48-6.49 1.66-11.65 4.46-15.47 8.4-3.82 3.95-6.56 9.3-8.21 16.04-1.66 6.75-2.48 15.09-2.48 25.02v7.64H295.3c5.6 0 8.4 2.81 8.4 8.4v30.18c0 5.6-2.81 8.4-8.4 8.4H80.61v99.32c0 5.6-2.81 8.4-8.4 8.4H30.94c-5.86 0-8.79-2.8-8.79-8.4V158.15c0-18.34 1.97-33.87 5.92-46.61 3.95-12.73 10.18-23.11 18.72-31.13 8.53-8.02 19.54-13.88 33.04-17.57 13.5-3.69 29.92-5.54 49.28-5.54h168.1zM560.42 57.3c29.28 0 50.29 6.63 63.03 19.86 12.73 13.25 19.1 32.85 19.1 58.83v21.78c0 21.91-4.46 39.22-13.37 51.95-8.92 12.74-23.43 20.89-43.55 24.45l65.32 80.99c1.27 1.28 1.65 3.19 1.15 5.73-.51 2.55-2.55 3.82-6.11 3.82h-49.28c-3.31 0-5.6-.38-6.88-1.15-1.28-.76-2.55-2.04-3.82-3.82l-60.36-79.46H402.26v76.02c0 5.6-2.81 8.4-8.4 8.4H352.6c-5.86 0-8.79-2.8-8.79-8.4V68.76c0-7.64 3.82-11.46 11.46-11.46h205.15zM402.26 193.68h146.31c12.99 0 22.16-2.8 27.5-8.4 5.35-5.6 8.02-14.13 8.02-25.6v-16.04c0-11.46-2.67-19.99-8.02-25.6-5.35-5.6-14.52-8.4-27.5-8.4H407.23c-3.31 0-4.97 1.53-4.97 4.58v79.46zM859.16 57.3c9.68 0 17.82 1.98 24.45 5.92 6.62 3.95 13.11 11.65 19.48 23.11l126.45 229.59c1.27 2.55 1.59 4.65.96 6.3-.64 1.66-2.48 2.48-5.54 2.48h-48.52c-4.33 0-7.26-1.65-8.79-4.97l-27.12-49.28H760.98l-26.36 49.28c-1.78 3.31-4.72 4.97-8.79 4.97h-49.66c-3.31 0-5.29-.82-5.92-2.48-.64-1.65-.32-3.75.96-6.3l125.3-229.59c6.36-11.46 12.61-19.16 18.72-23.11 6.11-3.95 13.24-5.92 21.39-5.92h22.54zm-74.12 168.85h131.41l-60.74-111.93c-1.02-1.78-2.42-2.67-4.2-2.67h-2.29c-1.78 0-3.19.9-4.2 2.67l-59.98 111.93zM1344.32 57.3c5.6 0 8.4 2.81 8.4 8.4v37.44c0 5.86-2.81 8.79-8.4 8.79h-191.39c-9.93 0-18.15.83-24.64 2.48-6.49 1.66-11.65 4.46-15.47 8.4-3.82 3.95-6.56 9.23-8.21 15.85-1.66 6.63-2.48 15.03-2.48 25.21v55.01c0 10.19.82 18.66 2.48 25.4 1.65 6.75 4.39 12.1 8.21 16.04 3.82 3.95 8.98 6.75 15.47 8.4 6.49 1.66 14.71 2.48 24.64 2.48h126.06c6.62 0 11.46-1.72 14.52-5.16s4.58-9.48 4.58-18.15v-30.94c0-3.31-1.53-4.97-4.58-4.97h-111.93c-5.6 0-8.4-2.92-8.4-8.79v-28.65c0-5.86 2.8-8.79 8.4-8.79h159.3c7.64 0 11.46 3.82 11.46 11.46v89.01c0 21.39-4.08 36.48-12.22 45.27-8.15 8.79-19.87 13.18-35.14 13.18h-154.34c-19.36 0-35.78-1.78-49.28-5.35-13.5-3.56-24.52-9.36-33.04-17.38-8.54-8.02-14.77-18.46-18.72-31.33-3.95-12.86-5.92-28.46-5.92-46.8V158.1c0-18.34 1.97-33.87 5.92-46.61 3.95-12.73 10.18-23.11 18.72-31.13 8.53-8.02 19.54-13.88 33.04-17.57 13.5-3.69 29.92-5.54 49.28-5.54h193.68zM1476.11 57.3c5.6 0 10.44.38 14.52 1.15 4.07.76 7.64 2.23 10.7 4.39 3.06 2.17 5.79 5.1 8.21 8.79 2.42 3.69 4.9 8.6 7.45 14.71l79.46 183.37c1.01 2.29 2.8 3.44 5.35 3.44h4.58c2.54 0 4.33-1.15 5.35-3.44l79.46-183.37c2.54-6.11 5.03-11.01 7.45-14.71 2.42-3.69 5.16-6.62 8.21-8.79 3.06-2.16 6.55-3.63 10.51-4.39 3.95-.76 8.72-1.15 14.33-1.15h40.88c13.24 0 22.16 3 26.74 8.98 4.58 5.99 6.88 16.24 6.88 30.75v219.28c0 5.6-2.93 8.4-8.79 8.4h-38.97c-5.6 0-8.4-2.8-8.4-8.4V116.89c0-2.54-1.02-3.82-3.06-3.82h-3.44c-2.55 0-4.2 1.02-4.97 3.06l-77.17 171.14c-3.06 6.88-6.18 12.67-9.36 17.38-3.19 4.72-6.62 8.6-10.31 11.65-3.69 3.06-7.9 5.22-12.61 6.49-4.72 1.28-10.25 1.91-16.62 1.91h-18.34c-6.37 0-11.91-.63-16.62-1.91-4.72-1.27-8.92-3.44-12.61-6.49-3.7-3.06-7.13-6.94-10.31-11.65-3.19-4.71-6.3-10.51-9.36-17.38l-77.17-171.14c-.76-2.04-2.42-3.06-4.97-3.06h-3.44c-2.04 0-3.06 1.28-3.06 3.82V316.3c0 5.6-2.81 8.4-8.41 8.4h-38.96c-5.86 0-8.79-2.8-8.79-8.4V97.03c0-14.52 2.29-24.77 6.88-30.75 4.58-5.98 13.62-8.98 27.12-8.98h41.66zM1906.64 57.3c5.6 0 8.4 2.81 8.4 8.4v250.6c0 5.6-2.81 8.4-8.4 8.4h-41.26c-5.86 0-8.79-2.8-8.79-8.4V65.7c0-5.6 2.92-8.4 8.79-8.4h41.26zM2015.9 57.3c5.6 0 8.4 2.81 8.4 8.4v250.6c0 5.6-2.81 8.4-8.4 8.4h-41.26c-5.86 0-8.79-2.8-8.79-8.4V65.7c0-5.6 2.92-8.4 8.79-8.4h41.26zM2143.1 57.3c6.11 0 11.2.26 15.28.76 4.07.51 7.64 1.59 10.7 3.25 3.06 1.66 5.98 3.95 8.79 6.88 2.8 2.93 5.98 6.82 9.55 11.65l142.11 186.42c1.01 1.78 2.67 2.67 4.97 2.67h3.44c2.04 0 3.06-1.27 3.06-3.82V65.7c0-5.6 2.8-8.4 8.4-8.4h40.11c5.6 0 8.4 2.81 8.4 8.4v219.28c0 15.54-2.8 26.04-8.4 31.52-5.6 5.48-14.27 8.21-25.98 8.21h-32.85c-5.86 0-10.76-.25-14.71-.76-3.95-.51-7.45-1.53-10.51-3.06-3.06-1.53-6.05-3.75-8.98-6.69-2.93-2.92-6.3-6.94-10.12-12.03l-142.49-186.42c-1.53-1.78-3.19-2.67-4.97-2.67h-3.44c-2.04 0-3.06 1.28-3.06 3.82v199.41c0 5.6-2.81 8.4-8.4 8.4h-40.11c-5.86 0-8.79-2.8-8.79-8.4V97.03c0-15.53 2.8-26.04 8.4-31.52 5.6-5.47 14.26-8.21 25.98-8.21h33.62zM2739.43 57.3c5.86 0 8.79 2.81 8.79 8.4v37.44c0 5.86-2.93 8.79-8.79 8.79h-119.95v204.38c0 5.6-2.8 8.4-8.4 8.4h-41.64c-5.6 0-8.4-2.8-8.4-8.4V111.93h-119.95c-5.86 0-8.79-2.92-8.79-8.79V65.7c0-5.6 2.92-8.4 8.79-8.4h298.34z"/></g></switch></svg>
                </a>
            </div>
        </div>
        <div 
            className={`${ toggleNav ? 'active' : 'not-active' }`}
            sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                position: 'fixed',
                top: `${ toggleNav ? '0' : '-100vh'  }`,
                width: '100%',
                transition: '.5s all ease',
                zIndex: '1',
                height: '100vh',
                '@media screen and (min-width: 769px)': {
                    left: '6vw',
                }
            }}
        >
            <div className="main-links"
                sx={{
                    width: '100vw',
                    '@media screen and (min-width: 769px)': {
                        width: '47vw',
                        height: '100vh',
                    },
                    background: '#242424',
                    padding: '2rem',
                }}
            >
                <div
                  sx={{
                    borderTop: '5px solid #ededde',
                    paddingTop: '2rem',
                    position: 'relative',
                    top: `${ toggleNav ? '0' : '2rem' }`,
                    opacity: `${ toggleNav ? 1 : 0 }`,
                    transition: `${ toggleNav ? 'all .5s ease-out' : 'none' }`,
                    transitionDelay: '.5s'
                  }}
                >   
                    <a href="/about" 
                    sx={{
                        fontSize: 6,
                        '@media screen and (min-width: 769px)': {
                            fontSize: 7,
                        },
                        display: 'block',
                        color: '#ededde',
                        lineHeight:'1.09',
                    }}
                    >About</a>
                    <a href="/music"
                    sx={{
                        fontSize: 6,
                        '@media screen and (min-width: 769px)': {
                            fontSize: 7,
                        },
                        display: 'block',
                        color: '#ededde',
                        lineHeight:'1.09'
                    }}
                    >Music</a>
                    <a href="/blog"
                    sx={{
                        fontSize: 6,
                        '@media screen and (min-width: 769px)': {
                            fontSize: 7,
                        },
                        display: 'block',
                        color: '#ededde',
                        lineHeight:'1.09'
                    }}
                    >Journal</a>
                </div>
            </div>
            <div 
                className="latest-song"
                sx={{
                    width: '100vw',
                    '@media screen and (min-width: 769px)': {
                        width: '47vw',
                        height: '100vh',
                    },
                    background: '#242424',
                    padding: '2rem'
                }}
            >    
                <div
                    sx={{
                        borderTop: '5px solid #ededde',
                        paddingTop: '2rem',
                        position: 'relative',
                        top: `${ toggleNav ? '0' : '2rem' }`,
                        opacity: `${ toggleNav ? 1 : 0 }`,
                        transition: `${ toggleNav ? 'all .5s ease-out' : 'none' }`,
                        transitionDelay: '.8s'
                    }}
                >
                    {
                        data ? 
                        <>
                            <img 
                            src={`${data.entitiesByUniqueId[`${data.entityUniqueId}`].thumbnailUrl}`}
                            sx={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '50%',
                                boxShadow: '0 0px 1px 0px rgba(0,0,0,.01), 0 3px 10px 3px rgba(0,0,0,.25)'
                            }}
                            />
                            <p
                                sx={{
                                    color: '#ededde',
                                    margin: '1rem 0 0'   
                                }}
                            >Latest song <b>{`${data.entitiesByUniqueId[`${data.entityUniqueId}`].title}`}</b> out now.</p>
                            <div
                            sx={{
                                margin: '1rem 0 0',
                            }}
                            >
                                <a 
                                    href={data.linksByPlatform.spotify.url}
                                    sx={{
                                    margin: '0 1rem 0 0',
                                    color: '#ededde'
                                    }}
                                    >Spotify</a>
                                <a 
                                    href={data.linksByPlatform.appleMusic.url}
                                    sx={{
                                    margin: '0 1rem 0',
                                    color: '#ededde'
                                    }}
                                >Apple Music</a>
                                <a 
                                    href={data.linksByPlatform.itunes.url}
                                    sx={{
                                    margin: '0 1rem 0',
                                    color: '#ededde'
                                    }}  
                                >iTunes</a>
                                <a 
                                    href={data.linksByPlatform.tidal.url}
                                    sx={{
                                    margin: '0 0 0 1rem',
                                    color: '#ededde'
                                    }}
                                >Tidal</a>
                            </div> 
                        </>
                        : <p>Loading</p>
                    }
                </div>
            </div>
        </div>
    </nav>
  )
}
export default Navigation;