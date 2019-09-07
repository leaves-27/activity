import axios from 'axios';
export const getGoodsWithLayout = ()=> axios.get('http://xh.zjlhhs.com.cn/wap/haibao/info/get');
export const getGoods = (pageSize, currentPageNo)=> axios.get('http://xh.zjlhhs.com.cn/wap/haibao/product/list', {
  params: {
    pageSize,
    currentPageNo,
  }
});

export default getGoodsWithLayout;
