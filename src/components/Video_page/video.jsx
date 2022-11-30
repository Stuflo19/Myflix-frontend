import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import useWindowDimensions from './WindowDimensions';

export default function VideoPlayer()
{   
    const { height, width } = useWindowDimensions();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    fetch('/stream', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({filename: "Danger_River"})
    })
    .then((response) => {
        setIsLoaded(true);
    })
    }, [])

    if(!isLoaded){
        return (
            <div>Loading...</div>
        );
    }
    else{
        return(
            <div>
                <ReactPlayer 
                    url={"/rtmp-server/live/Danger_River.m3u8"}
                    playing={false}
                    light={true}
                    controls={true}
                    width={width}
                    height={height}
                    onReady={() => this.playing = true}
                    onEnded={() => this.pause()}
                />
            </div>
        )
    }
}