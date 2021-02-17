export const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    ADD_ENTRY: 'ADD_ENTRY',
    ADD_ENTRY_RESULT: 'ADD_ENTRY_RESULT',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES'
}

export const addEntryRedux = (payload) => {
    return {
        type: types.ADD_ENTRY,
        payload
    }
}

export const populateEntriesRedux = (payload) => {
    return {
        type: types.POPULATE_ENTRIES,
        payload
    }
}

export const removeEntryRedux = (idToRemove) => {
    return {
        type: types.REMOVE_ENTRY,
        payload: {
            id: idToRemove
        }
    }
}

export const updateEntryRedux = (payload) => {
    return {
        type: types.UPDATE_ENTRY,
        payload
    }
}

export const getEntriesRedux = (payload) => {
    return {
        type: types.GET_ENTRIES
    }
}
