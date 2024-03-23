// This file is generated by Teo generator for extending purpose.
// The file content will not be overwritten between generations. Be careful to 
// modify this file. Do not modify export names and siganatures. Modify values 
// with care.

import React, { Suspense } from 'react'
import AppRoot from './AppRoot'
import AppNavLayout from './AppNavLayout'
import Nav, { AsyncNav } from '../generated/Nav'

const App = () => {
    return <AppRoot>
        <AppNavLayout>
            <Nav />
            <Suspense fallback={"loading"}>
                <AsyncNav />
            </Suspense>
        </AppNavLayout>
    </AppRoot>
}

export default App