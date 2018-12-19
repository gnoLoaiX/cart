##  购物车宣传（用到的场景：宣传页，活动页，h5宣传页）

#### 全屏切换效果
> 通过鼠标的滚轮 切换全屏页面

- 使用fullpage来完成

- 使用动画 （js实现动画，css3实现动画）
    + 一个是帧动画  一个是补间动画
    + 什么是帧动画：使用定时器 每隔一段时间 更改当前元素的状态 
    + 什么是补间动画：过渡(加过渡只要状态发生改变产出动画) 动画（多个节点来控制动画） 性能会更好
    + 在支持H5C3的的浏览器尽可能使用css3动画 （移动端开发）
    + transition  animation
    + transition  组合写法（transition:all 1s linear 1s）
      的拆分写法 transition-property  transition-duration transition-timing-function transition-delay
