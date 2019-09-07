import axios from 'axios';
export const getGoodsWithLayout = ()=> axios.get('http://xh.zjlhhs.com.cn/wap/haibao/info/get');
export const getGoods = ()=> axios.get('http://xh.zjlhhs.com.cn/wap/haibao/product/list');

export default getGoodsWithLayout;
