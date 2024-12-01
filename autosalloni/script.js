// Validimi për formën e kontaktit
function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Ju lutem plotësoni të gjitha fushat.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Ju lutem shkruani një email të vlefshëm.");
        return false;
    }

    alert("Forma u dërgua me sukses!");
    return true;
}
