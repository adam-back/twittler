var loadTweets = function() {
  //var now = moment();
  var $div = $('.display');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div id="message"></div>');
      var $label = $('<a id="label" href="profile.html"><div id="label"></div></a>');
      var $time = $('<div id="time"></div>');
      $label.text('@' + tweet.user + ':').appendTo($div);
      $tweet.text(tweet.message).appendTo($div);
      $time.text(tweet.created_at.toLocaleTimeString()).appendTo($div);
      index -= 1;
    }
};

$(document).ready(function(){
  loadTweets(); 

  $('button').on('click', function() {
    $('div').html('');
    loadTweets();
  });

});