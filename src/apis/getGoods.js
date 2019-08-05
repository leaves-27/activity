import axios from 'axios';

export default ()=>{
  return axios.get('../static/json/preferential.json');
}
