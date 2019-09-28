import { createContext, h } from 'preact'

type PreactComponent<T> = (props: T) => h.JSX.Element


export const DC = createContext<any>({})

interface DCPProps {
  children?: any
  value: Record<string, any>
}
export const DCP: PreactComponent<DCPProps> = DC.Provider as any

interface DCCProps {
  children?: (context: any) => void
}
export const DCC: PreactComponent<DCCProps> = DC.Consumer as any
