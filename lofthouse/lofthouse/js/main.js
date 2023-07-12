/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
mask('[data-tel-input]');

// Удаляєм '+' якзо більше нічого не введено, щоб показати placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});

/* Yandex Map */

// Функція ymaps.ready() буде визвана, коли
// загрузятся всі компоненти API, а також коли буде готово DOM-дерево.
ymaps.ready(init);
function init(){
	// Создание карты.
	var map = new ymaps.Map('map', {
		// Координати центра карти.
		// Порядок за замовчуванням: «широта, довгота».
		// інструмент виявлення координат.
		center: [59.943543, 30.338928],
		// Уровень масштабації.
		// від 0 (весь світ) до 19.
		zoom: 16,
	});

	var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
		},
		{
			iconLayout: 'default#image',
			iconImageHref: './img/map/location-pin.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);

	map.controls.remove('geolocationControl'); // удаляєм геолокацию
	map.controls.remove('searchControl'); // удаляєм пошук
	map.controls.remove('trafficControl'); // удаляєм контроль трафика
	map.controls.remove('typeSelector'); // удаляєм тіп

	// map.controls.remove('fullscreenControl'); // удаляєм кнопку перехода в полноэкранний режим
	// map.controls.remove('zoomControl'); // удаляєм контрол зумма
	map.controls.remove('rulerControl'); // удаляєм контрол правил
	map.behaviors.disable(['scrollZoom']); // відключаєм скролл карти (опционально)

	map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();

}