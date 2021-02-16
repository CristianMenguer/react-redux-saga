import { types as entriesTypes } from '../actions/entries.actions'

const initialEntries = [
    // {
    //     id: 1,
    //     description: 'Salary',
    //     value: 1000,
    //     isIncome: true
    // },
    // {
    //     id: 2,
    //     description: 'Rent',
    //     value: 300,
    //     isIncome: false
    // },
    // {
    //     id: 3,
    //     description: 'Groceries',
    //     value: 200,
    //     isIncome: false
    // },
    // {
    //     id: 4,
    //     description: 'Dining Out',
    //     value: 70,
    //     isIncome: false
    // },
]


const entriesReducer = (state = initialEntries, action) => {
    if (action.type === entriesTypes.ADD_ENTRY) {
        const newEntries = state.concat({ ...action.payload })
        //
        return newEntries
    }
    //
    if (action.type === entriesTypes.REMOVE_ENTRY) {
        const newEntries = state.filter(element => element.id !== action.payload.id)
        //
        return newEntries
    }
    //
    if (action.type === entriesTypes.UPDATE_ENTRY) {
        const newEntries = [...state]
        const index = newEntries.findIndex(element => element.id === action.payload.id)
        if (newEntries[index].id === action.payload.id) {
            newEntries[index] = {...action.payload}
            return newEntries
        }
    }
    //
    return state
}

export default entriesReducer
