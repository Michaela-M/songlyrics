function getDataFromApi(artist, title, callback) {
    let URL = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    $.getJSON(URL, callback);
  }
  
  function displaySearchData(data) {
    $('.js-search-results').html(`<pre><code>${data.lyrics}</pre></code>`);
  }
  
  function watchSubmit() {
    $('.js-search-form').on('submit', function(e) {
        e.preventDefault();
        let artist = $('.js-query-artist').val();
        let title = $('.js-query-title').val();
        getDataFromApi(artist, title, displaySearchData);
    });
  }
  
  $(watchSubmit);