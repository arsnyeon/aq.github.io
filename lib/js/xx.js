



/* var shujson = ''; */
/* 调用shu.js内的xinxi函数的ajax的get请求获取后端json数据 */
var shujson = xinxi('https://110.api.xudounet.com/user/shu/api').data



/*  var data = res.reverse();  */ /* 获取的数据数组倒叙 */

/* 将档案元素上升到指定位置 */
setTimeout(function () {
    $('.yyd').css('bottom', '0px');
    setTimeout(function () {
        $('.tb').show()
        setTimeout(function () {
            $('.tb').css('width', '190px')
        }, 500)
    }, 2500)
}, 2000)


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

function time() {    /* 转换时间函数 */
    var ti = new Date();
    var y = ti.getFullYear()
    var m = ti.getMonth() + 1
    var d = ti.getDate()
    if (m < 10) {
        m = '0' + m
    }
    if (d < 10) {
        d = '0' + d
    }
    return y + '年' + m + '月' + d + '日';
}

function pdsfyqwi(haoma) {  /* 判断是否有qq/微信/手机号码并将没有的相关列表隐藏函数 */

    if (!haoma.wx) {
        $('.wx').hide();
    }
    if (!haoma.ipone) {
        $('.ipone').hide();
    }
    if (!haoma.qq) {
        $('.qq').hide();
        $('.top-tx')[0].src = '/lib/image/tx.png';
    } else {
        $('.top-tx')[0].src = 'http://q1.qlogo.cn/g?b=qq&nk=' + shu.qq + '&s=640&w=' + Math.floor(Math.random() * 10000000);  /* 获取QQ头像 */
        /* return shu.name = xinxi('https://api.usuuu.com/qq/' + haoma.qq).data.name;   *//* 获取qq昵称 */
    }
};

var url = parseUrl()
if (url.jq) {   /* 判断如果jq等于true，则是搜索到的数据执行以下操作 */
    var shu = shujson[url.id]
    shu.time = time();
    localStorage.setItem('xx_one_shu',JSON.stringify(shu))
    /* 调用shu.js内的xinxi函数的ajax的get请求获取qq昵称 */
    pdsfyqwi(shu);


    var artt = template('list-m', shu)
    $('.k-ul').html(artt)
    if (shu.zt == 2 || shu.zt == 1) {
        $('.rz').hide();
    }
    if (shu.zt >= 3) {
        $('.jb').hide();
    }
    if (shu.zt == 2) {
        $('.rz').hide();
        $('.jb').hide();
        $('.ys').show();
    }

    pdsfyqwi(shu);
    var imgurl = '../lib/image/' + shu.zt + '.png';
    $('.tb')[0].src = imgurl;
} else {

    /* 如果数据库没有记录 则执行以下代码 */
    var shu = {  /* 定义一个基础个人数据 */
        "qq": "",
        "wx": "",
        "ipone": "",
        "jbcs": "0",
        "zt": "3",
        "xydj": "E",
        "rzdj": "BC",
        "rzyj": "0.00",
        "rztime": "2022年01月01日",
        "money": "0",
        "zplx": "无",
        "jbtime": "2022年01月01日",
        "time": "2022年01月01日",
        "wordl":''
    };
    shu.time = time();

    /* 判断搜索类型并将搜索的号码输入到页面 */
    if (url.ls == 'qq') {
        shu.qq = url.m;
    } else if (url.ls == 'wx') {
        shu.wx = url.m;
    } else {
        shu.ipone = url.m;
    }


    /*     $('.top-tx')[0].src = 'http://q1.qlogo.cn/g?b=qq&nk=' + shu.qq + '&s=640&w=' + Math.floor(Math.random() * 10000000);
        shu.name = xinxi('https://api.usuuu.com/qq/' + shu.qq).data.name; */
        pdsfyqwi(shu);
    var artt = template('list-m', shu)
    $('.k-ul').html(artt)
    pdsfyqwi(shu);
    $('.jb').hide();
}
$('.xx_zheng').on('click',function(){
    if(!$(this).attr('uid')){
        return alert('无证据')
    }
    location.href = './xx_zheng.html'
})

function ljz(yo) {
    $('.jztc').show();
    setTimeout(function () {
        $('.jztc').hide();
    }, yo)
};
ljz(2000)




var shus = any_title();
$('.conpy').html(shus.conpy)
$('.conpy').attr('href',shus.conpy_href)