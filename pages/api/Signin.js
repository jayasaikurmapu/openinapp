import React, {useEffect} from 'react'
import Form from './Form'
import { signIn, signOut, useSession } from "next-auth/react"
export default function Signin() {
    const { data: session, status } = useSession()
    useEffect(() => {
        // Log the screen width to the console
        console.log("Screen Width: " + window.innerWidth + " pixels");
      }, []);
    console.log(session)
        return (
            <div className='sign'>
                <div className='leftside'>
                    <div className='board'>
                        Board.
                    </div>
                </div>
                <div className='rightside'>
                    <Form />
                </div>
            </div>
          )
}
