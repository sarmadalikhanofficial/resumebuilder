// Select relevant elements
const toggleButton1 = document.getElementById("myButton") as HTMLButtonElement | null;
const form2 = document.getElementById("resume-form") as HTMLFormElement | null;
const inputElements = document.querySelectorAll('input, textarea');
const fieldsets = document.querySelectorAll('fieldset');
const resumeDisplay1 = document.getElementById("resume-display") as HTMLElement | null;
const footer = document.querySelector("footer") as HTMLElement | null;

// Single event listener for toggle button
if (toggleButton1) {
    toggleButton1.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Toggle dark mode for form, resume display, and footer
        form2?.classList.toggle("dark-mode");
        resumeDisplay1?.classList.toggle("dark-mode");
        footer?.classList.toggle("dark-mode");
        
        // Toggle dark mode for input and textarea fields
        inputElements.forEach((el) => el.classList.toggle('dark-mode'));
        
        // Toggle dark mode for fieldsets
        fieldsets.forEach((fieldset) => fieldset.classList.toggle('dark-mode'));
    });
} else {
    console.error("Toggle button not found.");
}

    // Grab elements from the DOM
    const form3 = document.getElementById("resume-form") as HTMLFormElement;
    const resumeDisplayElement1 = document.getElementById("resume-display") as HTMLDivElement;

    // Handle form submission and generate resume
    form3.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;


        // Generate resume HTML
        const resumeHTML = `
        <div id="resumeContent" class="preview"; style="font-family: Arial, sans-serif; color: #000000; max-width: 600px; margin: auto;">
            <h1 style="font-size: 2em; text-align: left; font-family: 'Cinzel', medium; color: #000000;"><u>${name}</u></h1>
                <section id="contact" style="margin-bottom: 20px;">  
                    <h2 style="font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;"><u>CONTACT</u></h2>
                
                    <p style="font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;">
                        <span class="material-icons" style="font-size: 24px;display: inline-flex; vertical-align: middle;">call</span>${phone}
                    </p>
                
                    <p style="font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;">
                        <span class="material-icons" style="font-size: 24px;display: inline-flex; vertical-align: middle;">mail</span>${email}
                    </p>
                
                    <p style="font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;">
                        <span class="material-icons" style="font-size: 24px;display: inline-flex; vertical-align: middle;">home</span>${address}
                    </p>
                </section>
            
                    <hr style="border: 0; border-top: 1px solid #696969; margin: 20px 0;" />

                <section id="education" style="margin-bottom: 20px;">
                    <h2 style="font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;"><u>EDUCATION</u></h2>
                    <p style="font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;">${education}</p>
                </section>
            
                    <hr style="border: 0; border-top: 1px solid #696969; margin: 20px 0;" />

                <section id="experience" style="margin-bottom: 20px;">
                    <h2 style="font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;"><u>EXPERIENCE</u></h2>
                    <p style="font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;">${experience}</p>
                </section>
            
                    <hr style="border: 0; border-top: 1px solid #696969; margin: 20px 0;" />

                <section id="skills" style="margin-bottom: 20px;">
                    <h2 style="font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;"><u>LEARNED SKILLS</u></h2>
                    <ul style="list-style-type: disc; padding-left: 20px; font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;">
                        ${skills.split(',').map(skill => `<li style="margin-bottom: 5px;">${skill.trim()}</li>`).join('')}
                    </ul>
                </section>
        </div>
        `;

        localStorage.setItem('resumeHTML',JSON.stringify(resumeHTML));
        alert("Resume data saved. Scroll down to view your resume.")


        // Display generated resume
        if (resumeDisplayElement1) {
            resumeDisplayElement1.innerHTML = resumeHTML;
        } else {
            console.error('The Resume Display element is missing');
        }
        
    });


// Assuming `name` is already defined by extracting it from the form input, as done in your form submission code
const username = (document.getElementById('username') as HTMLInputElement).value;
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

const resumeData = JSON.parse(localStorage.getItem('resumeHTML')||"{}");
console.log(JSON.stringify(resumeData));

const form  = document.getElementById('form')as HTMLFormElement;

let shareContainer = document.getElementById('share')as HTMLDivElement;
let shareLink = document.getElementById('share-link')as HTMLAnchorElement; 
let download = document.getElementById('download')as HTMLButtonElement; 
//PDF Download
download.addEventListener('click',(e)=>{
window.print();

});