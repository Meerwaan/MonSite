import React from 'react';
import linke from '../image/linkedin.png'
import git from '../image/github.png'
import lab from '../image/gitlab-tile.svg'

function Footer() {
    return (
        <div className='foot'>
            <div className='contact'>



                <a href='https://github.com/Meerwaan'><img src={git} alt='iconeLinke' className='icon'></img></a>
                <a href='https://www.linkedin.com/in/merwan-laouini-4b5688204/'><img src={linke} alt='iconeLinke' className='icon'></img></a>
                <a href='https://gitlab.com/Meerwaan'><img src={lab} alt='iconeLinke' className='icon'></img></a>




            </div>

        </div>
    );
}

export default Footer;