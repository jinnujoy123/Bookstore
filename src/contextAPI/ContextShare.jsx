import { createContext, useState } from "react"

export const searchBookContext=createContext("")

function ContextShare({children}) {
    const [searchKey,setSearchKey]=useState("")
  return (

  <searchBookContext.Provider value={{ searchKey, setSearchKey }}>
      {children}
    </searchBookContext.Provider>
  )
}
export default ContextShare