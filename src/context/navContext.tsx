import { createContext, useContext, useState } from "react";

interface NavContextType {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void
}

const NavContext = createContext<NavContextType | null>(null)


export const NavProvider = ({children}: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false)

 return (
    <NavContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </NavContext.Provider>
 )
}

export const useNav = ()=>{
    const context =  useContext(NavContext)
    if(!context) throw new Error('useNav must be used within a NavProvider');

    return context
}