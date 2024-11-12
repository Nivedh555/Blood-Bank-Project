// Function to Show Blood Search Form
function showSearchForm() {
    document.getElementById("form-section").innerHTML = `
        <h3>Search for Blood</h3>
        <form id="searchForm">
            <label for="bloodType">Required Blood Group:</label>
            <select id="bloodType" required>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <label for="location">Location:</label>
            <input type="text" id="location" required>
            <button type="button" onclick="searchBlood()">Search</button>
        </form>`;
}

// Function to Show Blood Donation Form
function showDonationForm() {
    document.getElementById("form-section").innerHTML = `
        <h3>Donate Blood</h3>
        <form id="donationForm">
            <label for="name">Full Name:</label>
            <input type="text" id="name" required>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" required>
            <label for="donorBloodType">Blood Group:</label>
            <select id="donorBloodType" required>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <button type="button" onclick="registerDonor()">Register</button>
        </form>`;
}

// Function to Handle Blood Search
function searchBlood() {
    const bloodType = document.getElementById("bloodType").value;
    const location = document.getElementById("location").value;

    // Simulate blood availability
    const hospitals = [
        { name: "CMR Hospital", contact: "09988448777", location: "Kandalkoya, Hyderabad-500001(Kandalkoya, Medchal)" },
        { name: "Malla Reddy Hospital", contact: "08790387903", location: "Suraram X Road, Jeedemetla, Hyderabad, 500055" },
    ];

    let result = `<h3>Available Blood</h3><ul>`;
    hospitals.forEach(hospital => {
        result += `<li>${hospital.name} - ${hospital.location} (Contact: ${hospital.contact})</li>`;
    });
    result += `</ul>`;
    document.getElementById("form-section").innerHTML = result;
}

// Function to Register Blood Donor
function registerDonor() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const donorBloodType = document.getElementById("donorBloodType").value;

    // Generate a simple donor ID
    const donorId = Math.floor(Math.random() * 10000);

    // Display confirmation and nearest location
    document.getElementById("form-section").innerHTML = `
        <h3>Registration Successful</h3>
        <p>Thank you, ${name}. Your Donor ID is <strong>${donorId}</strong>.</p>
        <p>Nearest Donation Location: Malla Reddy Hospital Suraram</p>
        <p>Nearest Donation Location: <a href="https://maps.app.goo.gl/uXZW5Q9aJTDGRHBa8" target="_blank">Malla Reddy Hospital</a></p>
    `;
}
