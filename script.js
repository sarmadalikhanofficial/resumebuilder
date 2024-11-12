// Select relevant elements
var toggleButton1 = document.getElementById("myButton");
var form2 = document.getElementById("resume-form");
var inputElements = document.querySelectorAll('input, textarea');
var fieldsets = document.querySelectorAll('fieldset');
var resumeDisplay1 = document.getElementById("resume-display");
var footer = document.querySelector("footer");
// Single event listener for toggle button
if (toggleButton1) {
    toggleButton1.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        // Toggle dark mode for form, resume display, and footer
        form2 === null || form2 === void 0 ? void 0 : form2.classList.toggle("dark-mode");
        resumeDisplay1 === null || resumeDisplay1 === void 0 ? void 0 : resumeDisplay1.classList.toggle("dark-mode");
        footer === null || footer === void 0 ? void 0 : footer.classList.toggle("dark-mode");
        // Toggle dark mode for input and textarea fields
        inputElements.forEach(function (el) { return el.classList.toggle('dark-mode'); });
        // Toggle dark mode for fieldsets
        fieldsets.forEach(function (fieldset) { return fieldset.classList.toggle('dark-mode'); });
    });
}
else {
    console.error("Toggle button not found.");
}
// Grab elements from the DOM
var form3 = document.getElementById("resume-form");
var resumeDisplayElement1 = document.getElementById("resume-display");
// Handle form submission and generate resume
form3.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Generate resume HTML
    var resumeHTML = "\n        <div id=\"resumeContent\" class=\"preview\"; style=\"font-family: Arial, sans-serif; color: #000000; max-width: 600px; margin: auto;\">\n            <h1 style=\"font-size: 2em; text-align: left; font-family: 'Cinzel', medium; color: #000000;\"><u>".concat(name, "</u></h1>\n                <section id=\"contact\" style=\"margin-bottom: 20px;\">  \n                    <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>CONTACT</u></h2>\n                \n                    <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                        <span class=\"material-icons\" style=\"font-size: 24px;display: inline-flex; vertical-align: middle;\">call</span>").concat(phone, "\n                    </p>\n                \n                    <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                        <span class=\"material-icons\" style=\"font-size: 24px;display: inline-flex; vertical-align: middle;\">mail</span>").concat(email, "\n                    </p>\n                \n                    <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                        <span class=\"material-icons\" style=\"font-size: 24px;display: inline-flex; vertical-align: middle;\">home</span>").concat(address, "\n                    </p>\n                </section>\n            \n                    <hr style=\"border: 0; border-top: 1px solid #696969; margin: 20px 0;\" />\n\n                <section id=\"education\" style=\"margin-bottom: 20px;\">\n                    <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>EDUCATION</u></h2>\n                    <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">").concat(education, "</p>\n                </section>\n            \n                    <hr style=\"border: 0; border-top: 1px solid #696969; margin: 20px 0;\" />\n\n                <section id=\"experience\" style=\"margin-bottom: 20px;\">\n                    <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>EXPERIENCE</u></h2>\n                    <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">").concat(experience, "</p>\n                </section>\n            \n                    <hr style=\"border: 0; border-top: 1px solid #696969; margin: 20px 0;\" />\n\n                <section id=\"skills\" style=\"margin-bottom: 20px;\">\n                    <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>LEARNED SKILLS</u></h2>\n                    <ul style=\"list-style-type: disc; padding-left: 20px; font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                        ").concat(skills.split(',').map(function (skill) { return "<li style=\"margin-bottom: 5px;\">".concat(skill.trim(), "</li>"); }).join(''), "\n                    </ul>\n                </section>\n        </div>\n        ");
    localStorage.setItem('resumeHTML', JSON.stringify(resumeHTML));
    alert("Resume data saved. Scroll down to view your resume.");
    // Display generated resume
    if (resumeDisplayElement1) {
        resumeDisplayElement1.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display element is missing');
    }
});
// Assuming `name` is already defined by extracting it from the form input, as done in your form submission code
var username = document.getElementById('username').value;
/*
// Create a shareable URL
const shareContainer = document.getElementById("share") as HTMLElement | null;
const shareLink = document.getElementById("share-link") as HTMLAnchorElement | null;

if (shareContainer && shareLink) {
    // Create shareable URL using the extracted `name`
    const shareURL = `${window.location.href}?username=${encodeURIComponent(username)}`;
    
    // Display and configure the share link
    shareContainer.style.display = 'block';
    shareLink.href = shareURL;
    shareLink.textContent = shareURL;
} else {
    console.error("Share container or share link not found.");
}
*/
/////////////////////////////////////
var resumeData = JSON.parse(localStorage.getItem('resumeHTML') || "{}");
console.log(JSON.stringify(resumeData));
var form = document.getElementById('form');
var shareContainer = document.getElementById('share');
var shareLink = document.getElementById('share-link');
var download = document.getElementById('download');
//PDF Download
download.addEventListener('click', function (e) {
    window.print();
});
