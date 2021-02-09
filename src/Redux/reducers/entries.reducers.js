const initialEntries = [
    {
        id: 1,
        description: 'Salary',
        value: 1000,
        isIncome: true
    },
    {
        id: 2,
        description: 'Rent',
        value: 300,
        isIncome: false
    },
    {
        id: 3,
        description: 'Groceries',
        value: 200,
        isIncome: false
    },
]

const entriesReducer = (state = initialEntries, action) => {
    if (action.type === 'ADD_ENTRY') {
        const newEntries = state.concat({ ...action.payload })
        //
        return newEntries
    }
    //
    if (action.type === 'REMOVE_ENTRY') {
        const newEntries = state.filter(element => element.id !== action.payload.id)
        //
        return newEntries
    }
    //
    return state
}

export default entriesReducer