import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <AiOutlineMail/>
        </div>
    </div>
  )
}

export default SocialMedia