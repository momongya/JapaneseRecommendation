//スクロールアニメーション
$(function(){
    load_effect();
    $(window).scroll(function (){
        scroll_effect();
    });
});
 
//ふわっとロード
function load_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.load-fade').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}
 
//ふわっとスクロール
function scroll_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.scroll-up').each(function(){
        var yy = $(this).offset().top+hh/50;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.nursespimg').each(function(){
        var yy = $(this).offset().top+hh/3;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(7deg)" } );
        }
    });
}
