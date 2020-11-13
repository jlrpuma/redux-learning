import store from './store';

/** dispatch, subscribe, getState, replaceReducer methods */
//console.log(store);

/** it will show an empty array */
//console.log(store.getState());

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


