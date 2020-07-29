import initialState from '../store/initialState'

import _ from 'lodash'
import { Action } from 'redux'

import initialState from '../initialState'
import {
    SET_USER_ALLOWED,
    SET_COMPONENT_LOADING_STATUS,
    SET_SLIDE_DYNAMIC_DIMENSIONS,
} from '../actions/types'

export interface DTWAction extends Action {
    payload?: any
}

const reducer = (
    state: any = initialState.dtw,
    action: DTWAction,
): {} => {
    switch (action.type) {
    default:
        return state
    }
}

export default [
    {
        key: 'dtw',
        reducer,
    },
]
