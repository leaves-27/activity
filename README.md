# poster

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# todos
1. excel文件生成对应json文件。
- [x] 基础的excel文件到json文件功能。
- [x] 将excel中中文字段名映射到代码中使用的字段名。
- [x] 若excel表中没有可用的id，则根据表名和商品顺序自动生成对应商品id。
<br />

2. 应用组件结构拆分---即将页面和组件分割开来。
- [x] 将页面和组件进行分割。 
- [x] 调整poster页面结构。
<br />

3. 修正滚动功能;
- [x] 滚动元素容器大小修正为根据元素内容多少自动扩展。
- [x] 滚动元素根据页面高度进行计算。
- [x] 背景图进行缩放处理。
- [x] 滚动过程中的当前页码不对.       
<br />

4. 根据生成的对应json来渲染滚动页面。
- [x] 请求数据
- [x] 映射渲染数据字段
- [x] 确定哪些商品需要提示此商品活动已过期
<br />

5. 根据传过来的参数获取相应json文件渲染详情页面。
- [x] 请求数据
- [x] 映射渲染数据字段         
<br />

6. 画锚点位置。   
(1)画出所有瞄点的大概位置
- [x] P1
- [x] P2
- [x] P3
- [x] P4
- [x] P5
- [x] P6
- [x] P7
- [x] P8
- [x] P9
- [x] P10
- [x] P11
- [x] P12

(2)校正商品数据和商品瞄点位置不对应的情况   
<1>根据excel表调整样式顺序
- [x] P1
- [x] P2
- [x] P3
- [x] P4
- [x] P5
- [x] P6
- [x] P7
- [x] P8
- [x] P9
- [x] P10
- [x] P11
- [x] P12

<2>修正Excel表同一商品占多行引起生成数据变多的情况:
即合并相同商品占的单元格
- [x] P1
- [x] P2
- [x] P3
- [x] P4
- [x] P5
- [x] P6
- [x] P7
- [x] P8
- [x] P9
- [x] P10
- [x] P11
- [x] P12

<br />

7. 根据表名称修改页面背景图名称
- [x] 即背景图id要和表名称保持一致。
<br />

8. 根据生成的对应商品id修改商品图的名称--即商品图名称应该和生成的json文件中商品ID保持一致。
- [x] P1
- [x] P2
- [x] P3
- [x] P4
- [x] P5
- [x] P6
- [x] P7
- [x] P8
- [x] P9
- [x] P10
- [x] P11
- [x] P12
<br />

9. 修正目录
- [x] 修正目录的选中修改  
<br />

- 修正目录选中的目录对应的内容    
- [x] excel表格数据修改为多页    
- [x] 根据新的excel数据画瞄点     
- [x] 修改新excel对应的图片名称    

<br />

10. 列表方式查看商品  
- [x] 修正数据生成格式
- [x] 获取生成的数据并将其格式化
- [x] 添加点击事件等逻辑

11.issue
- [x] 从路由取id
- [x] 第首页跳到第二个页面时，第二个页面首次请求不执行

--------------------

注：
- [ ]  表示未完成
- [x] 表示已完成
