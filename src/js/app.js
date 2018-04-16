import { addEventLinks } from './navbar';
import { showEdit } from './edit'

;(function init() {
	window.showEdit = showEdit;		
	addEventLinks();
})();

