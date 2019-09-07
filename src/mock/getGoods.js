export default ()=>{
  return new Promise((resolve, reject)=>{
    resolve({
      data: {
        "data":{
          "actDetailList":[
            {
              "actDesc":"活动组1-活动2-描述",
              "actId":2,
              "actName":"活动组1-活动2",
              "pages":[
                {
                  "actId":"2",
                  "pageId":"3",
                  "pageName":"活动2-首页",
                  "rows":[
                    {
                      "height": 500,
                      "rowspan": 2,
                      "columns":[
                        {
                          "nodeId":"17",
                          "pageId":"3",
                          "parentId":"16",
                          "colspan": 1,
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"../../static/img/001.jpg",
                            "price":"234",
                            "productDesc":"活动二大图-desc",
                            "productId":"10",
                            "productName":"活动二大图",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        }
                      ],
                      "nodeId":"16",
                      "pageId":"3",
                      "parentId":"0"
                    },
                    {
                      "columns":[
                        {
                          "nodeId":"17",
                          "pageId":"3",
                          "parentId":"16",
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"http://xh.zjlhhs.com.cn/image/1567757008124_dangao.jpg",
                            "price":"234",
                            "productDesc":"活动二大图-desc",
                            "productId":"10",
                            "productName":"活动二大图",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        }
                      ],
                      "nodeId":"16",
                      "pageId":"3",
                      "parentId":"0"
                    }
                  ]
                }
              ]
            },
            {
              "actDesc":"活动组1-活动1-描述",
              "actId":1,
              "actName":"活动组1-活动1",
              "pages":[
                {
                  "actId":"1",
                  "pageId":"1",
                  "pageName":"活动1-首页",
                  "rows":[
                    {
                      "columns":[
                        {
                          "nodeId":"2",
                          "pageId":"1",
                          "parentId":"1",
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"http://xh.zjlhhs.com.cn/image/1567753072150_dangao.jpg",
                            "price":"999",
                            "productDesc":"首页上部大图-desc",
                            "productId":"1",
                            "productName":"首页上部大图",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        }
                      ],
                      "nodeId":"1",
                      "pageId":"1",
                      "parentId":"0"
                    },
                    {
                      "columns":[
                        {
                          "nodeId":"4",
                          "pageId":"1",
                          "parentId":"3",
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756320362_dangao.jpg",
                            "price":"22",
                            "productDesc":"首页-下-图1-desc",
                            "productId":"2",
                            "productName":"首页-下-图1",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        },
                        {
                          "nodeId":"5",
                          "pageId":"1",
                          "parentId":"3",
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756343927_dangao.jpg",
                            "price":"44",
                            "productDesc":"首页-下-图2-desc",
                            "productId":"3",
                            "productName":"首页-下-图2",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        },
                        {
                          "nodeId":"6",
                          "pageId":"1",
                          "parentId":"3",
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756369537_dangao.jpg",
                            "price":"34",
                            "productDesc":"首页-下-图3-desc",
                            "productId":"4",
                            "productName":"首页-下-图3",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        }
                      ],
                      "nodeId":"3",
                      "pageId":"1",
                      "parentId":"0"
                    }
                  ]
                },
                {
                  "actId":"1",
                  "pageId":"2",
                  "pageName":"活动1-第一页",
                  "rows":[
                    {
                      "columns":[
                        {
                          "nodeId":"9",
                          "pageId":"2",
                          "parentId":"7",
                          "rows":[
                            {
                              "columns":[
                                {
                                  "nodeId":"11",
                                  "pageId":"2",
                                  "parentId":"10",
                                  "product":{
                                    "endTime":"2019-09-30 00:00:00",
                                    "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756870495_dangao.jpg",
                                    "price":"33",
                                    "productDesc":"页面一-左图1-desc",
                                    "productId":"6",
                                    "productName":"页面一-左图1",
                                    "startTime":"2019-09-01 00:00:00"
                                  }
                                },
                                {
                                  "nodeId":"12",
                                  "pageId":"2",
                                  "parentId":"10",
                                  "product":{
                                    "endTime":"2019-09-30 00:00:00",
                                    "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756890681_dangao.jpg",
                                    "price":"343",
                                    "productDesc":"页面一-左图2-desc",
                                    "productId":"7",
                                    "productName":"页面一-左图2",
                                    "startTime":"2019-09-01 00:00:00"
                                  }
                                }
                              ],
                              "nodeId":"10",
                              "pageId":"2",
                              "parentId":"9"
                            },
                            {
                              "columns":[
                                {
                                  "nodeId":"14",
                                  "pageId":"2",
                                  "parentId":"13",
                                  "product":{
                                    "endTime":"2019-09-30 00:00:00",
                                    "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756910431_dangao.jpg",
                                    "price":"34",
                                    "productDesc":"页面一-左图3-desc",
                                    "productId":"8",
                                    "productName":"页面一-左图3",
                                    "startTime":"2019-09-01 00:00:00"
                                  }
                                },
                                {
                                  "nodeId":"15",
                                  "pageId":"2",
                                  "parentId":"13",
                                  "product":{
                                    "endTime":"2019-09-30 00:00:00",
                                    "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756933652_dangao.jpg",
                                    "price":"34",
                                    "productDesc":"页面一-左图4-desc",
                                    "productId":"9",
                                    "productName":"页面一-左图4",
                                    "startTime":"2019-09-01 00:00:00"
                                  }
                                }
                              ],
                              "nodeId":"13",
                              "pageId":"2",
                              "parentId":"9"
                            }
                          ]
                        },
                        {
                          "nodeId":"8",
                          "pageId":"2",
                          "parentId":"7",
                          "product":{
                            "endTime":"2019-09-30 00:00:00",
                            "imageUrl":"http://xh.zjlhhs.com.cn/image/1567756660545_dangao.jpg",
                            "price":"343",
                            "productDesc":"页面2-图片-desc",
                            "productId":"5",
                            "productName":"页面2-图片",
                            "startTime":"2019-09-01 00:00:00"
                          }
                        }
                      ],
                      "nodeId":"7",
                      "pageId":"2",
                      "parentId":"0"
                    }
                  ]
                }
              ]
            }
          ],
          "groupId":"1",
          "groupName":"活动组1"
        },
        "success":true
      }
    });
  })
}
