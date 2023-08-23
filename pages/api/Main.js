import Dashboardss from './Dashboardss';
import Signin from './Signin';
import { signIn, signOut, useSession } from "next-auth/react"

function Main() {
  const { data: session, status } = useSession()
  console.log(session)
  if (!session){
    return (
      <div className="App">
        <Signin />
      </div>
    );
  }
  else{
    return <Dashboardss />
  }
}

export default Main;
