export const types = {
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY'
}

export const addEntryRedux = (payload) => {
    return {
        type: types.ADD_ENTRY,
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
