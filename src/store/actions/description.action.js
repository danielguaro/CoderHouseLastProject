/* Creación del action para el description */
export const SELECT_DESCRIPTION = 'SELECT_DESCRIPTION';
export const FILTER_PROGRAM = 'FILTER_PROGRAM';

/* Esta constante servirá como identificador, en el que seleccionamos la acción que se despachará*/

export const selectDescriptionAction = (id) => ({
	type: SELECT_DESCRIPTION,
	categoryId: id,
});

export const filterProgramAction = (id) => ({
	type: FILTER_PROGRAM,
	programId: id,
});
