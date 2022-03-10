import {
	FILTER_PROGRAM,
	SELECTED_PROGRAM,
	SELECT_DESCRIPTION,
} from '../actions/description.action';

import { DESCRIPTION } from '../../data/description';

/* Importamos la acción que queremos que realice*/

//Setiar estado inicial para el reductor
const initialState = {
	description: DESCRIPTION, // En un escenario real, probablemente sería Null o arreglo vacio, ya que estos datos NO estarían en local, si no, proveniendo de un servicio. Dicho arreglo, posterior/ se llenaría a traves de la acción que nosotros disparemos y lo llene.
	filteredDescription: [],
	selected: null,
};

//Creación de función con estado(siempre será el initialState) y acción(la cual será siempre null por defecto)
export const descriptionReducer = (state = initialState, action) => {
	/* Aquí se evalua la acción despachada*/
	switch (action.type) {
		case SELECT_DESCRIPTION:
			const indexProgram = state.description.findIndex(
				(prog) => prog.id === action.categoryId
			);
			if (indexProgram === -1) return state;
			return {
				...state,
				selected: state.description[indexProgram],
			};
		case FILTER_PROGRAM:
			return {
				...state,
				filteredDescription: state.description.filter(
					(program) => program.category === action.programId
				),
			};
		default:
			return state;
	}
};

// COn lo anterior tenemos nuestro primer Reductor, que se encarga de setiar los valores de DESCRIPTION como valor inicial
