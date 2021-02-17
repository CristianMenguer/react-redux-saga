import { call, put, take } from "redux-saga/effects"
import { types as entriesTypes } from '../Redux/actions/entries.actions'
import axios from "axios"

export function* deleteEntrySaga() {
    while (true) {
        const removal = yield take(entriesTypes.REMOVE_ENTRY)
        const response = yield call(deleteEntry, removal.payload.id)
        if (response === 200) {
            yield put({ type: entriesTypes.REMOVE_ENTRY_RESULT, payload: { id: removal.payload.id } })
        }
    }

}

const deleteEntry = async (id) => {
    await axios.delete(`http://localhost:3003/entriesValues/${id}`)
    const response = await axios.delete(`http://localhost:3003/entries/${id}`)
    return response.status
    // return 200
}
