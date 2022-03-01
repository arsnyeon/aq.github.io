function shengq(ant) {
/*     $('.panjue').show(); */
console.log(ant.sheng_img);
    var zjimgm = JSON.parse(ant.sheng_img);
/*     var artt = template('list-m', ant);
    $('.k-ul').html(artt); */
    var art = template('imglisy', zjimgm);
    $('.zjjt').html(art);
    $('.zhengju-p').html(ant.sheng_xx);
    /* 设置图片点击放大 */
    $('.zj-img').on('click', function () {
        $('.zj-img-da')[0].src = $(this).attr('src');
        $('.zj-da-img').show();
    })
    $('.da-img-x-i').on('click', function () {
        $('.zj-da-img').hide();
    })
}
function getDate() {
    return JSON.parse(localStorage.getItem('xx_one_shu')) || {}
}
shengq(getDate())


var shus = any_title();
$('.conpy').html(shus.conpy)
$('.conpy').attr('href',shus.conpy_href)