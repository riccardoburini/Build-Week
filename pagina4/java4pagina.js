function getSiblings(element, type) {
    var arraySib = [];
    if (type == "prev") {
      while ((element = element.previousSibling)) {
        arraySib.push(element);
      }
    } else if (type == "next") {
      while ((element = element.nextSibling)) {
        arraySib.push(element);
      }
    }
    return arraySib;
  }
  for (var i = 1; i <= 10; i++) {
    document.getElementById("w__stars").innerHTML += `<span class="r__icon"><img src="../assets/star.svg" class="img-hover"><img class="manImg" src="../assets/blackStar.svg"></img></span>`;
  }
  var icon = document.getElementsByClassName("r__icon");
  for (var i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", function (e) {
      this.innerHTML = `<img class="manImg" src="../assets/star.svg">`;
      var prev = getSiblings(this, "prev");
      var next = getSiblings(this, "next");
      // populate previous siblings
      for (p = 0; p < prev.length; p++) {
        prev[p].innerHTML = `<img class="manImg" src="../assets/star.svg">`;
      }
      // clear next siblings
      for (n = 0; n < next.length; n++) {
        next[n].innerHTML = `<img class="manImg" src="../assets/blackStar.svg">`;
      }
    });
  }
