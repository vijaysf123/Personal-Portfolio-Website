// Nav links (tab navigation)

let tablinks = document.getElementsByClassName("tab-link")
let tabContents = document.getElementsByClassName("tab_contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active_link")
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active-tab")
};


// Menubar coding is starting now.

let sidemenu = document.getElementById("sidemenu");
 
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


//script For google sheet (credit: Github)

const scriptURL = 'https://script.google.com/macros/s/AKfycbw3rYm63wn5Yzg1OZuSVf24Um_wuG-xLohmpGjhvTytyy83KyLcQoV6p8tyClzrDfxw/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "Message sent successfully!"
        setTimeout(function () {
            msg.innerText = ""
        }, 1000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})