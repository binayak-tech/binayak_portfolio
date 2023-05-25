import React from 'react'
import { BsTwitter,BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';



const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/Binayak_Bk" target="_blank" rel="noreferrer"><BsTwitter /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/binayak_purohit" target="_blank" rel="noreferrer"><BsInstagram /></a>
        </div>
        <div>
            <a href="https://github.com/binayak-tech" target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/binayak-purohit" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
        
    </div>
  )
}

export default SocialMedia