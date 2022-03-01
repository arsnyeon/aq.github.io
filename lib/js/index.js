$('.if').css('height', window.screen.height - 100)
$('.bot-nav-list').on('click', function () {
    var ansys = any_title();
    console.log(ansys);
    $('title').html(ansys.title +  " - " + $(this).attr('title') + " - " + ansys.title_f);
    if ($(this).attr('tc')) {
        var month = Math.ceil(Math.random()*1000000)
        var url = $(this).attr('url') + '?' + month;
       /*  console.log(url); */
        $('.iframe').prop('src', url);
    } else {
        window.open($(this).attr('url'));
        $('.iframe').prop('src', '/home/home.html');
    }
});
