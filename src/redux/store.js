import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {productsReducer} from './reducers/productReducer';

export const store = createStore(combineReducers(
    {
        products: productsReducer
    }
),
{},
applyMiddleware(thunk)
);