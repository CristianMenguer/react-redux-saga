import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'
import useEntryDetails from '../hooks/useEntryDetails'

const NewEntryForm = () => {

    const { entry, setEntry, addEntry } = useEntryDetails()

    return (
        <Form unstackable >

            <EntryForm
                entry={entry}
                setEntry={setEntry}
            />

            <ButtonSaveOrCancel addEntry={addEntry} />

        </Form>
    )
}

export default NewEntryForm
