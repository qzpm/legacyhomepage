$(function(){
    $('body').on('contextmenu',function(e){
        alert("右クリック禁止!!!");
        return false;
    });
});

$(function(){
    $('html').mousemove(function(e){
        const dx = e.pageX;
        $('#stalker').css('top', dy - 50).css('left', dx + 50);
    });
});

$(function(){
    var i = 0;
    const colorset = ['black', 'blue', 'green', 'yellow'];
    const title = $('#title');
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
