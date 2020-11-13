import store from './store';
import {BUG_ADDDED, BUG_REMOVED} from './actionTypes'

/** dispatch, subscribe, getState, replaceReducer methods */
//console.log(store);

/** it will show an empty array */
//console.log(store.getState());

/**
 * This is used in case that we want to refresh our UI
 * if we are working with react we are going to re render
 */
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState())
})

store.dispatch({
    type: BUG_ADDDED,
    payload: {
        description: 'Bug1'
    }
});

// provided function retruned when we call the subscribe method 
/** We always wat to unsubscribe from all the subscriptions that we can have on the view 
 * because many subscriptions opened can create memory leaks
 */
unsubscribe();

store.dispatch({
    type: BUG_REMOVED,
    payload: {
        id: 1
    }
});


