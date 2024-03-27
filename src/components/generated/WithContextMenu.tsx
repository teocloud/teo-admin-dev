// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement, useState, cloneElement, useEffect } from 'react'
import { offset, shift, useDismiss, useFloating, useInteractions, FloatingPortal, useRole, flip, autoUpdate } from '@floating-ui/react'
import ContextMenu from '../extended/ContextMenu'

type WithContextMenuProps = {
    children: ReactElement,
    contextMenu: typeof ContextMenu,
}

/// Component passed into <WithContextMenu> must accept ref.
const WithContextMenu = (props: WithContextMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { refs, floatingStyles, context } = useFloating({ 
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            offset({ mainAxis: 0, alignmentAxis: -8 }),
            flip({
              fallbackPlacements: ["left-start"]
            }),
            shift({ padding: 10 })
        ],
        placement: "right-start",
        strategy: "fixed",
        whileElementsMounted: autoUpdate
    })
    
    const dismiss = useDismiss(context, { referencePress: true })
    const role = useRole(context, { role: "menu" })
    const { getReferenceProps, getFloatingProps } = useInteractions([
        dismiss,
        role
    ])
    const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault()
        refs.setPositionReference({
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                x: e.clientX,
                y: e.clientY,
                top: e.clientY,
                right: e.clientX,
                bottom: e.clientY,
                left: e.clientX
              };
            }
          });
        setIsOpen(true)
    }
    useEffect(() => {
        const dismissMenu = () => setIsOpen(false)
        document.addEventListener("click", dismissMenu)
        return () => {
            document.removeEventListener("click", dismissMenu)
        }
    }, [])
    return <>
        {cloneElement(props.children, { ref: refs.setReference, ...getReferenceProps(), onContextMenu: handleContextMenu })}
        <FloatingPortal>
            {isOpen ? cloneElement(props.contextMenu as any, { ref: refs.setFloating, style: floatingStyles, ...getFloatingProps(), context }) : null}
        </FloatingPortal>
    </>
}

export default WithContextMenu