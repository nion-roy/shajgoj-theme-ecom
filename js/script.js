// Header Sticky Script ======================= >>
window.addEventListener("scroll", function () {
   var headerSection = document.querySelector(".header-section");
   headerSection.classList.toggle("sticky", window.scrollY > 0);
});

// SideBar Click off-canvas Script ======================= >>
document.getElementById("sideBarOpen").addEventListener("click", sidebarFunction);
document.getElementById("sidebarClose").addEventListener("click", sidebarFunction);
document.getElementById("sidebarOverlay").addEventListener("click", sidebarFunction);
function sidebarFunction() {
   document.getElementById("sidebarMenu").classList.toggle("open");
   document.getElementById("sidebarOverlay").classList.toggle("open");
}

// Side Bar Script ======================= >>
$(document).ready(function () {
   $(".sub_menu span").on("click", function () {
      $(this).next().slideToggle(300);
      $(this).toggleClass("active");
   });
});

// Chat Support Script ======================= >>
document.getElementById("chatShow").addEventListener("click", chatFunction);
document.getElementById("chatHide").addEventListener("click", chatFunction);
function chatFunction() {
   document.getElementById("chatSupport").classList.toggle("active");
}

// Shopping Cart Script ======================= >>
document.getElementById("openCartMenuNav").addEventListener("click", cartFunction);
document.getElementById("openCartMenu").addEventListener("click", cartFunction);
document.getElementById("closeCartMenu").addEventListener("click", cartFunction);
document.getElementById("cartOverlay").addEventListener("click", cartFunction);
function cartFunction() {
   document.getElementById("hideCartMenu").classList.toggle("active");
   document.getElementById("cartOverlay").classList.toggle("active");
}

// Form Script ======================= >>
document.getElementById("regi_btn").onclick = () => {
   document.getElementById("register_btn").classList.toggle("active");
   document.getElementById("login_wrap").classList.toggle("active");
};
document.getElementById("lost_btn").onclick = () => {
   document.getElementById("forget_btn").classList.toggle("active");
   document.getElementById("login_wrap").classList.toggle("active");
};
document.getElementById("forget_login").onclick = () => {
   document.getElementById("forget_btn").classList.toggle("active");
   document.getElementById("login_wrap").classList.toggle("active");
};
document.getElementById("back_login").onclick = () => {
   document.getElementById("register_btn").classList.toggle("active");
   document.getElementById("login_wrap").classList.toggle("active");
};

$(document).ready(function () {
   $("#toggle").click(function () {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
         //Stuff to do when btn is in the read more state
         $("#toggle").text("Read Less");
         $("#text").slideDown();
      } else {
         //Stuff to do when btn is in the read less state
         $("#toggle").text("Read More");
         $("#text").slideUp();
      }
   });
});

const plus = document.querySelector(".inc-button"),
   minus = document.querySelector(".dec-button"),
   value = document.querySelector(".value");

let a = 1;
let b = 10;
plus.addEventListener("click", () => {
   a++;
   a = a < 10 ? "0" + a : b;
   value.innerText = a;
   console.log(a);
});

minus.addEventListener("click", () => {
   if (a > 1) {
      a--;
      a = a < 10 ? "0" + a : a;
      value.innerText = a;
      console.log(a);
   }
});
