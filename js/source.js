$(() => {
  "use strict";

  $('body').on('contextmenu', () => alert("右クリック禁止!!!"))

  $('html').mousemove(e => {
    const dx = e.pageX
    const dy = e.pageY
    const stalker = $('.stalker')
    const image_height = stalker.height()
    const image_width = stalker.width()
    const w_width = screen.width
    const w_height = screen.height
    if(w_width <= dx + image_width) {
      stalker.css('left', w_width - image_width + 30)
    } else {
      stalker.css('left', dx + 30)
    }

    if(w_height <= dy + image_height / 2) {
      stalker.css('top', w_height - image_height)
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
