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
      var response = event.target.responseText;
      var responseArea = document.getElementById("response");
      responseArea.innerHTML = response;
    }
  };
});
