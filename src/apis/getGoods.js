import axios from 'axios';

// export default ()=>{
//   return axios.get('../static/json/preferential.json');
// }

export default ()=>{
  return axios.get('http://xh.zjlhhs.com.cn/wap/haibao/info/get');
}
