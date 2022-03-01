
function tytc(id, herf, time) {
    $('.' + id).show();
    /* 点击关闭弹窗 */
    $('.tytc-gb').on('click', function () {
        $('.' + id).hide();
    });

    /* 点击点击跳转 */
    $('.' + id + ' .tytc-herf').on('click', function () {
        window.location.href = herf;
    });

    if (time) {  /* 若设置了时间，则在显示后的指定时间关闭弹窗 */
        setTimeout(function () {
            $('.' + id).hide();
        }, time, id)
    } else {};

}