let count = localStorage.getItem("visitorCount");

if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("visitor-count").innerText = 
    "Visitors: " + count;
