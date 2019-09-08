import axios from "axios";

export default (productId, actId)=> axios.get(`http://xh.zjlhhs.com.cn/wap/haibao/product/detail`, {
  params: {
    productId,
    actId
  }
});
