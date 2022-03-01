function any_title() {
    var shu = xinxi('https://110.api.xudounet.com/user/title/any/api').data;
/*     console.log(shu); */
    var ztitle = shu.title + ' - ' + shu.title_f;
    $('title').html(ztitle);
    $('.conpy').html(shu.conpy)
    $('.beian').html(shu.beianma)
    return shu;
}

any_title()