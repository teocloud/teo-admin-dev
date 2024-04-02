import { styled } from "@linaria/react";
import { clearButton } from "../../../lib/generated/theme";

type SelectedListItemElementProps = {
    highlighted: boolean
    selected: boolean
}

const SelectListItemElement = styled.button<SelectedListItemElementProps>`
    ${clearButton}
    &:disabled {
        opacity: 0.5;
    }
    border: 2px solid gray;
    border-color: ${({ selected, highlighted }) => {
        if (selected) {
            return 'blue'
        } else if (highlighted) {
            return 'green'
        } else {
            return 'gray'
        }
    }};
`

export default SelectListItemElement