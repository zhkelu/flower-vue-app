import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.cat-shop.penkuoer.com",
  timeout: 5000
});

/**
 * 发送get请求
 * @param {*} url 请求地址
 */
export const get = (url, data, headers) => instance.get(url, data, headers);

// export function get(url) {
//   return instance.get(url);
// }

/**
 * 发送post请求
 * @param {*} url   地址
 * @param {*} data  参数
 */
export const post = (url, data, headers) => instance.post(url, data, headers);

//发送put请求
export const put = (url, data) => instance.put(url, data);

//发送del请求
export const del = (url, data, headers) => instance.delete(url, data, headers);

export default instance;
