import React, { ReactElement } from "react"
import * as Ri from "react-icons/ri"

export type DefaultIconCode = "RiAlarmLine"
| "RiAlarmWarningLine"
| "RiAlarmFill"
| "RiAlarmWarningFill"
| "RiBox3Line"

export const defaultIconsMap: { [key in DefaultIconCode]: ReactElement } = {
    "RiAlarmLine": <Ri.RiAlarmLine />,
    "RiAlarmWarningLine": <Ri.RiAlarmWarningLine />,
    "RiAlarmFill": <Ri.RiAlarmFill />,
    "RiAlarmWarningFill": <Ri.RiAlarmWarningFill />,
    "RiBox3Line": <Ri.RiBox3Line />,
}
