$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>What's up?</li>");
    $("ul#user").children("li").first().click(function() {
      $("ul#user").after("<img src=img/download.jpeg>");
    });

  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>See ya later</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop!</li>");
    $("ul#webpage").prepend("<li>ok</li>");
  });
});
