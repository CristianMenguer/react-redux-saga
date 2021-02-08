import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'

const NewEntryForm = ({addEntry, entry, setEntry}) => {

    return (
        <Form unstackable >
            
            <EntryForm 
                entry={entry} 
                setEntry={setEntry}
            />
            
            <ButtonSaveOrCancel addEntry={addEntry}  entry={entry} />

        </Form>
    )
}

export default NewEntryForm