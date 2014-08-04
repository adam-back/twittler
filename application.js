var loadTweets = function() {
  //var now = moment();
  var $div = $('.display');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div id="message"></div>');
      var $label = $('<button id="label"></button>');
      var $time = $('<div id="time"></div>');
      $label.text('@' + tweet.user + ':').appendTo($div);
      $tweet.text(tweet.message).appendTo($div);
      $time.text(tweet.created_at.toLocaleTimeString()).appendTo($div);
      index -= 1;
    }
};

$(document).ready(function(){
  loadTweets(); 

  $('#refresh').on('click', function() {
    $('div').html('');
    loadTweets();
  });

  $("button#label").on('click', function() {
     var username = $(this).text().slice(1);
     username = username.slice(0, (username.length - 1));
     window.location.href = "profile.html?username=" + username;
  });

});