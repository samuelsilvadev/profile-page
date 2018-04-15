import { http } from './http';

const _ROUTES = [
	{
		link: 'settings',
		page: 'settings.html'
	},
	{
		link: 'about',
		page: 'about.html'
	}
];

const _links = [...document.querySelectorAll(`[data-js='link-navbar']`) || []];
const _contentRoute = document.querySelector('[data-js="route-content"]');
const removeSelectedLinks = () => _links.forEach(link => link.classList.remove('nav__list__item--active'));

export const addEventLinks = () => {
	_links.forEach(
		link => {
			link.addEventListener('click', (e) => {
				removeSelectedLinks();
				e.target.classList.toggle('nav__list__item--active');
				http.get(`${e.target.textContent}.html`)
					.then(resp =>
						resp.text().then(a => _contentRoute.innerHTML = a)
					);
			}, false);
		}
	)
}
