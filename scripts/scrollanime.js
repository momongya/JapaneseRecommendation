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
        if (window.matchMedia( "(max-width: 768px)" ).matches) {
            var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
            if (tt > yy - hh){
                $(this).addClass('done');
            }
        }
        if (window.matchMedia( "(min-width: 768px)" ).matches) {
            var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する
            if (tt > yy - hh){
                $(this).addClass('done');
            }
        }
    });

    // しおりが傾くアニメーション (右側たち)
    $('.salaryspchara').each(function(){
        var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(7deg)" } );
            $(this).css( { "transition-timing-function" : "cubic-bezier(.83,0,.22,1)" } );
        }
    });
    $('.nursespimg').each(function(){
        var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(7deg)" } );
            $(this).css( { "transition-timing-function" : "cubic-bezier(.83,0,.22,1)" } );
        }
    });
    $('.busgirlspchara').each(function(){
        var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(7deg)" } );
            $(this).css( { "transition-timing-function" : "cubic-bezier(.83,0,.22,1)" } );
        }
    });

    // しおりが傾くアニメーション (左側たち)
    $('.salaryspimg').each(function(){
        var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(-7deg)" } );
            $(this).css( { "transition-timing-function" : "cubic-bezier(.83,0,.22,1)" } );
        }
    });
    $('.nursespchara').each(function(){
        var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(-7deg)" } );
            $(this).css( { "transition-timing-function" : "cubic-bezier(.83,0,.22,1)" } );
        }
    });
    $('.busgirlspimg').each(function(){
        var yy = $(this).offset().top+hh/2;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).css( { transform: "rotate(-7deg)" } );
            $(this).css( { "transition-timing-function" : "cubic-bezier(.83,0,.22,1)" } );
        }
    });
}
