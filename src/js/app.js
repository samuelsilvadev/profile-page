import { addEventLinks } from './navbar';
import { showEdit, transformToInputs } from './edit';

(function init() {
	window.showEdit = showEdit;
	window.transformToInputs = transformToInputs;
	addEventLinks();
})();
