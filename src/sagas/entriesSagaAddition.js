import { call, put, takeLatest } from "redux-saga/effects"
import { types as entriesTypes } from '../Redux/actions/entries.actions'
import axios from "axios"

export function* addEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({ payload }) {
    yield call(addEntry, payload)
    yield call(addEntryDetails, payload)
    yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload })

}

async function addEntryDetails(payload) {
    await axios.post('http://localhost:3003/entriesValues/', {
        id: payload.id,
        value: payload.value,
        isIncome: payload.isIncome
    })
}

async function addEntry(payload) {
    await axios.post('http://localhost:3003/entries/', {
        id: payload.id,
        description: payload.description
    })
}
