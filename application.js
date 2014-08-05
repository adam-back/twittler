$(document).ready(function() {

  var refreshTweets = function() {
      var $div = $('.display');
      var index = 0;
      while(index < streams.home.length){
        var tweet = streams.home[index];
        var $tweet = $('<div id="message"></div>');
        var $label = $('<button id="label"></button>');
        var $time = $('<div id="time"></div>');
        $time.text(tweet.created_at.toLocaleTimeString()).prependTo($div);
        $tweet.text(tweet.message).prependTo($div);
        $label.text('@' + tweet.user + ':').prependTo($div);
        index++;
      }
  };

  $('#refresh').on('click', function() {
    refreshTweets();
  });

  $(document).on('click', 'button#label', function() {
     var username = $(this).text().slice(1);
     username = username.slice(0, (username.length - 1));
     window.location.href = "profile.html?username=" + username;
  });

});