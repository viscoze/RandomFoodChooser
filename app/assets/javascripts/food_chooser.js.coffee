$(document).ready  ->

  $("#your-option-button").click (event) ->
    event.preventDefault();
    text = $('#your-option-text').val()
    $('#your-option-text').val("")
    console.log(text)

  $(".cuisine-box").click (event) ->
    event.preventDefault()
