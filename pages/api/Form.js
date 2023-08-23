import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';



export default function Form() {
  const { data: session, status } = useSession()
  console.log(session)
  useEffect(() => {
    // Log the screen width to the console
    console.log("Screen Width: " + window.innerWidth + " pixels");
  }, []);
  //     var screenWidth = window.innerWidth;

  // // Log the screen width to the console
  // console.log("Screen Width: " + screenWidth + " pixels");

  return (
    <>
      <div className='screenwidth'>
        <div className='signins'>
          Sign In
        </div>
        <div className='acc'>
          Sign in to your account
        </div>
        <div className='googlesignin'>
          <form action="http://localhost:3000/api/auth/signin/google"
            method="POST">
            <input type="hidden" name="csrfToken"
              value="9af68ff21989ab399666b0fd99136022859311ceb8456dab92d3d6a5e8b49cab" />
            <input type="hidden" name="callbackUrl"
              value="http://localhost:3000/" />
            <button type="submit" className="googlebutton" >
              <img loading="lazy" height="13" width="13" id="provider-logo"
                src="https://authjs.dev/img/providers/google.svg" />
              <span className='signintext'>&nbsp;Sign in with Google</span>
            </button>
          </form>
        </div>
        <div className='applesignin'>
            <button className='applebutton'>
            {/* <FontAwesomeIcon icon={faApple} size="32px" />  */}
            <svg className='appleicon' xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
              <g clip-path="url(#clip0_0_355)">
                <path d="M6.34516 1.21952C7.27201 0.00716167 8.56055 0.00125122 8.56055 0.00125122C8.56055 0.00125122 8.75222 1.14107 7.83144 2.23908C6.84828 3.41151 5.73078 3.21966 5.73078 3.21966C5.73078 3.21966 5.52094 2.29759 6.34516 1.21952ZM5.84866 4.0181C6.32548 4.0181 7.21043 3.36763 8.36232 3.36763C10.3451 3.36763 11.1251 4.76781 11.1251 4.76781C11.1251 4.76781 9.59954 5.54189 9.59954 7.42017C9.59954 9.53904 11.5 10.2693 11.5 10.2693C11.5 10.2693 10.1715 13.9801 8.37708 13.9801C7.55292 13.9801 6.91217 13.4289 6.04378 13.4289C5.15883 13.4289 4.28065 14.0007 3.70868 14.0007C2.0701 14.0007 0 10.4806 0 7.65098C0 4.86704 1.7522 3.40664 3.39569 3.40664C4.46411 3.40664 5.29321 4.0181 5.84866 4.0181Z" fill="#999999"/>
              </g>
              <defs>
                <clipPath id="clip0_0_355">
                  <rect width="11.5" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
              <span className='applesignintext'>Sign in with Apple</span>
            </button>
            {/* <button type="submit" className="googlebutton" >
              <img loading="lazy" height="17" width="17"
                src="https://authjs.dev/img/providers/google.svg" />
              <span className='signintext'>&nbsp;Sign in with Apple</span>
            </button> */}
        </div>
        <div className='loginform'>
          <div className='cardss1'>
            <div className='cardss2'>
              <p className='Email'>Email address</p>
              <input className='text-input' style={{ borderColor: 'white' }} type='text' placeholder='   johndoe@gmail.com' />

              <p className='Password'>Password</p>
              <input className='pass-input' style={{ borderColor: 'white' }} type='password' placeholder='    ........|' />

              <p className='forgot-pass'>
                Forgot Password?
              </p>
              <a href='#'>
                <button className='signin-button'>
                  <p className='signin-text'>Sign In</p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='noacc'>
          <span style={{ color: '#858585' }}>Don't have an account?</span>
          <a href="#" style={{ color: '#346BD4' }} className="link-style">&nbsp;Register here</a>
        </div>
      </div>
    </>
  )
}
