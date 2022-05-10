import { combineReducers } from 'redux';

import { productReducer as products } from '../components/product-list/reducers';
import { basketReducer as basket } from '../components/basket/reducers';

export const rootReducer = combineReducers({
    products,
    basket,
});
