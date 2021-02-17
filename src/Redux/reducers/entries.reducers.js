import { types as entriesTypes } from '../actions/entries.actions'

const entriesReducer = (state = [], action) => {
    if (action.type === entriesTypes.ADD_ENTRY_RESULT) {
        const newEntries = state.concat([{ ...action.payload }])
        //
        return newEntries
    }
    //
    if (action.type === entriesTypes.REMOVE_ENTRY_RESULT) {
        const newEntries = state.filter(element => element.id !== action.payload.id)
        //
        return newEntries
    }
    //
    if (action.type === entriesTypes.UPDATE_ENTRY) {
        const newEntries = [...state]
        if (!newEntries || newEntries.length < 1)
            return state
        //
        const index = newEntries.findIndex(element => element.id === action.payload.id)
        if (newEntries[index].id === action.payload.id) {
            newEntries[index] = { ...newEntries[index], ...action.payload }
            return newEntries
        }
    }
    //
    if (action.type === entriesTypes.POPULATE_ENTRIES) {
        return action.payload
    }
    //
    return state
}

export default entriesReducer
