import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {fetchReducer} from './reducers/productReducer';

export const store = createStore(combineReducers(
    {
        products: fetchReducer
    }
),
{},
applyMiddleware(thunk)
);