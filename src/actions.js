import {BUG_ADDDED, BUG_REMOVED} from './actionTypes'

export function bugAdded(description) {
    return {
        type: BUG_ADDDED,
        payload: {
            description: description
        }
    };
} 

export function bugRemoved(id) {
    return {
        type: BUG_REMOVED,
        payload: {
            id: id
        }
    };
}