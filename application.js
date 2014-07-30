var loadTweets = function() {
          var $div = $('div');
            $div.html();

            var index = streams.home.length - 1;
            while(index >= 0){
              var tweet = streams.home[index];
              var $tweet = $('<div></div>');
              $tweet.text('@' + tweet.user + ': ' + tweet.message);
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