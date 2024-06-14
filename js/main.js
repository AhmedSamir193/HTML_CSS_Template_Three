let countDonwDate = new Date("dec, 31, 2024 11:59:59").getTime()


let date = setInterval(() => {
    let dateNow = new Date().getTime()


    let diff = countDonwDate - dateNow

    // Units of time
    let days = Math.floor(diff / ( 1000 * 60 * 60 * 24))
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days

    let hours = Math.floor(diff % ( 1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours

    let minutes = Math.floor(diff % ( 1000 * 60 * 60) / (1000 * 60))
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes

    let seconds = Math.floor(diff % (1000 * 60) / 1000)
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

}, 1000)




let ourSkillsSection = document.querySelector(".our-skills")
let spanProgress = document.querySelectorAll(".the-progress span")
let progress = Array.from(spanProgress)


let numbers = document.querySelectorAll(".box .number")
let stats = document.querySelector(".stats")
let started = false


window.onscroll = function () {
  if (window.scrollY >= ourSkillsSection.offsetTop - 250) {
    progress.forEach((prog) => {
      prog.style.width = prog.dataset.width
    })
  }


  if (window.scrollY >= stats.offsetTop - 250) {
    if (!started) {
      numbers.forEach((el) => up(el))
    }
    started = true
  }
}


function up(el) {
  let goal = el.dataset.goal

  let count = setInterval (() => {

    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }

  }, 2000 / goal)

}


// z-index: 100;
// opacity: 1;
// top: calc(100% + 1px);



let targetLink = document.querySelector(".target-link")
let megaMenu = document.querySelector(".mega-menu")

targetLink.addEventListener("click", function () {
    megaMenu.classList.add("showmega")
})


document.addEventListener("click", function (e) {
  !megaMenu.contains(e.target) && !targetLink.contains(e.target) ? megaMenu.classList.remove("showmega") : ""
})


document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    megaMenu.classList.remove("showmega")

  }
})


document.addEventListener("DOMContentLoaded", () => {
  // Function to check if the screen width is less than a certain threshold (e.g., 768px for typical mobile devices)
  const isMobile = () => {
    return window.innerWidth < 768;
  };

  // Only initialize IntersectionObserver if the screen is not considered mobile
  if (!isMobile()) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    let boxes = document.querySelectorAll(".hidden");
    boxes.forEach((box) => observer.observe(box));
  }
});




let scroller = document.querySelector(".scroller")

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", () => {

    let scroll = document.documentElement.scrollTop


    scroller.style.width = `${(scroll / height * (100))}%`

})




let userName = document.querySelector(".userName")
let email = document.querySelector(".email")
let tel = document.querySelector(".tel")
let textArea = document.querySelector(".textArea")
let progress1 = document.querySelector(".progress1")
let progress2 = document.querySelector(".progress2")
let progress3 = document.querySelector(".progress3")
let progress4 = document.querySelector(".progress4")
let maxLengthUser = userName.getAttribute("maxlength")
let maxLengthEmail = email.getAttribute("maxlength")
let maxLengthTel = tel.getAttribute("maxlength")
let maxLengthArea = textArea.getAttribute("maxlength")



userName.oninput = function () {
    progress1.style.width = `${(userName.value.length * 100) / maxLengthUser}%`

    progress1.style.width === `${100}%` ? progress1.classList.add("full") : progress1.classList.remove("full")
}

  email.oninput = function () {

    progress2.style.width = `${(email.value.length * 100) / maxLengthEmail}%`

    progress2.style.width === `${100}%` ? progress2.classList.add("full") : progress2.classList.remove("full")
  }


  tel.oninput = function () {

    progress3.style.width = `${(tel.value.length * 100) / maxLengthTel}%`

    progress3.style.width === `${100}%` ? progress3.classList.add("full") : progress3.classList.remove("full")
  }


  textArea.oninput = function () {

    progress4.style.width = `${(textArea.value.length * 100) / maxLengthArea}%`

    progress4.style.width === `${100}%` ? progress4.classList.add("full") : progress4.classList.remove("full")
  }


