# poster_master_front

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

# todoList
1.excel文件生成对应json文件。
  (1)基础的excel文件到json文件功能。
  (2)将excel中中文字段名映射到代码中使用的字段名。
  (3)若excel表中没有可用的id，则根据表名和商品顺序自动生成对应商品id。

2.应用组件结构拆分---即将页面和组件分割开来。
  (1)将页面和组件进行分割。 
  (2)调整poster页面结构。

3.修正滚动功能;
  (1)滚动元素容器大小修正为根据元素内容多少自动扩展。
  (2)滚动元素根据页面高度进行计算。
  (3)背景图进行缩放处理。
  (3)滚动过程中的当前页码不对.

4.根据生成的对应json来渲染滚动页面。
5.根据传过来的参数获取相应json文件渲染详情页面。
6.画锚点位置。
7.根据表名称修改页面背景图名称-----------------即背景图id要和表名称保持一致。
8.根据生成的对应商品id修改商品图的名称----------即商品图名称应该和生成的json文件中商品ID保持一致。

9.修正目录
  (1)修正目录的选中修改
  (2)修正目录选中的目录对应的内容

10.列表方式查看商品  
