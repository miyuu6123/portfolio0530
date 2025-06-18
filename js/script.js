$(function() {
    //ナビゲーションをクリック
    $('a[href*="#"]:not([href="#"])').click(function() {
        //移動先のコンテンツの位置を取得
        var target = $($(this).attr("href")).offset().top;

        //70px減らす
        target -= 70;

        //コンテンツへスクロール
        $("html, body").animate({ scrollTop: target }, 500);

        return false;
    });
});


