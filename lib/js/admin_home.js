
var zrs = xinxi('https://110.api.xudounet.com/admin/home/api', getuser());

$('.zrs').html(zrs.data.shus - 1);
$('.dsh').html(zrs.data.shengs);
$('.yls').html(zrs.data.yous);
if($('.banben').attr('uid') == zrs.data.banben){
    $('.banbeng').hide()
}else{
    $('.banbeng').show()
}
$('.banbeng').on('click',function(){
    parent.location.href = 'https://110.xudounet.com/anyshou'
})
