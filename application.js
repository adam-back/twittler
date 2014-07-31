var loadTweets = function() {
  //var now = moment();
  var $div = $('.display');
    $div.html();

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<p id="message"></p>');
      var time = tweet.created_at;
      $tweet.text(time.toLocaleTimeString() + ': @' + tweet.user + ': ' + tweet.message);
      $tweet.appendTo($div);
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