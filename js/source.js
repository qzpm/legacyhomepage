$(() => {
  "use strict";

  $('body').on('contextmenu', () => alert("右クリック禁止!!!"))

  $(() => {
    let i = 0
    const colorset = ['black', 'blue', 'green', 'yellow']
    const marquee = $('.marquee')
    const blink = $('.blink')
    setInterval(() => {
      marquee.css('color', colorset[i++ % 4])
      blink.toggle()
    }, 500)
  })

  $('.door').click(() => {
    $('.enter').css('display', 'none')
    $('.content').css('display', 'flex')
  })

  $('html').mousemove(e => {
    const [dx, dy] = [e.pageX, e.pageY]
    const [img_h, img_w] = [$('.stalker').height(), $('.stalker').width()]
    const [c_w, c_h] = [$('.content').width(), $('.content').height()]

    const img_x = ((c_w <= dx + img_w)? c_w - img_w : dx + 30)
    const img_y = ((c_h <= dy + img_h / 2)? c_h - img_h : dy - img_h / 2)

    $('.stalker').css('left', img_x).css('top', img_y)
  })
})
