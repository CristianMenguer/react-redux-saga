import { call, fork, put, take } from 'redux-saga/effects'
import { populateEntriesRedux, types as entriesTypes, updateEntryRedux } from '../Redux/actions/entries.actions'
import axios from 'axios'

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES)
    const response = yield call(axios, 'http://localhost:3003/entries')
    yield put(populateEntriesRedux(response.data))
}

export function* getEntryDetails(id) {
    const response = yield call(axios, `http://localhost:3003/entriesValues/${id}`)
    yield put(updateEntryRedux(response.data))
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)
    //
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id)
    }
    //
}

