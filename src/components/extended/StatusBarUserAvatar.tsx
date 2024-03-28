import React from 'react'
import StatusBarUserAvatarElement from "./StatusBarUserAvatarElement"

type StatusBarUserAvatarProps = {
    name: string
    image?: string
}

const StatusBarUserAvatar = (props: StatusBarUserAvatarProps) => {
    return <StatusBarUserAvatarElement>
        {props.name[0].toUpperCase()}
    </StatusBarUserAvatarElement>
}

export default StatusBarUserAvatar