import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Maincontext from './maincontext/Maincontext'
import Menu from './Pages/Menu'
import Service from './Pages/Service'


export default function App() {

  const routes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/service',
            element: <Service />
          },
          {
            path: '/contact',
            element: <Contact />
          },
          {
            path: '/menu',
            element: <Menu />
          }
        ]
      }
    ]
  )

  return (
    <>
      <Maincontext>
        <RouterProvider router={routes} />
      </Maincontext>
    </>

  )
}
