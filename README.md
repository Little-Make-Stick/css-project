### slot

- Vue2

  ```vue
  <!-- 具名插槽,传参 -->
  <slot name="header" :user="user"></slot>
  ```

  ```vue
  <template slot="header" slot-scope="slotProps">
    <div>{{ slotProps.user }}</div>
  </template>
  ```

- vue3

** v-slot 只能添加到 `<template>` 或自定义组件上，这点与弃用的 slot 属性不同 **

```vue
<template v-slot:header="slotProps">
  <div>{{ slotProps.user }}</div>
</template>
```

```vue
<template #header="slotProps">
  <div>{{ slotProps.user }}</div>
</template>
```

#### 动态插槽名称

```vue
<template v-slot:[dynamicSlotName]><template></template></template>
```

### 文本多列布局

```css
.content {
  column-count: 3; //划分的列数
  column-width: calc(100 / 3 - 21px); //指定列宽
  column-rule: 1px solid #000; //列隔开的线
  column-gap: 20px; //列间距
}
```

### 混合模式 background-blend-mode

可叠加 `两张背景图` 或者 `背景图+背景色`

```css
.container {
  background: url($pic1), url($pic2);
  background-size: cover;
  background-blend-mode: lighten;
}
```

### 背景色 + 镂空文字

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

```css
.gradient-text {
  display: inline-block;
  position: relative;
  background-image: linear-gradient(
    135deg,
    #61bb46 0%,
    #61bb46 16.5%,
    #fdb827 16.5%,
    #fdb827 33.5%,
    #f5821f 33.5%,
    #f5821f 50%,
    #e03a3e 50%,
    #e03a3e 66.5%,
    #963d97 66.5%,
    #963d97 83%,
    #009ddc 83%,
    #009ddc 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
```

### 背景图 + 镂空文字

mix-blend-mode: lighten;

```css
.image-text {
  width: 100%;
  height: 100px;
  background: url(../../assets/image/layout9-img-2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .text {
    mix-blend-mode: lighten;
    position: absolute;
    width: 100%;
    height: 100%;
    color: #000;
    background-color: #fff;
    font-weight: bolder;
  }
}
```

### 滚动条样式

```css
滚动条的设置
1. ::-webkit-scrollbar 滚动条整体部分，可以设置宽度等
2. ::-webkit-scrollbar-button 滚动条两端的按钮
3. ::-webkit-scrollbar-track  外层轨道
4. ::-webkit-scrollbar-track-piece  内层滚动槽
5. ::-webkit-scrollbar-thumb 滚动的滑块
6. ::-webkit-scrollbar-corner 边角
7. ::-webkit-resizer 定义右下角拖动块的样式
```

css: https://chokcoco.github.io/CSS-Inspiration/#/./layout/best-way-to-center-element

magazine: https://juejin.cn/post/7037263345178656805

### $emit()返回值

```vue
<custom @getData="getData></custom>
export default{
  methods:{
    getData(data, callback){
      let res = data.toString();
      callback(res);
    },
  }
}
```

```js
this.$emit('getData', ['23','35'], val => this.arrString = val)
```

### border-radius
border-radius : 50px 50px 50px 50px / 50px 50px 50px 50px;

 　　“/”前的四个数值表示圆角的水平半径，后面四个值表示圆角的垂直半径


### 字符宽度
控制字符宽度相等
```
p{
  text-align: justify;
  text-align-last: justify;
}
```