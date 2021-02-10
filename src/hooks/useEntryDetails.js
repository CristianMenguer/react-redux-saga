import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntryRedux, updateEntryRedux } from '../Redux/actions/entries.actions'
import { v4 as uuid } from 'uuid'
import { closeEditModalRedux } from '../Redux/actions/modals.actions'

const useEntryDetails = () => {
    const [entry, setEntry] = useState({
        id: 0,
        description: '',
        value: '',
        isIncome: true
    })

    const dispatch = useDispatch()

    const addEntry = () => {
        const newEntry = {
            ...entry,
            id: uuid(),
        }
        //
        dispatch(addEntryRedux(newEntry))
        //
        setEntry({
            id: 0,
            description: '',
            value: ''
        })
    }

    const editEntry = () => {
        dispatch(updateEntryRedux(entry))
        dispatch(closeEditModalRedux())
        //
        setEntry({
            id: 0,
            description: '',
            value: ''
        })
    }

    return {
        entry,
        setEntry,
        addEntry,
        editEntry
    }
}

export default useEntryDetails
