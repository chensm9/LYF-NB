var getBrowserInfo = function () {
    var info = {};
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        info.os = "ios";
    } else if (/(Android)/i.test(navigator.userAgent)) {
        info.os = "android";
    } else if (/(Windows)/i.test(navigator.userAgent)) {
        info.os = "windows";
    } else {
        info.os = "unknown";
    }
    var ua = navigator.userAgent.toLowerCase();
    //alert(ua)
    if (ua.indexOf('msie') > -1) info.browser = 'ie';
    else if (ua.indexOf('firefox') > -1) info.browser = 'firefox';
    else if (ua.indexOf('safari') > -1) info.browser = 'safari';
    else if (ua.indexOf('chrome') > -1) info.browser = 'chrome';
    else if (ua.indexOf('opera') > -1) info.browser = 'opera';
    return info;
}
var browserInfo = getBrowserInfo();
var defaultWidth = 640;
var viewPixel = devicePixelRatio || 1;
var densitydpi = defaultWidth / screen.width * viewPixel * 160;
var metaHtml = '';
if (browserInfo.browser == 'firefox') {
    var scripts = document.getElementsByTagName('script');
    var script = scripts[scripts.length - 1];
    var isPersentage = script.getAttribute('isPersentage') == 'true';
    metaHtml = '<meta name="viewport" content="width=' + (isPersentage ? defaultWidth : 'device-width') + ',target-densitydpi=320,initial-scale=0.5, user-scalable=no" />';
} else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    metaHtml = '<meta name="viewport" content="width=' + defaultWidth + ',user-scalable=no">';
} else {
    metaHtml = '<meta name="viewport" content="width=' + defaultWidth + ',target-densitydpi=' + densitydpi + ',user-scalable=no">';
}
metaHtml = unescape(escape(metaHtml));
document.write(metaHtml);

setTimeout(go, 100); 

function go(){ 
    if ($("#cel_70").css("opacity") != 1 ) {
        setTimeout(go, 500);
    } else {
        setTimeout("$('#kaichangdonghua').fadeOut(2000);", 5000);
        setTimeout(display, 7000);
    }
} 

function display() {
    $('#kaichangdonghua').css('display','none');
    $('#wrapper').css('display','block');
    $("#wrapper").css("opacity", 1);
    $("#wrapper").fadeOut(0);
    $('#wrapper').fadeIn(2000);
    $("#back_a").css("opacity", 1);
    $("#back_a").fadeOut(0);
    $('#back_a').fadeIn(2000);
}