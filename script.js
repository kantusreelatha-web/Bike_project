function explore() {
    window.location.href = "bikes.html";
}
function bookBike(bikeName) {
    alert("✅ Vishnu Showroom: Booking confirmed for " + bikeName);
}
function submitForm(e) {
    e.preventDefault();
    alert("📩 Message sent to Vishnu successfully!");
}