var notifications = document.querySelectorAll(".notif");
var dots = document.querySelectorAll(".unread");
var number = document.getElementById("num");
var markAsRead = document.getElementById("read");
for (let i = 0; i < notifications.length; i++) {
    notifications[i].onclick = function() {
        if (notifications[i].classList.contains("un")) {
            notifications[i].classList.remove("un");
            dots[i].classList.add("hidden");
            number.textContent--;
        }
    }
}
markAsRead.onclick = function() {
    notifications.forEach((n) => {
        n.classList.remove("un");
    })
    dots.forEach((d) => {
        d.classList.add("hidden");
    })
    number.textContent = 0;
}