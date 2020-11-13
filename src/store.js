import { reduce } from 'lodash';
import {createStore} from 'redux';
import reducer from './reducer';

/** High order function createStore from Redux takes a reference to a function as a argument  */
const store = createStore(reducer);

export default store;