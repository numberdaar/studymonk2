// Function to handle login form submission
function handleLoginForm(event) {
    event.preventDefault();
  
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform login authentication (dummy example)
    // Replace this with your own authentication logic
    if (username === "admin" && password === "password") {
      // Save user login information to localStorage
      localStorage.setItem("loggedInUser", username);
  
      // Redirect to the dashboard or relevant page
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  
  // Function to handle registration form submission
  function handleRegisterForm(event) {
    event.preventDefault();
  
    // Get form values
    var companyName = document.getElementById("companyName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform company registration (dummy example)
    // Replace this with your own registration logic
    var companyData = {
      companyName: companyName,
      email: email,
      password: password
    };
  
    // Save company registration information to localStorage
    localStorage.setItem("registeredCompany", JSON.stringify(companyData));
  
    // Show a success message or redirect to a success page
    alert("Registration successful. You can now log in.");
  }
  
  // Function to search candidates
  function searchCandidates() {
    // Get search criteria from input fields
    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("jobRole").value;
  
    // Perform candidate search (dummy example)
    // Replace this with your own search logic
    var candidates = [
      { name: "Jhon", location: "New York", jobRole: "Software Engineer" },
      { name: "Jane Smith", location: "San Francisco", jobRole: "UX Designer" },
      { name: "Michael Johnson", location: "Chicago", jobRole: "Data Analyst" },
      { name: "Emily Davis", location: "London", jobRole: "Marketing Manager" },
    ];
  
    // Filter candidates based on search criteria
    var filteredCandidates = candidates.filter(function(candidate) {
      return candidate.location.toLowerCase() === location.toLowerCase() &&
             candidate.jobRole.toLowerCase() === jobRole.toLowerCase();
    });
  
    // Display the filtered candidates in the candidateList section dynamically
    var candidateList = document.getElementById("candidateList");
    candidateList.innerHTML = "";
  
    if (filteredCandidates.length === 0) {
      candidateList.innerHTML = "<p>No candidates found.</p>";
    } else {
      filteredCandidates.forEach(function(candidate) {
        var candidateCard = document.createElement("div");
        candidateCard.classList.add("candidate-card");
        candidateCard.innerHTML = "<h3>" + candidate.name + "</h3>" +
                                  "<p><strong>Location:</strong> " + candidate.location + "</p>" +
                                  "<p><strong>Job Role:</strong> " + candidate.jobRole + "</p>";
  
        candidateList.appendChild(candidateCard);
      });
    }
  }
  
  // Check if the user is already logged in (on page load)
  function checkLoggedInUser() {
    var loggedInUser = localStorage.getItem("loggedInUser");
  
    // Redirect to the dashboard or login page based on user authentication
    if (loggedInUser) {
      window.location.href = "dashboard.html";
    }
  }
  
  // Add event listeners to the login and registration forms
  document.getElementById("loginForm").addEventListener("submit", handleLoginForm);
  document.getElementById("registerForm").addEventListener("submit", handleRegisterForm);
  
  // Call the checkLoggedInUser function on page load
  window.addEventListener("load", checkLoggedInUser);
  