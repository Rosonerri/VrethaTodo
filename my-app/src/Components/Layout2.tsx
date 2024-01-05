import React from 'react'
import Header from "./Header"
import {Outlet} from "react-router-dom"
import Sider from './Sider'
const Layout2 = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}

export default Layout2
