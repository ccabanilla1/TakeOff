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
      align-items: center;
    }

    .logo img {
      max-width: 150px;
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding-top: 10px;
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

	const navbar = document.getElementById("navbar");

	let pathPrefix = "";
	if (window.location.pathname.includes("/quiz/")) {
		pathPrefix = "../";
	}

	navbar.innerHTML = `
    <nav class="navbar">
      <div class="logo">
        <a href="${pathPrefix}index.html">
          <img src="${pathPrefix}assets/logo.png" alt="Logo" />
        </a>
      </div>
      <ul class="nav-links">
        <li><a href="${pathPrefix}index.html">Home</a></li>
        <li><a href="${pathPrefix}about.html">About Us</a></li>
        <li><a href="${pathPrefix}explore.html">Explore</a></li>
      </ul>
    </nav>
  `;
});
