// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React, { ReactElement, cloneElement, useEffect } from 'react'
import { FloatingOverlay, FloatingPortal, FloatingTree } from '@floating-ui/react'
import ContextMenuContext from './MenuContext'
import useMenuOwner from './useMenuOwner'
import { setShouldDisplay, shouldDisplay } from './shouldDisplayContextMenu'

type WithContextMenuProps = {
    children: ReactElement,
    contextMenu: any,
}

/// Component passed into <WithContextMenu> must accept ref.
const WithContextMenu = (props: WithContextMenuProps) => {
    return <FloatingTree>
        <WithContextMenuInner {...props} />
    </FloatingTree>
}

const WithContextMenuInner = (props: WithContextMenuProps) => {
    const menuContext = useMenuOwner()
    const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault()
        if (!shouldDisplay()) {
            return
        }
        setShouldDisplay(false)
        menuContext.refs.setPositionReference({
            getBoundingClientRect() {
                return {
                    width: 0,
                    height: 0,
                    x: e.clientX,
                    y: e.clientY,
                    top: e.clientY,
                    right: e.clientX,
                    bottom: e.clientY,
                    left: e.clientX,
                }
            }
        })
        menuContext.setIsOpen(true)
    }
    return <>
        {cloneElement(props.children, { onContextMenu: handleContextMenu, ...menuContext.getReferenceProps() })}
        <FloatingPortal>
            <ContextMenuContext.Provider value={menuContext}>
                {menuContext.isOpen ? <FloatingOverlay lockScroll>
                    {props.contextMenu}
                </FloatingOverlay> : null}
            </ContextMenuContext.Provider>
        </FloatingPortal>
    </>
}

export default WithContextMenu