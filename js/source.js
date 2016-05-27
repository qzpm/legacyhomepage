$(function() {
  "use strict";

  $('body').on('contextmenu', function() {
    alert("右クリック禁止!!!")
  })

  $('html').mousemove(function(e) {
    const dx = e.pageX
    const dy = e.pageY
    $('.stalker').css('top', dy - 80).css('left', dx + 50)
  })

  $('.test').click(function() {
    $('.enter').css('display', 'none')
    $('.content').css('display', 'flex')
  })

  $(function() {
    let i = 0
    const colorset = ['black', 'blue', 'green', 'yellow']
    const blink = $('.blink')
    setInterval(function() {
      i++
      $('.marquee').css('color', colorset[i % 4])
      if(blink.css('visibility') == 'visible') {
        blink.css('visibility', 'hidden')
      } else {
        blink.css('visibility', 'visible')
      }
    }, 500)
  })
})
