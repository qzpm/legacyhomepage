$(function(){
    $('body').on('contextmenu',function(e){
        alert("�E�N���b�N�֎~!!!");
        return false;
    });
});

$(function(){
    $('html').mousemove(function(e){
        var dx = e.pageX;
        var dy = e.pageY;
        $('.stalker').css('top', dy - 50).css('left', dx + 50);
    });
});

$(function(){
    var i = 0;
    var colorset = ['black', 'blue', 'green', 'yellow'];
    var title = $('#title');
    var blink = $('.blink');
    setInterval(function(){
        i++;
        title.css('color', colorset[i % 4]);
        if(blink.css('visibility') == 'visible') {
            blink.css('visibility', 'hidden');
        } else {
            blink.css('visibility', 'visible');
        }
    },500);
});
