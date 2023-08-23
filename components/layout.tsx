import Header from "./header"
import Login from '../pages/api/Login'
import Main from '../pages/api/Main'

import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <Main />
    </>
  )
}
