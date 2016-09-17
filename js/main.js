
// var oldArticles = 0;

// $("#search-input").on("change", function(){
function wikiRequest(){
  $(".articles").remove();
  var remoteUrlWithOrigin = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&callback=?&search=" + $("#search-input").val();

  $.ajax( {
    url: remoteUrlWithOrigin,
    // data: queryData,
    dataType: 'json',
    type: 'GET',
    async: false,
    // headers: {'Api-User-Agent': 'Example/1.0'}, // need to be modified
    success: function (data) {
      console.log(data);
      for(var i = 0; i < data[1].length; i ++) {
        var addItem = '<div class="col-xs-8 col-xs-offset-2 text-left bg-success articles"><h3>' + data[1][i] +'</h3><a href="'
            + data[3][i] + '" + target="_blank"><p>' + data[2][i] + '</p></a></div>';
        $("main").append(addItem);
      }
      oldArticles = data[1].length;

    },
    error: function(errorMessage){
      alert('Error');
    }
  });
}
// });
  // jQuery for ajax
