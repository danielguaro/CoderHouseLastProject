import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('information.db');

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'CREATE TABLE IF NOT EXISTS information (id INTEGER PRIMARY KEY NOT NULL, owner TEXT NOT NULL, petName TEXT NOT NULL, email TEXT NOT NULL, photo TEXT NOT NULL, sex TEXT NOT NULL, password TEXT NOT NULL)',
				[],
				() => {
					resolve();
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};

export const insertInformation = (
	owner,
	petName,
	email,
	photo,
	sex,
	password
) => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'INSERT INTO information (owner, petName, email, photo, sex, password) VALUES (?,?,?,?,?,?);',
				[owner, petName, email, photo, sex, password],
				(_, result) => resolve(result),
				(_, err) => reject(err)
			);
		});
	});
	return promise;
};

export const fetchInformation = () => {
	const promise = new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				'SELECT * FROM information;',
				[],
				(_, result) => {
					let data = [];
					let len = result.rows.length;
					for (let i = 0; i < len; i++) {
						let row = result.rows.item(i);
						data.push(row);
					}
					resolve(data);
				},
				(_, err) => {
					reject(err);
				}
			);
		});
	});
	return promise;
};
