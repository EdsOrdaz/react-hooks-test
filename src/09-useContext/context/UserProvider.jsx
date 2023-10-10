import { useState } from "react"
import { userContext } from "./userContext"


export const UserProvider = ( { children } ) => {
    
  const [user, setUser] = useState();
  

  return (
    <userContext.Provider value={{ hola: 'mundo', user: user, setUser }}>
        { children }
    </userContext.Provider>
  )
}
