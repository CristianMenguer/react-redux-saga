import { call, delay, put, take } from 'redux-saga/effects'

function double(number) {
    return number * 2
}

export function* testSaga() {
    // let varCount = 0
    while (true) {
        console.log('Starting Saga')
        const state = yield take('TEST_MESSAGE')
        const a = yield call(double, state.payload)
        console.log('a', a)
        const b = yield double(20)
        console.log('b', b)
        // console.log('state', state.payload)
        // console.log('Finish Saga', varCount++)
        console.log('Finish Saga')
    }
}

export function* dispatchTest() {
    while (true) {
        yield delay(1000)
        yield put({ type: 'TEST_MESSAGE', payload: 10 })
        // console.log('Finish Saga', varCount++)
    }
}

