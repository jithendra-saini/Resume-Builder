// Function to add a new education item
function addEducation() {
    const educationList = document.getElementById('education-list');
    const newItem = document.createElement('div');
    newItem.className = 'education-item';
    newItem.innerHTML = `
        <h3 contenteditable="true">Degree Name</h3>
        <p contenteditable="true">University Name, Year</p>
        <p contenteditable="true">GPA: X.X</p>
    `;
    educationList.appendChild(newItem);
}

// Function to add a new project item
function addProject() {
    const projectsList = document.getElementById('projects-list');
    const newItem = document.createElement('div');
    newItem.className = 'project-item';
    newItem.innerHTML = `
        <h3 contenteditable="true">Project Title</h3>
        <p contenteditable="true">Description of the project, technologies used, and your role.</p>
        <p>Link: <a href="#" contenteditable="true">Project Link</a></p>
    `;
    projectsList.appendChild(newItem);
}

// Function to add a new volunteering item
function addVolunteering() {
    const volunteeringList = document.getElementById('volunteering-list');
    const newItem = document.createElement('div');
    newItem.className = 'volunteering-item';
    newItem.innerHTML = `
        <h3 contenteditable="true">Organization Name</h3>
        <p contenteditable="true">Role/Position</p>
        <p contenteditable="true">Description of responsibilities and achievements.</p>
        <p contenteditable="true">Duration: Month Year - Month Year</p>
    `;
    volunteeringList.appendChild(newItem);
}

// Function to add a new certificate item
function addCertificate() {
    const certificatesList = document.getElementById('certificates-list');
    const newItem = document.createElement('div');
    newItem.className = 'certificate-item';
    newItem.innerHTML = `
        <h3 contenteditable="true">Certificate Name</h3>
        <p contenteditable="true">Issuing Organization, Year</p>
        <p contenteditable="true">Description or credential ID.</p>
    `;
    certificatesList.appendChild(newItem);
}

// Function to download resume as PDF
function downloadResume() {
    // Hide controls for printing
    document.querySelector('.controls').style.display = 'none';
    // Trigger print dialog
    window.print();
    // Show controls again
    document.querySelector('.controls').style.display = 'block';
}
