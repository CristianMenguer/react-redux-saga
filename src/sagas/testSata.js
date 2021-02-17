import { cancel, cancelled, delay, fork, put, take, takeLatest } from 'redux-saga/effects'

// function double(number) {
//     return number * 2
// }

// function* testSaga() {
//     // let varCount = 0
//     while (true) {
//         console.log('Starting Saga')
//         const state = yield take('TEST_MESSAGE')
//         const a = yield call(double, state.payload)
//         console.log('a', a)
//         const b = yield double(20)
//         console.log('b', b)
//         // console.log('state', state.payload)
//         // console.log('Finish Saga', varCount++)
//         console.log('Finish Saga')
//     }
// }

// function* testSagaTakeEveryProcess({ payload }) {
//     console.log(`start: testSagaTakeEveryProcess count: ${payload}`)
//     yield delay(3000)
//     console.log(`finish: testSagaTakeEveryProcess count: ${payload}`)
// }

// function* testSagaEvery() {
//     const state = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess)
//     console.log(`test_3 <=> count: ${state.payload}`)
// }

// function* doNothing() {
//     console.log('started doing nothing')
//     yield delay(1000)
//     console.log('doing nothing')
// }

// function* testSagaFork() {
//     while (true) {
//         yield take('TEST_MESSAGE_2')
//         yield delay(1000)
//         yield fork(doNothing)
//         yield fork(doNothing)
//         yield fork(doNothing)
//     }
// }

function* infinitySaga() {
    console.log('inifity Saga')
    let index = 0
    while (true) {
        try {
            console.log(`inifity Saga inside: ${index++}`)
            yield delay(1000)
        } catch (err) {
            console.log('error', err)
        } finally {
            console.log('Fork cancelled?', yield cancelled())
        }
    }
    // console.log('end finish saga')
}

export function* testSagaCancelled() {
    yield take('TEST_MESSAGE_4')
    const handleCancel = yield fork(infinitySaga)
    yield delay(3000)
    yield cancel(handleCancel)
}

export function* testSagaTakeLatest() {
    yield takeLatest('TEST_MESSAGE_5', infinitySaga)
}

export function* dispatchTest() {
    let count = 10
    while (true) {
        yield delay(100 * (count + 1))
        yield put({ type: 'TEST_MESSAGE_5', payload: count })
        count++
    }
}
