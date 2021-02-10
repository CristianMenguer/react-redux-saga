import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import { closeEditModalRedux } from '../Redux/actions/modals.actions'
import EntryForm from './EntryForm'
import useEntryDetails from '../hooks/useEntryDetails'

const ModalEdit = ({ modalIsOpen }) => {

    const dispatch = useDispatch()
    const { entry, setEntry, editEntry } = useEntryDetails()

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
                <Button onClick={() => dispatch(closeEditModalRedux())} >Close</Button>
                <Button
                    onClick={() => editEntry()}
                    primary
                >Save</Button>
            </Modal.Actions>

        </Modal>
    )
}

export default ModalEdit
