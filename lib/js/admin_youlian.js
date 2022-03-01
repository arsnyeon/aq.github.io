function youq() {
    var res = xinxi('https://110.api.xudounet.com/youlian/lis/api').data;
    /* console.log(res); */
    if (Array.isArray(res)) {
        var art = template('you-list', res);
        $('.you-ul').html(art);
        return res;
    } else {
        return ;
    };
    /* var data = res.reverse();  */ /* 获取的数据数组倒叙 */
};

var you = setInterval(function () {
    shuyou = youq();
}, 10);

setTimeout(function () {
    clearInterval(you);
}, 202);


/* 点击提交按钮的淡季事件 */
function butty(pd, uid) {
    /* console.log(pd+'88'+uid); */
    if (pd == 1) {
        var url = 'https://110.api.xudounet.com/youlian/newpost/api';
    } else if (pd == 2) {
        var url = 'https://110.api.xudounet.com/youlian/postgai/api';
    } else if (pd == 3) {
        var url = 'https://110.api.xudounet.com/youlian/delete/api';
    } else {
        alert('未知错误');
        ljz(false);
    };

    var works = getuser();
    works.img = $('.li-imgurl').val();
    works.gourl = $('.li-urlurl').val();
    works.title = $('.li-youjs').val();
    works.deposit = $('.li-shangyj').val();
    works.uid = uid;
    var newy = xinxi(url, works);
    if(newy.status == '0'){
        ljz(false);
        alert('操作成功啦 QYQ');
        history.go(0);
    }else{
        ljz(false);
        alert('系统错误' + newy.status);
    };
    /* setTimeout(function () {
        alert(newy)
        ljz(false)
        history.go(0)
    }, 1000) */
};

var postlx = 1;
/* 点击新增友链按钮 */
$('.new-list').on('click', function () {
    $('.li-imgurl').val('');
    $('.li-urlurl').val('');
    $('.li-shangyj').val('');
    $('.li-youjs').val('');
    $('.title-e').html('新加友链');
    $('.but-true').attr('uid', $(this).attr('uid'));
    $('.but-true').attr('lx', '1');
    $('.post-xiugai').show();

});
/* 点击修改友链按钮 */
$('.you-ul').on('click', '.you-list .but-list .list-post', function () {
 /*    console.log('修改'); */
    $('.title-e').html('修改信息');
    $('.li-imgurl').val(shuyou[$(this).attr('uid')].img);
    $('.li-urlurl').val(shuyou[$(this).attr('uid')].url);
    $('.li-youjs').val(shuyou[$(this).attr('uid')].title);
    $('.li-shangyj').val(shuyou[$(this).attr('uid')].deposit);
    $('.but-true').attr('uid', $(this).attr('uid'));
    $('.but-true').attr('lx', '2');
    $('.post-xiugai').show();

});

$('.but-true').on('click', function () {
    ljz(true);
    butty($(this).attr('lx'), $(this).attr('uid'));
});

$('.you-ul').on('click', '.you-list .but-list .list-delete', function () {
    ljz(true);

    butty(3, $(this).attr('uid'));
});
/* 点击再想想时关闭弹窗 */
$('.but-false').on('click', function () {
    $('.post-xiugai').hide();
});


function ljz(r) {
    if (r) {
        $('.jztc').show();
    } else {
        $('.jztc').hide();
    }
};