import { call, put, take } from "redux-saga/effects"
import { types as entriesTypes } from '../Redux/actions/entries.actions'
import axios from "axios"

export function* addEntrySaga() {
    while (true) {
        const removal = yield take(entriesTypes.ADD_ENTRY)
        //
        const response = yield call(addEntry, removal.payload)
        if (response === 201) {
            console.log(removal.payload)
            yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload: { payload: removal.payload } })
        }
    }

}

const addEntry = async (entry) => {
    await axios.post('http://localhost:3003/entriesValues/', {
        id: entry.id,
        value: entry.value,
        isIncome: entry.isIncome
    })
    const response = await axios.post('http://localhost:3003/entries/', {
        id: entry.id,
        description: entry.description
    })
    return response.status
    // return 200
}
