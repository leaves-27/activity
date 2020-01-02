import axios from 'axios';
export const getGoodsWithLayout = (groupId = '')=> axios.get('//xh.zjlhhs.com.cn/wap/haibao/info/get', {
  params: {
    groupId
  }
});
export const getGoods = ({
  pageSize,
  currentPageNo,
  groupId
})=> axios.get('//xh.zjlhhs.com.cn/wap/haibao/product/list', {
  params: {
    pageSize,
    currentPageNo,
    groupId
  }
});

export default getGoodsWithLayout;
