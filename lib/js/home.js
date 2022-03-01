
var shujson = xinxi('https://110.api.xudounet.com/user/shu/api').data;
var data = shujson.reverse();  /* 获取的数据数组倒叙 */
var ins = [];
var si = 0;
var dsshu = $.extend(true, [], data);
var gg = dsshu.reverse().length - 1;




/* 判断是都有相应的号码并作出处理函数 */
function pdhmcl(haoma) {
    if (!haoma.qq) {
        data[si].toux = '/lib/image/tx.png';
        data[si].qq = '未知';
    } else {
        data[si].toux = 'http://q1.qlogo.cn/g?b=qq&nk=' + data[si].qq + '&s=640&w=' + Math.floor(Math.random() * 10000000);  /* 获取QQ头像 */
    };
    if (!haoma.wx) {
        data[si].wx = '未知';
    };
};


/* 一次加载*个数据函数 */
function jzs() {
    /* 利用for循环一次只加载6个数据 */
    /*      console.log(gg); */
    for (var i = 1; i < 6; i++) {
        if (si > data.length) {
            $('.bot').hide();   /* 隐藏加载更多按钮 */
            $('.ddl').show();  /* 显示到底啦 */
            return false;
        };

        pdhmcl(data[si]); /* 调用判断函数 */

        data[si].id = gg;  /* 向当前数组内增加id键值对 */
        gg--;
        ins.push(data[si]);
        si++

        /*  *//* 执行渲染到页面 */
        if (gg <= -1) {
            $('.bot').hide();   /* 隐藏加载更多按钮 */
            $('.ddl').show();   /* 显示到底啦 */
            return false;
        }
        var art = template('list', ins);
        $('.jl').html(art);

        /* 列表点击事件 */
        $('.jl-list').on('click', function () {
            window.open('/home/xx.html?id=' + $(this).attr('uid') + '&jq=true')  /* 有匹配值则直接携带索引id'跳转 */
        });
    };
};
jzs();

$('.bot').on('click', function () {  /* 加载更多单机事件 */
    jzs();
});

var ls = 'qq';  /* 搜索类型  1：QQ   2：微信  3：电话 */

/* 选择搜索类型 */
$('.ls-list').on('click', function () {
   /*  if (ljz(200, true)) { return false; }; */
    $(this).addClass('ls-list-yx');
    $(this).siblings('li').addClass('ls-list-yx').removeClass('ls-list-yx');
    ls = $(this).attr('uid');
    /*             console.log(ls); */
    if (ls == 'qq') {
        $('.inpu')[0].placeholder = '请输入对方QQ号';   /* 改变搜索框提示文字 */
    } else if (ls == 'wx') {
        $('.inpu')[0].placeholder = '请输入对方微信号';
    } else {
        $('.inpu')[0].placeholder = '请输入对方手机号';
    };
});


/* 搜索单机事件处理 */
$('.but').on('click', function () {
    /* var clh = ljz(1000,true);
    if(clh){return false;} */
    /* if (ljz(1000, true)) { return false; }  */ /* 设置弹窗加载事件/判断是否在微信打开 */
    var ss = $('.inpu').val();
    if (ss.length < 2) { return alert("请认真填写信息"); };  /* 判断输入字符少于5位提示认真填写 */
    if (ls == 'qq') {
        qq(shujson, ss);
    } else if (ls == 'wx') {
        wx(shujson, ss);
    } else if (ls == 'ipone') {
        ipone(shujson, ss);
    } else {
        return alert('服务端错误 - 4402')
    };


    function qq(shujson, ss) {  /* qq号搜索引擎 */
        var shu = shujson.reverse();
        $.each(shu, function (i, n) {
            if (n.qq == ss) {
                window.open('/home/xx.html?id=' + i + '&jq=true');  /* 有匹配值则直接携带索引id'跳转 */
                return false;
            }

            if (shu.length <= i + 1) {
                window.open('/home/xx.html?m=' + ss + '&ls=qq&jg=false');   /* 无匹配值携带类型，数据跳转 */
                return false;
            }
        })
    };
    function wx(shujson, ss) {  /* 微信号搜索引擎 */
        var shu = shujson.reverse();
        $.each(shu, function (i, n) {
            if (n.wx == ss) {
                window.open('/home/xx.html?id=' + i + '&jq=true');
                return false;
            }
            if (shu.length <= i + 1) {
                window.open('/home/xx.html?m=' + ss + '&ls=wx&jg=false');
                return false;
            }
        })
    };
    
    function ipone(shujson, ss) {  /* 手机号搜索引擎 */
        var shu = shujson.reverse();
        $.each(shu, function (i, n) {
            if (n.ipone == ss) {
                window.open('/home/xx.html?id=' + i + '&jq=true');
                return false;
            }
            if (shu.length <= i + 1) {
                window.open('/home/xx.html?m=' + ss + '&ls=ipone&jg=false');
                return false;
            };
        });
    };
});


var shus = any_title();
$('.conpy').html(shus.conpy)
$('.conpy').attr('href',shus.conpy_href)
$('.beian').html(shus.beianm)