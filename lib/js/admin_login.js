/* 获取本地缓存函数 */
function getDate() {
  return JSON.parse(localStorage.getItem('xdnet_admin')) || {};
};

$('.userin').val(getDate().user);
$('.passin').val(getDate().pass);
var shujson = xinxi('https://110.api.xudounet.com/user/shu/api').data;
/* 注册按钮按下事件 */
$('.regbut').on('click', function () {
  window.location.href = 'https://110.xudounet.com/anyshou/';
})

function ljz(r) {
  if (r) {
    $('.jztc').show();
  } else {
    $('.jztc').hide();
  };
};




/* 登录按钮按下事件 */
$('.loginbut').on('click', function () {
  if($(this).attr('idlx') == 'no'){
    return alert('您还没有注册云端后台 请前往注册并添加域名即可使用')
  }
  ljz(true);
  var data = new Object();
  data.user = $('.userin').val();
  data.pass = $('.passin').val();
  data.url = window.location.host;
  var post = xinxi('https://110.api.xudounet.com/api/admin/login', data)
  if (post.status == 0) {
    var shu = JSON.stringify(data)
    alert('登录成功')
    ljz(false)
    localStorage.setItem('xdnet_admin', shu)
    window.location.href = '../index.html';
  } else if (post.status == 10004) {
    ljz(false);
    alert('该账号未授权该网页');
  } else if (post.status == 10002) {
    ljz(false);
    alert('该账号不存在');
  } else if (post.status == 10003) {
    ljz(false);
    alert('账号或密码错误');
  } else {
    ljz(false);
    alert('参数错误');
  };
});

