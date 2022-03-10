import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const signUpEmailPassword = async (email, password) => {
	try {
		const authState = await auth().createUserWithEmailAndPassword(
			email,
			password
		);
		return authState;
	} catch (err) {
		return err;
	}
};

export const saveUserInDataBase = async (uid, userData) => {
	try {
		return await database().ref(`/users/${uid}`).set(userData);
	} catch (err) {
		return err;
	}
};

export const signInEmailAndPassword = async (email, password) => {
	try {
		const authState = await auth().signInWithEmailAndPassword(email, password);
		return authState;
	} catch (err) {
		return err;
	}
};

export const pullingDataBase = async (uid) => {
	try {
		return await database().ref(`/users/${uid}`).once('value');
	} catch (err) {
		return err;
	}
};

export const logOffUser = async () => {
	try {
		const authState = await auth().signOut();
		return authState;
	} catch (err) {
		return err;
	}
};
