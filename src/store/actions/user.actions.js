import {
	URL_API,
	URL_AUTH_SIGNIN,
	URL_AUTH_SIGNUP,
	URL_AUTH_USER_DATE,
	URL_SIGNUP,
} from '../../styles/database';
import { fetchInformation, insertInformation } from '../../db/idexDB';
import {
	logOffUser,
	pullingDataBase,
	saveUserInDataBase,
	signInEmailAndPassword,
	signUpEmailPassword,
} from '../../firebase/auth';

export const SIGNUP = 'SIGNUP';
export const SIGNUPERROR = 'SIGNUPERROR';
export const SIGNUPREQUEST = 'SIGNUPREQUEST';
export const SIGNIN = 'SIGNIN';
export const USERDATA = 'USERDATA';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOAD_PLACE = 'LOAD_PLACE';

/* Esta constante servirá como identificador, en el que seleccionamos la acción que se despachará*/

export const signUp = (owner, petName, sex, photo, email, password) => {
	return async (dispatch) => {
		dispatch({
			type: SIGNUPREQUEST,
		});

		// const response = await fetch(URL_AUTH_SIGNUP, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		email,
		// 		password,
		// 		returnSecureToken: true,
		// 	}),
		// });
		// const data = await response.json();
		// console.log(data);

		// if (data.error) {
		// 	return dispatch({
		// 		type: SIGNUPERROR,
		// 		payload: data.error.errors[0].message,
		// 	});
		// }
		// const userInfo = await userData(owner, petName, sex, photo, data.localId);
		// dispatch({
		// 	type: SIGNUP,
		// 	token: data.idToken,
		// 	userId: data.localId,
		// 	userInfo,
		// });

		try {
			const responseAuth = await signUpEmailPassword(email, password);
			const uid = responseAuth.user._user.uid;
			const userData = {
				owner,
				petName,
				sex,
				photo,
				email,
			};

			const userDataResponse = await saveUserInDataBase(uid, userData);

			const result = await insertInformation(
				owner,
				petName,
				sex,
				photo,
				email,
				password
			);

			dispatch({
				type: SIGNUP,
				token: '',
				userInfo: userData,
				id: result.isertId,
			});
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				return dispatch({
					type: SIGNUPERROR,
					payload: 'auth/email-already-in-use',
				});
			}

			if (error.code === 'auth/invalid-email') {
				return dispatch({
					type: SIGNUPERROR,
					payload: 'auth/invalid-email',
				});
			}
		}
	};
};

// export const userData = async (owner, petName, sex, photo, localId) => {
// 	try {
// 		const response = await fetch(`${URL_API}users/${localId}.json`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				date: Date.now(),
// 				owner,
// 				petName,
// 				sex,
// 				photo,
// 			}),
// 		});

// 		const data = await response.json();
// 		return data;
// 	} catch (error) {
// 		console.log('error', error);
// 	}
// };

export const signIn = (email, password) => {
	return async (dispatch) => {
		dispatch({
			type: SIGNUPREQUEST,
		});

		try {
			const responseAuth = await signInEmailAndPassword(email, password);

			const uid = responseAuth.user._user.uid;

			const userDataResponse = await pullingDataBase(uid);
			const data = userDataResponse._snapshot.value;

			dispatch({
				type: SIGNIN,
				token: '',
				userInfo: data,
			});
		} catch (error) {
			// if (error.code === 'auth/email-already-in-use') {
			// 	return dispatch({
			// 		type: SIGNUPERROR,
			// 		payload: 'auth/email-already-in-use',
			// 	});
			// }
			// if (error.code === 'auth/invalid-email') {
			// 	return dispatch({
			// 		type: SIGNUPERROR,
			// 		payload: 'auth/invalid-email',
			// 	});
			// }
			console.log(error);
		}
	};
};

export const logOff = () => {
	return async (dispatch) => {
		try {
			const responseAuth = await logOffUser();
			dispatch({
				type: LOGOUT_USER,
				token: '',
				userInfo: responseAuth,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const loadPlaces = () => {
	return async (dispatch) => {
		try {
			const places = await fetchInformation();
			dispatch({
				type: LOAD_PLACE,
				payload: places,
			});
		} catch (e) {
			console.warn(e);
		}
	};
};
