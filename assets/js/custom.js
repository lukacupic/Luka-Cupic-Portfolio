function getDifferenceInYears(a, b) {
  let days = parseInt((a - b) / (1000 * 60 * 60 * 24), 10);
  return Math.floor(days / 365);
}

function computeAge() {
  let a = new Date();
  let b = new Date("3/28/1997");

  let difference = getDifferenceInYears(a, b);
  document.getElementById("age").innerHTML = difference;
}

function getLocation() {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://cdn.filestackcontent.com/aIrbUiiREWW5s6f9VWCx",
    true
  );
  request.send(null);

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var type = request.getResponseHeader("Content-Type");

      if (type.indexOf("text") !== 1) {
        document.getElementById("location").innerHTML = request.responseText;
      }
    }
  };
}

function computeYear() {
  let year = new Date().getFullYear();
  document.getElementById("year").innerHTML = `Copyright © ${year}`;
}

computeAge();
getLocation();
computeYear();
