<script>
  var contentHash = {};
  
  if (window.jQuery) {
    $( document ).ready(function() {
      $('a.js-link-cacheable').each(
        function (index) {
          var url = $(this).attr('href');
          var id = $(this).attr('id');
          
          if(id) {
            if(!contentHash[id]) {
              $.ajax({
                url: url,
                type: "GET",
                contentType: 'text/plain',
                success: function(result) {
                  contentHash[id] = result;
                }
              });
            }
          }
        }
      );      
      $('a.js-link-cacheable').click(
        function () {
          var id = $(this).attr('id');
        
          if(id && contentHash[id]) {
            $('html').html(contentHash[id]);
            return false;
          }
          return true;
        });
      });
  }
</script>