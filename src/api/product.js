import {get} from '../utils/request';
import {post} from '../utils/request';
import {del} from '../utils/request';

export function products(params){
  return get('/api/v1/products',params);
}

export function getProductById(id){
  return get(`api/v1/products/${id}`);
}

export function addcartList(params, headers){
  return post('/api/v1/shop_carts',params, headers)
}

export function getcartList(headers){
  return get('/api/v1/shop_carts',headers)
}

export function delOne(id,data,headers){
  return del(`/api/v1/shop_carts/${id}`,data,headers);
}
