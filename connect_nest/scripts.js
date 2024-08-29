function showLoginPage() {
  document.getElementById('loginPage').style.display = 'block';
  document.getElementById('registerPage').style.display = 'none';
}

function showRegisterPage() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'block';
}

function showHomePage(userName) {
  document.getElementById('userName').innerText = userName;
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('registerPage').style.display = 'none';
}

function updateProfilePic() {
  const fileInput = document.getElementById('profilePicInput');
  const profilePic = document.getElementById('profilePic');
  
  if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
          profilePic.src = e.target.result;
      }
      reader.readAsDataURL(fileInput.files[0]);
  }
}

function updateStatus() {
  const statusInput = document.getElementById('statusInput').value;
  alert('Status updated to: ' + statusInput);
  // Here you would send the status to the server
}

function viewInbox() {
  alert('Viewing inbox');
  // Here you would redirect to the inbox page or show inbox messages
}

function logout() {
  showLoginPage();
  // Here you would handle the logout process
}
