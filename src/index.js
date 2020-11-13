import store from './store';
import * as actionsCreator from './actions'


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

store.dispatch(actionsCreator.bugAdded('Bug 1'));

// provided function retruned when we call the subscribe method 
/** We always wat to unsubscribe from all the subscriptions that we can have on the view 
 * because many subscriptions opened can create memory leaks
 */
unsubscribe();

store.dispatch(actionsCreator.bugRemoved(1));


