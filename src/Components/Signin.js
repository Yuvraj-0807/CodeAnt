import React from 'react'
import photo1 from '../Assests/photo1.png'
import photo2 from '../Assests/photo2.png'
import logo from '../Assests/logo.png'
import github from '../Assests/github.png'
import gitlab from '../Assests/gitlab.png'
import azure from '../Assests/azure.png'
import bitbucket from '../Assests/bitbucket.png'
import './signin.css'

const Signin = () => {
    

    return (
        <div className='container'>
            <div className='small-container'>
                <div className='left'>
                    <img src={photo1} className='photo1' alt='' />
                    <img src={photo2} className='photo2' alt='' />
                </div>
                <div className='right'>
                    <div className='frame989'>
                        <div className='calender'>
                            <div className='content'>
                                <div className='logotext'>
                                    <img className='logo' src={logo} />
                                    <p>CodeAnt AI</p>
                                </div>
                                <div className='heading'>
                                    <p>Welcome to CodeAnt AI</p>
                                </div>
                                <div className='tabs'>
                                    <button className='saas'>SAAS</button>
                                    <button className='selfhosted'>Self Hosted</button>
                                </div>
                                <div className='main'>
                                    <div className='button github'>
                                        <img src={github} />
                                        <p>Sign In With GitHub</p>
                                    </div>
                                    <br/>
                                    <div className='button github'>
                                        <img src={bitbucket} />
                                        <p>Sign In With Bitbucket</p>
                                    </div>
                                    <br/>
                                    <div className='button github'>
                                        <img src={azure} />
                                        <p>Sign In With Azure Devops</p>
                                    </div>
                                    <br/>
                                    <div className='button github'>
                                        <img src={gitlab} />
                                        <p>Sign In With GitLab</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='footer-text'>
                            <p>By signing up you agree to the <span>Privacy Policy.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin