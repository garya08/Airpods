const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');


chooseColor.forEach(function(element) {
	element.addEventListener('click', open)
})

function open(evt) {
	const target = evt.currentTarget;
	const color = target.dataset.color;		/* получение значения хранящегося в data атрибуте */
	const contentActive = document.querySelectorAll(`.${color}`)	/* получение всех элементов с классом соответствующим data атрибуту */

	/* нажатие на кнопку choose color*/
	chooseColor.forEach(function(item) {
		item.classList.remove('active')
	})
	target.classList.add('active')


	/* замена активности в соответствии с цветом */
	contentItem.forEach(function(item) {
		item.classList.remove('active')
	})

	contentActive.forEach(function(item) {
		item.classList.add('active')
	})
}
