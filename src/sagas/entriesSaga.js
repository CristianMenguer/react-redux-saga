import { call, put, take } from 'redux-saga/effects'
import { types as entriesTypes } from '../Redux/actions/entries.actions'
import axios from 'axios'

export function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES)
    const response = yield call(axios, 'http://localhost:3003/entries')
    yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: response.data })
}

const fetchInitialData = async () => {
    const entriesResponse = await axios.get('http://localhost:3003/entries')
    console.log(entriesResponse.data)
    //
    const modalsResponse = await axios.get('http://localhost:3003/modals')
    console.log(modalsResponse.data)
}
