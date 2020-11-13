import store from './store';

/** dispatch, subscribe, getState, replaceReducer methods */
//console.log(store);

/** it will show an empty array */
//console.log(store.getState());

/**
 * This is used in case that we want to refresh our UI
 * if we are working with react we are going to re render
 */
store.subscribe(() => {
    console.log("Store changed!", store.getState())
})

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug1'
    }
});


store.dispatch({
    type: 'budRemoved',
    payload: {
        id: 1
    }
});


