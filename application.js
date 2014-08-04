var loadTweets = function() {
  //var now = moment();
  var $div = $('.display');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div id="message"></div>');
      var $label = $('<div id="label"></div>');
      var $time = $('<div id="time"></div>');
      $label.text('@' + tweet.user + ':').appendTo($div);
      $tweet.text(tweet.message).appendTo($div);
      $time.text(tweet.created_at.toLocaleTimeString()).appendTo($div);
      index -= 1;
    }
  };

var loadUser = function() {

};

$(document).ready(function(){
  loadTweets(); 

  $('button').on('click', function() {
    $('div').html('');
    loadTweets();
  });

  $("#label").on("click", function() {

    $('.profile').slideToggle();
  });

  $('.profile').on("click", function() {
    $(this).slideToggle();
  });

});