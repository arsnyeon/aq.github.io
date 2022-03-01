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

    var zjimgm = JSON.parse(ant.sheng_img);
    var artt = template('list-m', ant);
    $('.k-ul').html(artt);
    var art = template('imglisy', zjimgm);
    $('.zjjt').html(art);
    $('.xjs-sp').html(ant.sheng_xx);
    /* 设置图片点击放大 */
    $('.zj-img').on('click', function () {
        $('.zj-img-da')[0].src = $(this).attr('src');
        $('.zj-da-img').show();
    });
    $('.da-img-x-i').on('click', function () {
        $('.zj-da-img').hide();
    });

};
function parseUrl() {      /* 获取连接后的数据函数 */
    var url = location.href;
    var i = url.indexOf('?');
    if (i == -1) return;
    var querystr = url.substr(i + 1);
    var arr1 = querystr.split('&');
    var arr2 = new Object();
    for (i in arr1) {
        var ta = arr1[i].split('=');
        arr2[ta[0]] = ta[1];
    };
    return arr2;
};
var workd = getuser();
workd.postid = parseUrl().uid;
/* console.log(workd); */
/* for (var i = 1; i < 3; i++) {
    var ant = xinxi('https://110.api.xudounet.com/admin/zhengju/api', workd).data;
    if (!ant.sheng_img) {
        $('.panjue').hide();
        $('.k-ul').html('无证据')
    } else {
        shengq(ant);
        
    }
} */
var ant = xinxi('https://110.api.xudounet.com/admin/zhengju/api', workd).data;
if (!ant.sheng_img) {
    $('.panjue').hide();
    $('.k-ul').html('无证据');
} else {
    shengq(ant);

}

function ljz(r) {
    if (r) {
        $('.jztc').show();
    } else {
        $('.jztc').hide();
    }
};