import { delay } from 'redux-saga/effects'

export function* testSaga() {
    let varCount = 0
    while (++varCount < 10) {
        yield delay(1000)
        console.log('Redux Saga', varCount)
    }
    return varCount
}

