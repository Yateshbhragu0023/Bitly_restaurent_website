import React, { createContext } from 'react'

const Context = createContext()

export default function Maincontext({children}) {

  return (
    <Context.Provider>
     {children}
    </Context.Provider>
  )
}
