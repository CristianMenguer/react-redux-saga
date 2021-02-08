import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

const NewEntryForm = () => {

    return (
        <Form unstackable >
            <Form.Group >
                <Form.Input
                    placeholder='Insurance'
                    icon='tags'
                    width={12}
                    label='Description'
                />
                <Form.Input
                    placeholder='100.00'
                    icon='currency'
                    width={4}
                    label='Value'
                    iconPosition='left'
                />
            </Form.Group>
            <ButtonSaveOrCancel />

        </Form>
    )
}

export default NewEntryForm