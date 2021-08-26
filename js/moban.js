$(function(){
  
  // 索引
  var b = 1;
  
  // 动画函数
  var banner = function(){
    // if语句判断动画是否运行一周 如果运行一周就返回头部
    if (b<5) {
      $('.main_content').stop(true,true).animate({top:'-=100vh'},1000);
      b = b+1;
    } else if(b>4){
      $('.main_content').stop(true,true).animate({top:'+=400vh'},1000);
      b = 1;
    }
  }
  
  // 控制底部小点颜色的函数
  var diancolor = function(){
    var c1 = b-1;
    // 把所有小点设置成暗色
    $('.dian li').css('background','rgba(1,1,1,1)');
    // 设置当前点击的小点为白色
    $(".dian li:eq("+c1+")").css('background','rgba(255,255,255,.6)');
  }
  
  
  // NEXt按钮 单机事件
  $('.next').click(function(){
    // 调用动画函数
    banner();
    // 调用底部小点颜色变化函数
    diancolor();
  })
  
  // // 设置计时器 实现自动轮播
  // var time = setInterval(function(){
  //   // 调用动画函数
  //   banner();
  //   // 调用底部小点颜色变化函数
  //   diancolor();
  // // 轮播速度 单位毫秒
  // }, 6000)
  
  // 底部小点点击事件
  $('.dian li').click(function(){
    // 把所有小点设置成暗色
    $('.dian li').css('background','rgba(1,1,1,1)');
    // 设置当前点击的小点为白色
    $(this).css('background','rgba(255,255,255,.6)');
    var ix = $(this).index()+1;
    b = ix;
    h_01 = (b-1)*100;
    $('.main_content').stop().animate({top: -h_01+'vh'},1000)
  })
  
  // 导航栏悬浮特效
  // 鼠标悬浮上时
  $('.nav_option li').mouseover(function(){
    $('a',this).css({'color':'white','transition':'all .7s'});
  // 鼠标离开时
  }).mouseout(function(){
    $('a',this).css({'color':'rgba(1,1,1,.6)','transition':'all .7s'});
  })
  
})
