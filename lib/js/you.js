

function youq() {
    var res = xinxi('https://110.api.xudounet.com/youlian/lis/api').data;
    var data = res.reverse();  /* 获取的数据数组倒叙 */
    var art = template('you-list', data);
    $('.you-ul').html(art);
};

var you = setInterval(function () {
    youq();
}, 100);

setTimeout(function () {
    clearInterval(you)
}, 300);



