// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import { PageStackData } from "./PageStackData"
import { PageStackItem } from "./PageStackItem"
import { PageStackItemKey } from '../../extended/pageStack/PageStackItemKeys'
import { decode } from 'js-base64'

const pageStackDataFromPath: (path: string) => PageStackData = (path: string) => {
    const stack: PageStackItem[] = []
    const components = path.split("/")
    for (let component of components) {
        if (component.length === 0) {
            continue
        }
        const parts = component.split("-")
        const variant = parts[1]
        const key = parts[0]
        const query = parts[2] ? JSON.parse(decode(parts.slice(2).join("-"))) : undefined
        stack.push({
            key: key as PageStackItemKey,
            variant,
            query
        })
    }
    if (stack.length === 0) {
        stack.push({ key: "_Index" })
    }
    return stack
}

export default pageStackDataFromPath
