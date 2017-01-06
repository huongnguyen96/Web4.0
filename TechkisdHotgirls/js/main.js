/*$(document).ready(function(){
  console.log('ready');
  $('body').on('click','.overlay', function(){
    alert("hello");
  });
  $('.overlay').on('click', function(){
    alert("hello");
  })
});*/


$(document).ready(function(){
  var itemTemplate = Handlebars.compile($("#item-template").html());
  $.ajax({
    type : "get",
    url  : "/libs/bootstrap/js/imagesData.json"
  }).then(function(data){
    var itemHtml = itemTemplate(data);
    $("#item_list").html(itemHtml);
    $('#item_list').masonry({
      itemSelector: '.item_container',
      columnWidth: '.item_container',
      percentPosition: true
    })
  }).fail(function(data){
    console.log(error);
  });
});
