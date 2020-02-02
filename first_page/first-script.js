$(document).ready(function(){
  var letters = $('p').text();
  var nHTML = '';
  for(var letter of letters) {
    nHTML+="<span class='x'>"+letter+"</span>";
  }
  $('p').html(nHTML);
})
$(document).ready(function(){
  var letters = $('h1').text();
  var nHTML = '';
  for(var letter of letters) {
    nHTML+="<span class='x'>"+letter+"</span>";
  }
  $('h1').html(nHTML);
})