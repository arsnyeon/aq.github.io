$('.title').val(any_title().title);
$('.title_f').val(any_title().title_f);
$('.conpy').val(any_title().conpy);
$('.conpy_href').val(any_title().conpy_href);
$('.beianm').val(any_title().beianm);


$('.gaibut').on('click', function () {
    function getDate() {
        return JSON.parse(localStorage.getItem('xdnet_admin')) || {};
    };
    var posts = new Object();
    posts.user = getDate().user;
    posts.pass = getDate().pass;
    posts.title = $('.title').val();
    posts.title_f = $('.title_f').val();
    posts.conpy = $('.conpy').val();
    posts.conpy_href = $('.conpy_href').val();
    posts.beianm = $('.beianm').val();

    var postfun = xinxi('https://110.api.xudounet.com/user/title/any/post/api',posts);
    if(postfun.status == 0){
        alert('修改成功');
        history.go(0);
    }else{
        console.log('错误' + postfun.status);
    }
})