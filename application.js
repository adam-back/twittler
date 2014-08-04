var loadTweets = function() {
  //var now = moment();
  var $div = $('.display');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div id="message"></div>');
      var $label = $('<div id="label"></div>')
      var time = tweet.created_at;
      $label.text(time.toLocaleTimeString() + ': @' + tweet.user + ':');
      $label.appendTo($div);
      $tweet.text(tweet.message);
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

  $("#label").on("click", function() {
    alert("Clicked username!");
  });

});