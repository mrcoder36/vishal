document.addEventListener("DOMContentLoaded", () => {
	// Initialize EmailJS
	emailjs.init("uPoiLsHYpf2O5MIOH");

	// Cursor Glow Effect
	const cursorGlow = document.querySelector(".cursor-glow");
	document.addEventListener("mousemove", (e) => {
		cursorGlow.style.left = e.clientX + "px";
		cursorGlow.style.top = e.clientY + "px";
	});

	// Infinite Scroll for Skills
	const skillsTrack = document.querySelector(".skills-track");
	const skills = Array.from(skillsTrack.children);

	// Duplicate skills
	skills.forEach((skill) => {
		const clone = skill.cloneNode(true);
		skillsTrack.appendChild(clone);
	});

	// Smooth Scroll for Navigation
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	// Mobile Menu Toggle
	const mobileToggle = document.querySelector(".mobile-menu-toggle");
	const navLinks = document.querySelector(".nav-links");

	mobileToggle.addEventListener("click", () => {
		if (navLinks.style.display === "flex") {
			navLinks.style.display = "none";
		} else {
			navLinks.style.display = "flex";
			navLinks.style.flexDirection = "column";
			navLinks.style.position = "absolute";
			navLinks.style.top = "100%";
			navLinks.style.left = "0";
			navLinks.style.width = "100%";
			navLinks.style.background = "rgba(10, 10, 10, 0.95)";
			navLinks.style.padding = "2rem";
			navLinks.style.textAlign = "center";
		}
	});

	// Contact Form Submission
	const contactForm = document.getElementById("contact-form");

	contactForm.addEventListener("submit", function (e) {
		e.preventDefault();

		// Get form button
		const submitBtn = contactForm.querySelector('button[type="submit"]');
		const originalBtnText = submitBtn.innerHTML;

		// Change button text to show loading state
		submitBtn.innerHTML = "Sending...";
		submitBtn.disabled = true;

		// Send email using EmailJS
		emailjs.sendForm("service_82p2x2n", "template_179ao97", this).then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);

				// Show success alert
				alert(
					"✅ Message sent successfully! I'll get back to you soon."
				);

				// Reset form
				contactForm.reset();

				// Reset button
				submitBtn.innerHTML = originalBtnText;
				submitBtn.disabled = false;
			},
			function (error) {
				console.log("FAILED...", error);

				// Show error alert
				alert(
					"❌ Oops! Something went wrong. Please try again or email me directly at vishalkushwaha3637@gmail.com"
				);

				// Reset button
				submitBtn.innerHTML = originalBtnText;
				submitBtn.disabled = false;
			}
		);
	});
});
