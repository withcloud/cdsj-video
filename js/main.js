$(document).keypress(function(e) {
  if (e.key === 'c') {
    $('.wrapper').addClass('hide');
    $('#c').removeClass('hide');
    $('#c video').get(0).pause()
    $('#d video').get(0).pause()
    $('#s video').get(0).pause()
    $('#j video').get(0).pause()
    $('#c video').get(0).currentTime = 0;
    $('#c video').get(0).play()
  }

  if (e.key === 'd') {
    $('.wrapper').addClass('hide');
    $('#d').removeClass('hide');
    $('#c video').get(0).pause()
    $('#d video').get(0).pause()
    $('#s video').get(0).pause()
    $('#j video').get(0).pause()
    $('#d video').get(0).currentTime = 0;
    $('#d video').get(0).play()
  }

  if (e.key === 's') {
    $('.wrapper').addClass('hide');
    $('#s').removeClass('hide');
    $('#c video').get(0).pause()
    $('#d video').get(0).pause()
    $('#s video').get(0).pause()
    $('#j video').get(0).pause()
    $('#s video').get(0).currentTime = 0;
    $('#s video').get(0).play()
  }

  if (e.key === 'j') {
    $('.wrapper').addClass('hide');
    $('#j').removeClass('hide');
    $('#c video').get(0).pause()
    $('#d video').get(0).pause()
    $('#s video').get(0).pause()
    $('#j video').get(0).pause()
    $('#j video').get(0).currentTime = 0;
    $('#j video').get(0).play()
  }

  if (e.key === 'r') {
    $('.wrapper').addClass('hide');
    $('#r').removeClass('hide');
    $('#c video').get(0).pause()
    $('#d video').get(0).pause()
    $('#s video').get(0).pause()
    $('#j video').get(0).pause()
  }
});