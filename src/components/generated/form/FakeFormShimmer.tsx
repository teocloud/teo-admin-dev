// This file is generated and managed by Teo generator internally.
// It will be overwritten in next generation. Do not modify this file.

import React from 'react'
import PaddedMainContent from '../pageStack/PaddedMainContent'
import FormContainer from './FormContainer'
import HideContentShimmer from '../shimmer/HideContentShimmer'
import Input from '../../extended/input/Input'
import FakeControlShimmers from './FakeControlShimmers'

const FakeFormShimmer = () => {
    return <FormContainer>
        <PaddedMainContent>
            <FakeControlShimmers>
                <HideContentShimmer rounded={true}>
                    <Input />
                </HideContentShimmer>
                <HideContentShimmer rounded={true}>
                    <Input />
                </HideContentShimmer>
                <HideContentShimmer rounded={true}>
                    <Input />
                </HideContentShimmer>
            </FakeControlShimmers>          
        </PaddedMainContent>
    </FormContainer>
}

export default FakeFormShimmer