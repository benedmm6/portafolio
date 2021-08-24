import React from 'react'

import SocialItem from './SocialItem';

import {social} from '../config/Social';

const SocialList = () => {
    return(
        <>
            <div className="home__social">

                {
                    social.map( (item, index) => 
                    
                    <SocialItem 
                        key={index}
                        url={item.url}
                        icon={item.icon}
                    /> 
                    
                    )
                }

                
                            
            </div>          
        </>
    )
}

export default SocialList;