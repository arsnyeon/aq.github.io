/* 获取本地缓存函数 */
function getDate() {
    return JSON.parse(localStorage.getItem('xdnet_admin')) || {}
};

$('.nav-box').on('click',function(){
    $('.admin-title').html($(this).attr('titles'));
});
$('.nav-tab').on('click',function(){
    var ansys = any_title();
    $('.admin-title').html( ansys.title + ' - 后台管理系统');
});
/* 尝试自动登录函数 */
 function login() {
    var data = new Object();
    data.user = getDate().user;
    data.pass = getDate().pass;
    data.url = window.location.host;
    var shujson = xinxi('https://110.api.xudounet.com/api/admin/login', data).status;
    if (shujson !== 0) {
        alert('您的密码或域名已修改 请重新登录');
        window.location.replace('./temp/login.html');
    } else {
        $('.q').show();
    }
}
if (getDate().user) {
    login();
} else {
    window.location.replace('./temp/login.html');
} 
$(function () {
    let navflag = false;
    $('.nav-tab').click(function () {
        $(this).siblings().each(function () {
            $(this).removeClass('a_active');
            // $(this).removeClass('a_active');
            $(this).find('.nav-box').css('height', '0')
            //关闭右侧箭头
            if ($(this).attr('class').indexOf('nav-ul') != -1) {
                $(this).find('.bx-chevron-right').css('transform', 'rotateZ(0deg)')
                $(this).find('.bx-chevron-right').css('transition', 'all .5s')
                $(this).removeClass('nav-show')
                // $(this).find('div').removeClass('nav-box')
            }
        })
        //当前选中
        $(this).addClass('a_active')
        $(this).find('.li-a').addClass('active')
        // 打开右侧箭头
        $(this).find('.bx-chevron-right').css('transform', 'rotateZ(90deg)')
        $(this).find('.bx-chevron-right').css('transition', 'all .5s')
        $(this).addClass('nav-show')
        // $(this).find('div').addClass('nav-box')
    })
    /* 二级菜单a点击事件 */
    $(".li-a-a").click(function () {
        $(".li-a-a").each(function () {
            $(this).removeClass('active-li-a');
        })
        $(this).addClass('active-li-a');
    })

})
const vue = new Vue({
    el: '#app',
    data: {
        navLeftFlag: false
    },
    methods: {
        isShowLeft() {
            if (this.navLeftFlag) {
                this.$refs.navRight.style.paddingLeft = '0px'
                this.$refs.cPage.style.left = '0px';
                this.navLeftFlag = false;
                // this.$refs.navLeft.style.width = '0px';
                // setTimeout(()=>{
                // 	this.navLeftFlag = false;
                // },200)
            } else {
                this.$refs.navRight.style.paddingLeft = '240px';
                this.$refs.cPage.style.left = '240px';
                this.navLeftFlag = true;
                // this.$refs.navLeft.style.width = '240px';
                // setTimeout(()=>{
                // 	this.navLeftFlag = true;
                // },200)
            }
        }
    }
})
