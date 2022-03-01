function user(urls) {
    var object = new Object();
    object.url = urls;
    $.ajax({
        cache: false,
        method: 'post',
        async: false,
        url: urls,
        data: object,
        success: function (res) {
            urlshujsons = res;

        }
    });
    return urlshujsons;
};

function userword() {
    var users = user('https://110.api.xudounet.com/url/api')
    /*   console.log(users); */
    if (users.status == '0') {
        return users.data.user
    } else if (users.status == '10006') {
        $('.wxgzh').show();
        $('.loginbut').css('background-color', '#7e7e7e');
        $('.loginbut').attr('idlx', 'no');
    };
};


function xinxi(url, object) {
    function hoo() {
        if (object) {
            var admin = object;
            admin.user = userword();
        } else {
            var admin = {};
            admin.user = userword();
        }
        $.ajax({
            cache: false,
            method: 'post',
            async: false,
            url: url,
            data: admin,
            success: function (res) {
                urlshujsons = res;
                /* 清理循环提交函数 */
                /* console.log(res); */
                /* console.log(res); */
                clearInterval(hq);
                if (urlshujsons.status == '1001') {
                    return alert('参数错误');
                };
                if (urlshujsons.status == '1002') {
                    return alert('账号不存在');
                };
                if (urlshujsons.status == '1003') {
                    return alert('token错误');
                };
                if (urlshujsons.status == '1004') {
                    window.location.href = 'http://110.xudounet.com/shou.html';
                    clearInterval(hq);
                    return urlshujsons = 'over';
                };
            }
        });
        return urlshujsons;
    };
    var hq = setInterval(hoo, 200)
    var urlshujsons = hoo()
    return urlshujsons;
};