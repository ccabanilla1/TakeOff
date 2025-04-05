document.addEventListener("DOMContentLoaded", function () {
	const fontLink = document.createElement("link");
	fontLink.rel = "stylesheet";
	fontLink.href =
		"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
	document.head.appendChild(fontLink);
	const style = document.createElement("style");

	style.textContent = `
    .navbar {
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      font-family: 'Press Start 2P';
    }
    
    .logo img {
      color: white;
      padding-top: -1;
      max-width: 150px;
      font-size: 1.5rem;
      text-decoration: none;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding-top: 45px;
    }
    
    .nav-links li {
      margin-left: 1.5rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
    }
    
    .nav-links a:hover {
      text-decoration: underline;
    }
  `;

	document.head.appendChild(style);
	const navbarContainer = document.getElementById("navbar");
	navbarContainer.innerHTML = `
<nav class="navbar">
  <div class="logo">
    <a href="#"><img src="assets/logo.png"></a>
  </div>
  <ul class="nav-links">
    <li>
      <a href="home.html">Home</a>
    </li>
    <li>
      <a href="about.html">About Us</a>
    </li>
    <li>
      <a href="explore.html">Explore</a>
    </li>
  </ul>
</nav>
`;
});
