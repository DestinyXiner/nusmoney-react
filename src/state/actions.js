export const SELECT_PAGE = 'SELECT_PAGE';
export const PUSH_VIEW = 'PUSH_VIEW';
export const POP_VIEW = 'POP_VIEW';

export function selectPage(page) {
	return {type: SELECT_PAGE, page};
}

export function pushView(view, arg) {
	return {type: PUSH_VIEW, view, arg};
}

export function popView(removeCount) {
	return {type: POP_VIEW, count : removeCount || 1};
}
