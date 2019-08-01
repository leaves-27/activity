export default ()=>{
  return new Promise((resolve, reject)=>{
    resolve({
      code: 1,
      data: [{
        id: '1',
        name: 'preferential',
        desc: '超值特惠',
        items: {
          'P1': [{"id":"code_P1_1","name":"滴露滋润倍护健康抑菌洗手液250g一瓶或滴露植物呵护健康抑菌洗手液250g一瓶 价值13.2元","price":"单笔消费满38元加10元现金","desc":"超值换购","limit":"2019.7.31-2019.8.14"},{"id":"code_P1_2","name":"清风牌面巾纸150抽*3包一提 价值17.9元","price":"单笔消费满38元加10元现金","desc":"超值换购","limit":"2019.7.31-2019.8.14"},{"id":"code_P1_3","name":"Tasy她树纯水湿巾80 片一包 价值21.9元","price":"单笔消费满38元加10元现金","desc":"超值换购","limit":"2019.7.31-2019.8.14"}]
        },
      }, {
        id: '2',
        name: 'korea',
        desc: '韩国节',
        items: {
          'P1': [{"id":"code_Korea_1","code":8801048311002,"name":"真露桃桃酒355ml","price":"6.90元/罐","desc":"产地：韩国","limit":"2019.7.31-2019.8.14"}]
        },
      }]
    });
  })
}
