export const addEntryRedux = (payload) => {
    return {
        type: 'ADD_ENTRY',
        payload
    }
}

export const removeEntryRedux = (idToRemove) => {
    return {
        type: 'REMOVE_ENTRY',
        payload: {
            id: idToRemove
        }
    }
}

export const updateEntryRedux = (payload) => {
    return {
        type: 'UPDATE_ENTRY',
        payload
    }
}
