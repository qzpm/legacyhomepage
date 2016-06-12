$(() => {
  "use strict";

  $('body').on('contextmenu', () => alert("右クリック禁止!!!"))

  $('html').mousemove(e => {
    const dx = e.pageX
    const dy = e.pageY
    const stalker = $('.stalker')
    const image_height = stalker.height()
    const image_width = stalker.width()
    const c_width = $('.content').width()
    const c_height = $('.content').height()

    if(c_width <= dx + image_width) {
      stalker.css('left', c_width - image_width)
    } else {
      stalker.css('left', dx + 30)
    }

    if(c_height <= dy + image_height / 2) {
      stalker.css('top', c_height - image_height)
    } else {
      stalker.css('top', dy - image_height / 2)
    }
  })

  $('.door').click(() => {
    $('.enter').css('display', 'none')
    $('.content').css('display', 'flex')
  })

  $(() => {
    let i = 0
    const colorset = ['black', 'blue', 'green', 'yellow']
    const blink = $('.blink')
    const marquee = $('.marquee')
    setInterval(() => {
      marquee.css('color', colorset[i++ % 4])
      if(blink.css('visibility') == 'visible') {
        blink.css('visibility', 'hidden')
      } else {
        blink.css('visibility', 'visible')
      }
    }, 500)
  })
})
