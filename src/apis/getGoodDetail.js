import axios from "axios";

export default (productId, groupId)=> axios.get(`//xh.zjlhhs.com.cn/wap/haibao/product/detail`, {
  params: {
    productId,
    groupId
  }
});
