
const homePage = document.getElementById('pageContent').innerHTML

const home= () => {
    window.event.preventDefault()
    document.getElementById('pageContent').innerHTML = homePage;
    location.href = '';
}

async function loadPage(input = location.hash) {
    location.hash = input;
    input = input != "" ? `./${input.replace("#", "")}.html` : "";
  
    if (input) {
      await fetch(input)
        .then((response) => response.text())
        .then((html) => {
          document.getElementById("pageContent").innerHTML = html;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }