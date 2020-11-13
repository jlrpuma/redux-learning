import {BUG_ADDDED, BUG_REMOVED} from './actionTypes'

export const bugAdded = (description) => ({
        type: BUG_ADDDED,
        payload: {
            description: description
        }
    });

export const bugRemoved = (id) => ({
        type: BUG_REMOVED,
        payload: {
            id: id
        }
    });