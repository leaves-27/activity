export const createSheetNames = ()=>{
  const arr  = [];
  for(let i = 1; i <= 12; i++ ){
    arr.push('P'+i);
  }
  return arr;
};

export const getPages = () => {
  const pages = {};
  const sheetNames = createSheetNames();
  sheetNames.forEach((item)=>{
    pages[item] = [];
  });
  return pages;
}

export const getMenus = ()=>{
  return [{
    id: '1',
    name: 'preferential',
    desc: '洗护嘉年华',
    startIndex: 1,
  }, {
    id: '2',
    name: 'preferential',
    desc: '会员支付日',
    startIndex: 6
  }, {
    id: '3',
    name: 'preferential',
    desc: '会员家庭周',
    startIndex: 7
  }, {
    id: '4',
    name: 'preferential',
    desc: '篮球世界杯',
    startIndex: 9
  }, {
    id: '5',
    name: 'preferential',
    desc: '七夕节不得无礼',
    startIndex: 11
  }, {
    id: '6',
    name: 'preferential',
    desc: '韩国食品节',
    startIndex: 13
  }]
};

// function pushHistory() {
//   var state1 = {
//     title: "title",
//     url: "#"
//   };
//   window.history.pushState(state1, "title", "#");
// }

export const isWeiXin = () => {
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/Windows Phone/i) == 'windows phone'){
    return true;
  }else{
    return false;
  }
}

export const getBrowserInterfaceSize = () => {
  // pushHistory()
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;

  if (typeof pageWidth != "number") {
    //在标准模式下面
    if (document.compatMode == "CSS1Compat" ) {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = window.body.clientHeight;
    }
  }

  // if(isWeiXin()){
  //   pageHeight = pageHeight - 44;
  // }

  return {
    pageWidth,
    pageHeight
  }
}

export const setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name+ "=" + escape(value) +
    ((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}
// 读取cookie
export const getCookie = (c_name) => {
  if(document.cookie.length > 0){
    var c_start = document.cookie.indexOf(c_name + "=");
    if(c_start != -1){
      c_start = c_start + c_name.length + 1 ;
      var c_end = document.cookie.indexOf(";", c_start)

      if(c_end == -1){
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}


export const goDetail = function(good = {}, source = '', actId){
  const { endTime = '', productId } = good;
  if(endTime){
    const timestamp = (new Date(endTime)).getTime();
    const currentTimeTimestamp = new Date().getTime();
    if (currentTimeTimestamp > timestamp) {
      alert(`您选择的此商品活动已过期`);
      return;
    }
  }
  this.$router.push({
    path:'/good-detail',
    query:{
      id: productId,
      source,
      actId,
    }
  })
};
