const _buildDivEdit = (title, value, type) => (
	`<div data-js="box-edit" class="box-edit">
		<h5 class="box-edit__title">${title}</h5>
		<form>
			<input data-js="input-edit" type="text" class="box-edit__field" value="${value}">
			<button type="button" data-js="btn-update" data-js-type="${type}" class="box-edit__button">SAVE</button>
			<button type="button" data-js="btn-cancel-update" class="box-edit__button box-edit__button--nocolor">CANCEL</button>
		</form>
	</div>`
);

const _buildInputEdit = value => (
	`<input data-js="input-edit" type="text" class="box-edit__field" value="${value}">`
);

const _titleTypes = {
	city: 'CITY, STATE & ZIP',
	phone: 'PHONE NUMBER',
	site: 'PERSONAL SITE',
	name: 'NAME'
}

const save = (el) => {
	const elstoUpdate = [...document.querySelectorAll(el)];
	const newValue = document.querySelector('[data-js="input-edit"]').value || '';
	elstoUpdate.forEach(el => el.textContent = newValue);
}

const cancelEdit = () => {
	const boxs = [...document.querySelectorAll('[data-js="box-edit"]')];
	boxs.forEach(box => box.remove());
}

const addEventInButtons = () => {
	const btnupdate = document.querySelector('[data-js="btn-update"]');
	const btnCancelupdate = document.querySelector('[data-js="btn-cancel-update"]');

	btnupdate.addEventListener('click', function () {
		save(`[data-js-value="${this.dataset.jsType}"]`);
		cancelEdit();
	}, false);
	btnCancelupdate.addEventListener('click', cancelEdit, false);
}

export const transformToInputs = () => {
	const spans = [...document.querySelectorAll('[data-js="input"]')];
	spans.forEach(span => {
		span.innerHTML = _buildInputEdit(span.textContent);
	});
}

export const showEdit = (type) => {
	cancelEdit();

	const elementView = document.querySelector(`[data-js='${type}']`);
	const title = _titleTypes[type];
	const value = elementView ? elementView.textContent.trim() : '';

	elementView.innerHTML += (_buildDivEdit(title, value, type));
	window.setTimeout(() => {
		addEventInButtons();
	}, 1000);
}
