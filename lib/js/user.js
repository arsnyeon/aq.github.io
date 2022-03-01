function getuser() {
    var less = JSON.parse(localStorage.getItem('xdnet_admin')) || {};
    var usern = {};
    usern.user = less.user;
    usern.pass = less.pass;
    usern.url = window.location.host
    return usern;
}