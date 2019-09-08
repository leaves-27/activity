import axios from 'axios';
export const getGoodsWithLayout = (actId)=> axios.get('http://xh.zjlhhs.com.cn/wap/haibao/info/get', {
  params: {
    actId
  }
});
export const getGoods = (pageSize, currentPageNo, actId)=> axios.get('http://xh.zjlhhs.com.cn/wap/haibao/product/list', {
  params: {
    pageSize,
    currentPageNo,
    actId
  }
});

export default getGoodsWithLayout;
