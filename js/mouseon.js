$(document).ready(function() {
  $(document).bind('contextmenu', function(e) {
    if (!$(e.target).parents().hasClass('allowContent')) {
      alert('오른쪽 마우스 클릭은 사용할 수 없습니다. 서비스를 이용해 주셔서 감사합니다.');
      return false;
    } else {
      return true;
    }
  });
  $(document).bind('selectstart', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('dragstart', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('copy', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('cut', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(document).bind('paste', function(e) {
    return $(e.target).parents().hasClass('allowContent');
  });
  $(function() {
    $('#allowContent').addClass('allowContent');
  });
});

function mouseon() {
  document.body.classList.add('allowContent');
};
