import React, { ForwardedRef, forwardRef, PropsWithRef, useContext } from 'react'
import OptionElement from '../../extended/select/OptionElement'
import SelectContext from './selectContext'
import { useListItem, useMergeRefs } from '@floating-ui/react'

export type OptionProps<T> = PropsWithRef<HTMLButtonElement> & {
    value: T
    valueFormatter?: (value: any) => string
}

const Option = forwardRef(({ value, valueFormatter = String, children, ...props }: OptionProps<any>, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
    const context = useContext(SelectContext)
    const { ref, index } = useListItem({ label: valueFormatter(value) })
    return <OptionElement 
        {...props}
        // Prevent immediate selection on touch devices when
        // pressing the ScrollArrows
        disabled={context.blockSelection}
        aria-selected={context.selectedIndex === index}
        role="option"
        tabIndex={context.activeIndex === index ? 0 : -1}
        style={{
        background:
            context.activeIndex === i
            ? "rgba(0,200,255,0.2)"
            : index === context.selectedIndex
            ? "rgba(0,0,50,0.05)"
            : "transparent",
        fontWeight: index === context.selectedIndex ? "bold" : "normal"
        }}
        ref={useMergeRefs([ref, forwardedRef])}
        {...context.getItemProps({
        onTouchStart() {
            context.allowSelectRef.current = true
            context.allowMouseUpRef.current = false
        },
        onKeyDown() {
            context.allowSelectRef.current = true
        },
        onClick() {
            if (context.allowSelectRef.current) {
            context.setSelectedIndex(index)
            context.setIsOpen(false)
            }
        },
        onMouseUp() {
            if (!context.allowMouseUpRef.current) {
                return;
            }

            if (context.allowSelectRef.current) {
                context.setSelectedIndex(index)
                context.setIsOpen(false)
            }

            // On touch devices, prevent the element from
            // immediately closing `onClick` by deferring it
            clearTimeout(context.selectTimeoutRef.current)
            context.selectTimeoutRef.current = setTimeout(() => {
                context.allowSelectRef.current = true;
            })
        }
        })}
    >
        {children}
    </OptionElement>
})

export default Option