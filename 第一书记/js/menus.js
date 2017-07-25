// JavaScript Document
var scene = document.getElementById('topwave');
var parallax = new Parallax(scene);
$('.sub-nav-li .sub-nav-a').closest('.sub-nav-li').find('ul.collapse').collapse('hide');
$('.sub-nav-a[data-toggle="collapse"]').on('click',function(){
  $('.sub-nav-li .sub-nav-a').closest('.sub-nav-li').find('ul.collapse').collapse('hide');
  $(this).closest('.sub-nav-li').find('ul.collapse').collapse('toggle');
})
$('.minify-toggle').on('click',function(){
  $('body').toggleClass('layout-minify')
})

// 计算并设置三级菜单的上边距
function thrlv_nav_mt(e){
    var eY = getTop(e);
    var divE = $(e).children("div");    // 获取第三级菜单的div元素
    var ulE = $(divE).children("ul");   // 获取div元素的子元素ul
    var mt = eY - 126;
    if(mt < 0){
        mt = 0;
    }
    $(ulE).css("margin-top",mt);        // 动态设置三级菜单的上边距
}

// 获取元素的纵坐标 
function getTop(e){ 
    var offset=e.offsetTop; 
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent); 
    return offset; 
}