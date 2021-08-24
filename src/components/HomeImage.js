import React from 'react';

import img from '../assets/img/developer.png';

const HomeImage = () => {
    return (
        <>
            <div className="home__img">

                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  className="home__blob">
                    
                    <mask id="mask0" mask-type="alpha">
                        <path d="M48.6,-50.4C63.6,-45.4,76.7,-30.6,74,-17.3C71.3,-4,52.7,7.9,41.8,21.7C30.9,35.6,27.7,51.5,17.5,60.6C7.4,69.6,-9.8,71.9,-27.7,68.6C-45.6,65.4,-64.2,56.6,-74,41.7C-83.8,26.8,-84.8,5.9,-74.8,-6.7C-64.8,-19.2,-43.8,-23.2,-29.5,-28.4C-15.3,-33.5,-7.6,-39.8,4.6,-45.3C16.8,-50.7,33.7,-55.4,48.6,-50.4Z" transform="translate(100 100)" />
                    </mask>
                    
                    <g mask="url(#mask0)">
                        <path d="M48.6,-50.4C63.6,-45.4,76.7,-30.6,74,-17.3C71.3,-4,52.7,7.9,41.8,21.7C30.9,35.6,27.7,51.5,17.5,60.6C7.4,69.6,-9.8,71.9,-27.7,68.6C-45.6,65.4,-64.2,56.6,-74,41.7C-83.8,26.8,-84.8,5.9,-74.8,-6.7C-64.8,-19.2,-43.8,-23.2,-29.5,-28.4C-15.3,-33.5,-7.6,-39.8,4.6,-45.3C16.8,-50.7,33.7,-55.4,48.6,-50.4Z" transform="translate(100 100)" />
                        <image
                            className="home__blob-img"
                            x="-10"
                            y="50"
                            xlinkHref={img}
                        />
                    </g>
                </svg>

            </div>
        </>
    )
}

export default HomeImage;