// Events will be sent when someone followers
// Please use event listeners to run functions.

document.addEventListener('goalLoad', function(obj) {
    // obj.detail will contain information about the current goal
    // this will fire only once when the widget loads
    console.log(obj.detail);
    $('#title').html(obj.detail.title);
    $('#goal-current').text(obj.detail.amount.current);
    $('#goal-total').text(obj.detail.amount.target);
    $('#goal-end-date').text(obj.detail.to_go.ends_at);


    var total = $('#goal-total').html();
    var current = $('#goal-current').html();
    document.getElementById("progress-bar").style.width= (current / total * 100 + '%');
  });

  document.addEventListener('goalEvent', function(obj) {
    // obj.detail will contain information about the goal
    console.log(obj.detail);
    $('#goal-current').text(obj.detail.amount.current);
  });
