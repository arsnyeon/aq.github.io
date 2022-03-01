function homeq() {
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
        for (var i = 1; i < 20; i++) {
            if (si > data.length) {
                $('.bot').hide();   /* 隐藏加载更多按钮 */
                $('.ddl').show();   /* 显示到底啦 */
                return false;
            };

            pdhmcl(data[si]); /* 调用判断函数 */

            data[si].id = gg;  /* 向当前数组内增加id键值对 */
            gg--;
            ins.push(data[si]);
            si++;

            /*  *//* 执行渲染到页面 */
            if (gg <= -1) {
                $('.bot').hide();   /* 隐藏加载更多按钮 */
                $('.ddl').show();   /* 显示到底啦 */
                return false;
            }
            var art = template('list', ins);
            $('.guan-list').html(art);


        };
    };
    jzs();
    $('.bot').on('click', function () {  /* 加载更多单机事件 */
       /*  if (ljz(true)) { return false; } */
        jzs();
    });
    $('.list-delete').on('click',function(){
        ljz(true);
        var uid = $(this).parent().parent().attr('uid');
        var postw = getuser();
        postw.uid = uid;
        postw.lx = '1';
        /* console.log(postw); */
        var guan = xinxi('https://110.api.xudounet.com/admin/guanli/api',postw);
        if(guan.status == '0'){
            ljz(false);
            alert('删除成功');
            history.go(0);
        }
    })


    $('.list-zj').on('click',function(){
        if(!$(this).attr('uid')){
            return alert('无证据');
        }
   /*      console.log('渔鸥证据'); */
        var uid = $(this).parent().parent().attr('uid');
        location.href = './zhengju.html?uid=' + uid;
    });
    

}
var opo = setInterval(function () {
    homeq();
}, 100);

setTimeout(function () {
    clearInterval(opo);
}, 202);
/* 
$('.list-delete').on('click',function(){
    ljz(true)
    var uid = $(this).parent().parent().attr('uid')
    var postw = getuser()
    postw.uid = uid
    postw.lx = '1'
    console.log(postw);
    var guan = xinxi('https://110.api.xudounet.com/admin/guanli/api',postw).msg;
    setTimeout(function () {
        alert(guan)
        ljz(false)
        history.go(0)
    }, 1000)
}) */



function ljz(r) {
    if (r) {
        $('.jztc').show();
    } else {
        $('.jztc').hide();
    }
};