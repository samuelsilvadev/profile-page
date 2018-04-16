const _buildDivEdit = (title, value) => (
	`<div data-js="box-edit" class="box-edit">
		<h5 class="box-edit__title">${title}</h5>
		<form>
			<input type="text" class="box-edit__field" value="${value}">
			<button type="button" data-js="btn-update" class="box-edit__button">SAVE</button>
			<button type="button" data-js="btn-cancel-update" class="box-edit__button box-edit__button--nocolor">CANCEL</button>
		</form>
	</div>`
);

const _titleTypes = {
	city: 'CITY, STATE & ZIP',
	phone: 'PHONE NUMBER',
	site: 'PERSONAL SITE',
	name: 'NAME'
}

const save = () => {

}

const cancelEdit = () => {
	const boxs = [...document.querySelectorAll('[data-js="box-edit"]')];
	boxs.forEach(box => box.remove());
}

const addEventInButtons = () => {
	const btnupdate = document.querySelector('[data-js="btn-update"]');
	const btnCancelupdate = document.querySelector('[data-js="btn-cancel-update"]');

	btnupdate.addEventListener('click', save, false);
	btnCancelupdate.addEventListener('click', cancelEdit, false);
}

export const showEdit = (type) => {
	cancelEdit();

	const title = _titleTypes[type];
	const elementView = document.querySelector(`[data-js='${type}']`);
	const value = elementView ? elementView.textContent.trim() : '';

	elementView.innerHTML += (_buildDivEdit(title, value));
	window.setTimeout(() => {
		addEventInButtons();
	}, 1000);
}
