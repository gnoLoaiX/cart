/**
 * Created by 20189 on 2018/11/19.
 */
$(function () {
  $(".container").fullpage({
    /*配置参数*/
    sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
    //内容是否垂直居中
    verticalCentered: false,
    //是否显示导航
    navigation: true,
    //滚动到某一屏后的回调函数
    afterLoad: function (anchorLink, index) {
      /*index 序号 1开始  当前屏的序号*/
      $(".section").eq(index - 1).addClass("now");
    },
    // 页面初始化完成后的回调函数
    /*在组件初始完毕或者插件内容渲染完毕*/
    afterRender: function () {
      $(".more").on("click", function () {
        $.fn.fullpage.moveSectionDown();
      });
      $('.screen04 .cart').on('transitionend', function () {
        $('.screen04 .address').show().find('img:last').fadeIn(1700);
        $('.screen04 .text').addClass('show').show().find('img:last').fadeIn(1000);
      });

      //  第八屏功能
      /*1.手要跟着鼠标移动*/
      $('.screen08').on('mousemove', function (e) {
        $(this).find('.hand').css({
          left: e.clientX - 190,
          top: e.clientY - 40,
        });
      }).find('.again').on('click', function () {
        /*2.跳回第一页*/
        //jQuery封装插件 的入口方法
        $.fn.fullpage.moveTo(1);
        /*2.1 重新播放动画 怎么播放的 就怎么删除*/
        /*2.1.1 加 now、leaved、show的类*/
        $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
        /*2.1.2 加css属性  后果：加一个style属性*/
        /*2.1.3 用jquery方法  show() fadeIn() 后果：加一个style属性*/
        //只能找content控制的内容、别的都是fullPages插件控制的 你不能删除掉它  [style] 属性选择器
        $('.content [style]').removeAttr('style');
      });
    },
    /*离开某一个页面的时候触发*/
    onLeave: function (index, nextIndex, direction) {
      var currentScreen = $('.section').eq(index - 1);
      //仅仅是有参数还不够 因为可能往上滚动会触发事件
      if (index == 2 && nextIndex == 3) {
        /*当前是从第二页到第三页*/
        currentScreen.addClass('leaved');
      } else if (index == 3 && nextIndex == 4) {
        /*当前是从第三页到第四页*/
        currentScreen.addClass('leaved');
      } else if (index == 5 && nextIndex == 6) {
        /*当前是从第五页到第六页 这里小插曲是给第六屏的注册事件*/
        currentScreen.addClass('leaved');
        $('.screen06 .box').addClass('leaved');
      } else if (index == 6 && nextIndex == 7) {
        /*当前是从第六页到第七页*/
        $('.screen07 .star').addClass('show');
        $('.screen07 .text').addClass('show');
        //控制延时的时间 css是秒  jQuery是毫秒
        $('.screen07 .star img').each(function (i, item) {
          $(this).css('transition-delay', i * 0.5 + 's');
        });
      }
    },
    /*页面切换的时间 默认是700ms*/
    scrollingSpeed: 1000,


  });
});