// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useFloating, useInteractions, useRole } from '@floating-ui/react'
import React from 'react'
import { floatingOverlayExtendedCss } from '../modal/Modal'
import ModalElement from '../../extended/modal/ModalElement'
import SignInForm from './SignInForm'
import { useAccountAvailable } from '../../../lib/generated/signIn'

const SignInModal = () => {
    const accountAvailable = useAccountAvailable()
    const isOpen = !accountAvailable
    const { refs, context: floatingContext } = useFloating({ 
        open: isOpen,
    })
    const role = useRole(floatingContext)
    const {
        getFloatingProps,
    } = useInteractions([role])
    return <FloatingPortal>
        {isOpen && <FloatingOverlay lockScroll className={floatingOverlayExtendedCss}>
            <FloatingFocusManager context={floatingContext}>
                <ModalElement ref={refs.setFloating} {...getFloatingProps()}>
                    <SignInForm />
                </ModalElement>
            </FloatingFocusManager>
        </FloatingOverlay>}
    </FloatingPortal>
}

export default SignInModal