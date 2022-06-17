import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/vipulchaudhary16" target="_blank">
            <AiFillLinkedin/>
        </a>
        
        <a href="https://github.com/vipulchaudhary16" target="_blank">
            <AiFillGithub/>
        </a>

        <a href="https://www.youtube.com/channel/UCrtusDHivn7SXllCUnOsvJA" target="_blank">
            <AiFillYoutube/>
        </a>
    </div>
  )
}

export default HeaderSocials