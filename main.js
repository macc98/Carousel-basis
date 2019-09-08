var buttons = $('button')
for (let i = 0; i < buttons.length; i++) {
  $(buttons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index() - 1
    var move = -800 * index
    $(images).css({
      transform: 'translateX(' + move + 'px)'
    })
    $(buttons).eq(index).addClass('buttonColor').siblings('.buttonColor').removeClass('buttonColor')
  })
}
var n = 0
var size = buttons.length
var setTimer = setTime()

$('.window,button').on('mouseenter', function () {
  window.clearInterval(setTimer)
})

$('.window').on('mouseleave', function () {
  setTimer = setTime()
})

function setTime() {
  return setInterval(() => {
    n++
    buttons.eq(n % size).trigger('click')
  }, 1000)
}