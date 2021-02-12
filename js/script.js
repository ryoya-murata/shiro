$(function(){
    $('a[href^="#"]').click(function(){　　                                               
        var speed = 800;　　　　                                                       
        var adjust = $('header').innerHeight();                                       
        var href= $(this).attr("href");　　　                                         
        var target = $(href == "#" ? 'html' : href);                                 
        var position = target.offset().top;　                                        
        $("html, body").animate({scrollTop:position - adjust}, speed, "swing");    　
        return false;
      });
});

      $(function () {
        // クリック時の動作
        $('.hamberger__line-wrapper').on('click', function() {
            var scrollpos;
    
            // メニューを閉じる
            if($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('.hamberger-menu').removeClass('open');
    
    
            // メニューを開く
            } else {
                $(this).addClass('open');
                $('.hamberger-menu').addClass('open');
            }
        });
    });
    

    $(function(){
        $(window).scroll(function (){
          $(".js-hide").each(function(){//.js-hideクラスに実行
            var position = $(this).offset().top;//.js-hideの表示位置を取得
            var scroll = $(window).scrollTop();//現在のスクロール位置を取得
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight/2){
                $(this).addClass('js-show');
            } 
          });
        });
      });