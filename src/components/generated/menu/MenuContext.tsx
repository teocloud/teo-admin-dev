// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { ExtendedRefs, FloatingContext, FloatingTreeType, ReferenceType } from "@floating-ui/react"
import { createContext, CSSProperties, Dispatch, HTMLProps, MutableRefObject } from "react"

export interface MenuContextProps {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    getReferenceProps: (userProps?: HTMLProps<Element>) => Record<string, unknown>
    getFloatingProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
    getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
    refs: ExtendedRefs<ReferenceType>
    floatingStyles: CSSProperties
    listItemsRef: MutableRefObject<(HTMLButtonElement | null)[]>
    labelsRef: MutableRefObject<(string | null)[]>
    activeIndex: number | null
    setActiveIndex: Dispatch<React.SetStateAction<number | null>>
    tree: FloatingTreeType<ReferenceType> | null
    nodeId: string
    parentId: string | null
    isNested: boolean
    hasFocusInside: boolean
    setHasFocusInside: Dispatch<React.SetStateAction<boolean>>
    floatingContext: FloatingContext
}

const MenuContext = createContext<MenuContextProps>({} as any)

export default MenuContext