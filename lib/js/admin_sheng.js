/* 简单的将空白改为汉子无的函数 */
function qukong(a) {
    if (a == '') {
        return a = '无';
    };
    return a;
};
/* 获取待审核数据 */
function shengq(ant) {
    $('.panjue').show();
    ant.qq = qukong(ant.qq);
    ant.wx = qukong(ant.wx);
    ant.ipone = qukong(ant.ipone);
    ant.zplx = qukong(ant.zplx);
    /* 调用art函数渲染页面 */

    var zjimgm = JSON.parse(ant.img);
    var artt = template('list-m', ant);
    $('.k-ul').html(artt);
    var art = template('imglisy', zjimgm);
    $('.zjjt').html(art);
    $('.xjs-sp').html(ant.xx);
    /* 设置图片点击放大 */
    $('.zj-img').on('click', function () {
        $('.zj-img-da')[0].src = $(this).attr('src');
        $('.zj-da-img').show();
    })
    $('.da-img-x-i').on('click', function () {
        $('.zj-da-img').hide();
    })

}
/* 
for (var i = 1; i < 3; i++) {
    var ant = xinxi('https://110.api.xudounet.com/api/admin/shenglist', getuser()).data;
    if (ant == '无数据') {
        $('.panjue').hide();
        $('.k-ul').html('无待审核')
    } else {
        shengq(ant);
    }
} */
var ant = xinxi('https://110.api.xudounet.com/api/admin/shenglist', getuser()).data;
if (ant == '无数据') {
    $('.panjue').hide();
    $('.k-ul').html('无待审核');
} else {
    shengq(ant);
};

/* 同意和拒绝申请处理函数 */
$('.nobut').on('click', function () {
    ljz(true);
    var shuz = getuser();
    shuz.uid = '0';
    shuz.zts = 'false';
    var nobut = xinxi('https://110.api.xudounet.com/admin/shenghe/api', shuz)
    if (nobut.status == '0') {
        ljz(false);
        alert('操作成功');
        history.go(0);
    };
});
$('.yesbut').on('click', function () {
    ljz(true);
    var shuz = getuser();
    shuz.uid = '0';
    shuz.zts = 'true';
    var yesbut = xinxi('https://110.api.xudounet.com/admin/shenghe/api', shuz);
    if (yesbut.status == '0') {
        ljz(false);
        alert('发布成功');
        history.go(0);
    };
});



function ljz(r) {
    if (r) {
        $('.jztc').show();
    } else {
        $('.jztc').hide();
    }
};