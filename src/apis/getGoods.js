import axios from 'axios';

export default ()=>{
  return axios.get('../static/json/excel.json');
}
