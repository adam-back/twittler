$(document).ready(function(){

  $('#refresh').on('click', function() {
    loadTweets();
  });

  $("button#label").on('click', function() {
     var username = $(this).text().slice(1);
     username = username.slice(0, (username.length - 1));
     window.location.href = "profile.html?username=" + username;
  });

});