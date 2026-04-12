$(function() {
    $('.js-accordion-title').on('click', function() {
    // 1. クリックされたもの「以外」の開いている中身をすべて閉じる
        $('.js-accordion-title').not(this).next().slideUp(300);
    // 2. クリックされたもの「以外」の openクラスをすべて外す（矢印を元に戻す）
        $('.js-accordion-title').not(this).removeClass('open');
    // 3. 自分自身の「中身」を開閉する
        $(this).next().slideToggle(300);
    // 4. 自分自身に「openクラス」を付け外しする
        $(this).toggleClass('open');
    });
});