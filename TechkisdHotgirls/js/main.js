var loadedData=[];
var isrequestNextPage = false;

$(document).ready(function(){
  var itemTemplate = Handlebars.compile($("#item-template").html());
  var itemModalTemplate = Handlebars.compile($("#item-modal-template").html());

  $.ajax({
    type : "get",
    url  : "/libs/bootstrap/js/imagesData.json"
  }).then(function(data){
    loadedData = loadedData.concat(data.items);

    var $itemHtml = $(itemTemplate(data));
    //$("#item_list").html(itemHtml);
    $('#item_list').append($itemHtml).masonry('appended', $itemHtml, true);
    $('#item_list').masonry({
      itemSelector: '.item_container',
      columnWidth: '.item_container',
      percentPosition: true
    })
  }).fail(function(error){
    console.log(error);
  });

  $('body').on('click','.plus_button', function(){
    var itemId = $(this).attr('data-item-id');
    for(var i=0; i<loadedData.length;i++){
      var itemData = loadedData[i];
      if(itemData.id == itemId){
        $('#item_modal_body').html(itemModalTemplate(itemData));
        break;
      }
    }
    $("#item_modal").modal("show");
  });

  $(window).on('scroll', function(){
    if(isrequestNextPage) return;

    if($(window).scrollTop()+window.innerHeight > $(document).height() - 200){
      setTimeout(function() {
        requestNextPage(itemTemplate);
      },1000000);
      isrequestNextPage = true;
    }
  });
});

function requestNextPage(itemTemplate) {
  $.ajax({
    type : "get",
    url  : "libs/bootstrap/js/imagesData.json"
  }).then(function(data){
    loadedData = loadedData.concat(data.items);

    var $itemHtml = $(itemTemplate(data));
    //them vao cuoi list item
    $('#item_list').append($itemHtml).masonry('appended', $itemHtml, true);
    $('#item_list').masory({
      itemSelector: '.item_container',
      columnWidth: '.item_container',
      percentPosition: true
    });
  }).fail(function(error){
    console.log(error);
  }).always(function() {
    isrequestNextPage = false;
  });

}
