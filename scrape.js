var form = document.getElementById("scrapeURL");

form.addEventListener("submit", function (event) {
  var xhr = new XMLHttpRequest();
  var url = document.getElementById("url").value;
  console.log(url);
  event.preventDefault();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function (event) {
    var xhr = event.target;
    if (xhr.readyState === 4 && xhr.status === 200) {
      var html = event.target.responseText;
      var responseArea = document.getElementById("response");
      var sentenceRegex = /<p>([^\.]{20,})(?:\.|;|:|(<br>))?/g;
      var sentences = html.match(sentenceRegex);
      if (sentences.length > 1) {
        sentences.shift();
        var div, textNode, text;
        sentences.forEach(function(sentence) {
          console.log(sentence);
          div = document.createElement("div");
          div.className = "sentence";
          textNode = document.createElement("p");
          text = document.createTextNode(sentence);
          textNode.appendChild(text);
          div.appendChild(textNode);
          responseArea.appendChild(div);
        });
      } else {
        responseArea.appendChild(document.createTextNode("(no sentences found)"));
      }
    }
  };
});
