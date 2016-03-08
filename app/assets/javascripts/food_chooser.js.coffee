$(document).ready  ->

  $("#your-option-button").click (event) ->
    event.preventDefault()
    text = $('#your-option-text').val()
    $('#your-option-text').val("")

  $(".cuisine-box").click (event) ->
    event.preventDefault()
    name = $(".name").innerHTML
    console.log name
    img  = $("img")
