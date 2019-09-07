import axios from "axios";

export default (productId)=> axios.get(`http://xh.zjlhhs.com.cn/wap/haibao/product/detail?productId=${productId}`);
