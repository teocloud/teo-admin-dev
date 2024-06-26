// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useClick, useDismiss, useFloating, useInteractions, useRole } from "@floating-ui/react"
import { Dispatch, ReactNode, SetStateAction } from "react"
import ModalElement from '../../extended/modal/ModalElement'
import { css } from '@linaria/core'
import { flexContainer } from '../../../lib/generated/theme'

type ModalProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    dismissWithOutsideClick?: boolean,
    dismissWithEscKey?: boolean,
    children: ReactNode,
}

export const floatingOverlayExtendedCss = css`
    ${flexContainer("row", "center", "center")}
`

const Modal = ({ isOpen, setIsOpen, dismissWithEscKey, dismissWithOutsideClick, children }: ModalProps) => {
    const { refs, context: floatingContext } = useFloating({ 
        open: isOpen,
        onOpenChange: setIsOpen,
    })
    const click = useClick(floatingContext)
    const dismiss = useDismiss(floatingContext, { 
        referencePress: true,
        escapeKey: dismissWithEscKey,
        outsidePress: dismissWithOutsideClick,
        outsidePressEvent: "mousedown",
    })
    const role = useRole(floatingContext)
    const {
        getFloatingProps,
    } = useInteractions([role, dismiss, click])
    return <FloatingPortal>
        {isOpen && <FloatingOverlay lockScroll className={floatingOverlayExtendedCss}>
            <FloatingFocusManager context={floatingContext}>
                <ModalElement ref={refs.setFloating} {...getFloatingProps()}>
                    {children}
                </ModalElement>
            </FloatingFocusManager>
        </FloatingOverlay>}
    </FloatingPortal>  
}

export default Modal