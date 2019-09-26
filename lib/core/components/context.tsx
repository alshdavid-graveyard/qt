import { createContext } from 'preact'

export const DC = createContext<any>({})
export const DCP = DC.Provider
export const DCC = DC.Consumer
