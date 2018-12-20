### 转换
- 缩放 scale
- 位移 translate
- 旋转 rotate
- 倾斜 skew
以上四种转换方式是比较特殊，其实他们都是由 matrix 矩阵 

### 动画速度
- ease  先快后慢 最后非常慢
- linear 匀速
- ease-in 速度越来越快
- ease-out 速度越来越慢
- ease-in-out 速度先快后慢
以上五种动画速度是比较特殊，其实他们都是由 贝塞尔曲线 来的

### 3d转换 translate3d rotate3d
2d转换和3d转换区别：
1.除了多了一个参数表示3d
2.在移动端使用3d转换可以优化性能（如果设备有3d加速引擎 GPU 可以提高性能 ,是2dz转换是无法调用GPU）
