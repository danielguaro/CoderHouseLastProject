import {
	LOAD_PLACE,
	LOGOUT_USER,
	SIGNIN,
	SIGNUP,
	USERDATA,
} from '../actions/user.actions';

const initialState = {
	// userInfo: {
	// 	petId: '123456',
	// 	petName: 'samba',
	// 	petAvatar: '',
	// 	ownerName: 'Daniel Guarin',
	// },
	token: null,
	userId: null,
	userInfo: null,
	error: false,
	messagge: '',
	loading: false,
	id: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return {
				...state,
				id: action.id,
				token: action.token,
				userId: action.userId,
				userInfo: action.userInfo,
				loading: false,
			};
		case SIGNIN:
			return {
				...state,
				token: action.token,
				userId: action.userId,
				userInfo: action.userInfo,
				loading: false,
			};
		case USERDATA:
			return {
				...state,
				token: action.token,
				userId: action.userId,
			};
		case LOAD_PLACE:
			return {
				...state,
				id: action.payload,
				token: action.token,
				userId: action.userId,
			};
		case LOGOUT_USER:
			return {
				...state,
				token: action.token,
				userId: action.userId,
				userInfo: action.userInfo,
				loading: false,
			};
		default:
			return state;
	}
};
