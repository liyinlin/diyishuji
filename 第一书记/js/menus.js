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

// ���㲢���������˵����ϱ߾�
function thrlv_nav_mt(e){
    var eY = getTop(e);
    var divE = $(e).children("div");    // ��ȡ�������˵���divԪ��
    var ulE = $(divE).children("ul");   // ��ȡdivԪ�ص���Ԫ��ul
    var mt = eY - 126;
    if(mt < 0){
        mt = 0;
    }
    $(ulE).css("margin-top",mt);        // ��̬���������˵����ϱ߾�
}

// ��ȡԪ�ص������� 
function getTop(e){ 
    var offset=e.offsetTop; 
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent); 
    return offset; 
}