import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonSaveOrCancel = ({addEntry, entry}) => {

    return (
        <Button.Group style={{ marginTop: 20 }} >
            <Button >Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => addEntry(entry)} >Ok</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel