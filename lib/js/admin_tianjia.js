function postad(postid) {
    $('.but').on('click', function () {
        ljz(true);
        var time = new Date();
        var posttime = time.toLocaleDateString().split("/").join('.');
        var getpost = getuser();
        getpost.rztime = posttime;
        getpost.jbtime = posttime;
        getpost.postm = postid;
        getpost.qq = $('.li-qq').val();
        getpost.wx = $('.li-wx').val();
        getpost.sj = $('.li-sj').val();

        if(!postid && getpost.qq.length == 0 && getpost.wx.length == 0 && getpost.sj.length == 0){
            alert('你猜猜哪里出错了');
        };
        if (postid == 3) {
            getpost.zt = $('.list-zt').val();
     /*        getpost.zt = '4' */
            getpost.rzyj = $('.li-rzyj').val();
            if (getpost.rzyj.length < 1 && getpost.zt.length == 0) {
                ljz(false);
                return alert('请把信息填写完整好不好嘛');
            };
        };
        if(postid == 2){
            getpost.zplx = $('.li-zplx').val();
            if (getpost.zplx.length < 2) {
                ljz(false);
                return alert('请把信息填写完整好不好嘛');
            };
        };
        if(postid == 1){
            getpost.zplx = $('.li-zplx').val();
            getpost.money = $('.li-money').val();
            if (getpost.zplx.length < 2 && getpost.money.length < 1) {
                ljz(false);
                return alert('请把信息填写完整好不好嘛');
            };
        };

 /*        console.log(getpost); */

        var newpost = xinxi('https://110.api.xudounet.com/admin/tianjia/api', getpost);
        if(newpost.status == '0'){
            ljz(false);
            alert('发布成功啦 QYQ');
            history.go(0);
        };
        /* setTimeout(function () {
            ljz(false);
            alert('发布成功');
            history.go(0);
        }, 2000); */
    });


    function ljz(r) {
        if (r) {
            $('.jztc').show();
        } else {
            $('.jztc').hide();
        }
    };
}
