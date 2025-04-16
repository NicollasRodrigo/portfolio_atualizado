import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import '../../index.css'
const Footer = () => {
    return (
        <div className='text-green-50 w-1/3 flex justify-around'>
            <p className='list-item' >
                <a target='_blank' href='https://github.com/NicollasRodrigo'>
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
            </p>

        </div>
    )
}

export default Footer
