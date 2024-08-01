document.querySelectorAll('.zoom-container').forEach(container => {
	container.addEventListener('click', function() {
		this.classList.toggle('clicked');
		adjustParentHeight(this);
	});
});

function adjustParentHeight(element) {
	const hiddenText = element.querySelector('.hidden-text');
	const hiddenTextHeight = hiddenText.scrollHeight;

	if (element.classList.contains('clicked')) {
		element.style.height = `${element.offsetHeight + hiddenTextHeight}px`;
	} else {
		element.style.height = `${element.offsetHeight - hiddenTextHeight}px`;
	}
}