document.querySelectorAll('.sidebar a').forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		var targetId = this.getAttribute('href').substring(1); // Eemaldame "#" sümboli
		var targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
			document.querySelectorAll('.sidebar a').forEach(function(link) {
				link.classList.remove('active');
			});
			this.classList.add('active');
		}
	});
});
window.addEventListener('scroll', function() {
	document.querySelectorAll('.event').forEach(function(event) {
		var top = window.scrollY;
		var offset = event.offsetTop;
		var id = event.getAttribute('id');
		var link = document.querySelector('.sidebar a[href="#' + id + '"]');
		if (top >= offset) {
			document.querySelectorAll('.sidebar a').forEach(function(link) {
				link.classList.remove('active');
			});
			link.classList.add('active');
		}
	});
});
document.querySelectorAll('.event').forEach(function(event) {
	event.addEventListener('click', function() {
		this.scrollIntoView({behavior: 'smooth'});
	});
});
function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = src;
}
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
