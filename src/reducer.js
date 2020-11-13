import * as actions from './actionTypes'


let lastId = 0;

/*
Notes:
The payload of the action needs to have the minimal information to perform the change on the state
we dont have to pass the id or the resolved attribute, the only thing needed is the description

Note that the state have a default argument that is the state = []
when Redux call for first time the reducer is going to set the state to an empty array

Note: yo can use the the spread operator or Immer(this is better in case you have nested objects on your state)
*/
export default function reducer(state = []  , action) {
    if(action.type === actions.BUG_ADDDED)
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved:false
            }
        ];
    else if(action.type === actions.BUG_REMOVED)
        return state.filter(bug => bug.id != action.payload.id)
    else 
        return state;
}