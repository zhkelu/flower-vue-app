import { get } from '../utils/request';

/**
 * 获取所有的商品信息 分页形式
 */
export const products = () => get('/api/v1/products');

/**
 * 获取详情 感觉id
 * @param {*} id
 */
export const product = id => get(`/api/v1/products/${id}`);
