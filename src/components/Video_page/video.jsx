// import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import useWindowDimensions from './WindowDimensions';

export default function VideoPlayer()
{   
    const { height, width } = useWindowDimensions();
    const queryParams = new URLSearchParams(window.location.search);
    const movie = queryParams.get('movie');
        return(
            <div>
                <ReactPlayer 
                    url={process.env.REACT_APP_VIDEO_URL + movie + ".m3u8"}
                    playing={false}
                    controls={true}
                    width={width}
                    height={height}
                    onReady={() => this.playing = true}
                    onEnded={() => this.pause()}
                />
            </div>
        )
    }
// }
