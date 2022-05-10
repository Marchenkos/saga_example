import { spawn } from 'redux-saga/effects';

import { listenForFetchProductListTrigger } from '../components/product-list/sagas/get-product-list.saga';
import { listenForFetchProductByIdTrigger } from '../components/product-details/sagas/fetch-product-by-id.saga';
import { listenForFetchBasketTrigger } from '../initialize/saga/load-basket.saga';
import { listenForAddToBasketTrigger } from '../components/checkout/basket/sagas/add-to-basket.saga';

export function* rootSaga() {
  //here you can spawn all your sagas listeners

    yield spawn(listenForFetchProductListTrigger);
    yield spawn(listenForFetchProductByIdTrigger);
    yield spawn(listenForFetchBasketTrigger);
    yield spawn(listenForAddToBasketTrigger);
}
