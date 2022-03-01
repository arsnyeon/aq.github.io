/* 定义空数组存储图片 */
var zhujuimg = new Array();
var verifyCode = new GVerify({
    id: "yanzhengmap",
    type: "blend"
});
/* 增加图片列表函数 */
function zhengjiaimg(a) {
    var html = $(' <li class="zju-img"><img src="' + a + '" alt="" class="zjuimg"></li>')
    $('.zju').prepend(html);
}

/* 选择文件处理事件 */
$('.zjufile').on('change', function () {
    if (this.value != '') {
        var po = $('.zjufile')[0].files;
        if (po.length <= 0) {
            return alert('请选择文件');
        };
        ljz(true);
        console.log(po[0]);
        var fd = new FormData();
        fd.append('file', po[0]);
        /* 上传文件 */
        $.ajax({
            method: 'post',
            url:'https://110.api.xudounet.com/user/img/api/uploadimg',
            data: fd,
            contentType: false,
            processData: false,
            success: function (res) {
                console.log(res);
                if (res.data) {
                    /*    $('.zjuimg')[0].src = res.url */
                    zhujuimg.push(res.data)
                    /*      console.log(zhujuimg); */
                    zhengjiaimg(res.data);
                    ljz(false)

                };
            }
        });
    };
});



/* 提交按钮处理函数 */
$('.but').on('click', function () {
    var res = verifyCode.validate($('.li-yanzheng').val());
    if (res) {
/*         alert("验证通过"); */
    } else {
        alert("验证码错误");
        return false;
    }
    ljz(true);
    var qq = $('.li-qq').val();
    var wx = $('.li-wx').val();
    var sj = $('.li-sj').val();
    var xx = $('.li-xx').val();
    var zplx = $('.li-zplx').val();
    var money = $('.li-money').val();

    if (qq.length == 0 && wx.length == 0 && sj.length == 0) {
        ljz(false);
        return alert('请填写至少一种联系方式');

    };
    if (xx.length < 9) {
        ljz(false);
        return alert('请填写10个字以上的详细情况');
    };
    if (zhujuimg.length < 3) {
        ljz(false);
        return alert('请上传至少3张证据截图');
    };
    if (zhujuimg.length > 7) {
        ljz(false);
        return alert('最多上传6张证据截图');
    };

    /* 获取提交时的时间 */
    var time = new Date();
    var posttime = time.toLocaleDateString().split("/").join('.');
    
    var tpimg = JSON.stringify(zhujuimg);
    var paizi = new Object();
    paizi.qq = qq;
    paizi.wx = wx;
    paizi.ipone = sj;
    paizi.xx = xx;
    paizi.img = tpimg;
    paizi.zplx = zplx
    paizi.money = money;
    paizi.time = posttime;

    var jubao = xinxi('https://110.api.xudounet.com/jubao/post/api', paizi);
    if(jubao.status == '0'){
        ljz(false);
        alert('提交成功 等待审核');
        history.go(0);
    }
})


function ljz(r) {
    if (r) {
        $('.jztc').show();
    } else {
        $('.jztc').hide();
    }
};


$('.li-money').bind('input porpertychange', function (e) {
    /* $(this).val($(this).val() + '.00'); */
})