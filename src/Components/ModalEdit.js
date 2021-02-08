import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

const ModalEdit = ({ modalIsOpen, entry, setEntry, setModalIsOpen, saveEntry }) => {

    return (
        <Modal
            open={modalIsOpen}
        >
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content >
            <EntryForm 
                entry={entry}
                setEntry={setEntry}
            />
            </Modal.Content>
            
            <Modal.Actions >
                <Button onClick={() => saveEntry()} >Close</Button>
                <Button onClick={() => setModalIsOpen(false)} primary >Save</Button>
            </Modal.Actions>

        </Modal>
    )
}

export default ModalEdit