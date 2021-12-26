window.addEventListener("scroll", function() {
	const header = this.document.querySelector(".header__container");
	header.classList.toggle("sticky", window.scrollY > 0)
})