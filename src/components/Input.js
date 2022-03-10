import {
	Button,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useReducer, useState } from 'react';

import { COLORS } from '../styles/colors';
import { signUp } from '../store/actions/user.actions';
import { useDispatch } from 'react-redux';

export const Input = (props) => {
	const [inputState, setInputState] = useReducer(inputReducer, {
		value: props.initialValue ? props.initialValue : '',
		isValid: props.initialValid,
		touched: false,
	});
	const INPUT_CHANGE = 'INPUT_CHANGE';
	const INPUT_BLUR = 'INPUT_BLUR';
	const dispatch = useDispatch();

	const inputReducer = (state, action) => {
		switch (action.type) {
			case INPUT_CHANGE:
				return {
					...state,
					value: action.value,
					isValid: action.isValid,
				};
			case INPUT_BLUR:
				return {
					...state,
					touched: true,
				};
			default:
				return state;
		}
	};

	const { onInputChange, id, required, email, min, max, minLength, errorText } =
		props;

	useEffect(() => {
		if (inputState.touched) {
			onInputChange(inputState.value, inputState.isValid);
		}
	}, [inputState, onInputChange]);

	const handlerOnChange = (text) => {
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let isValid = true;

		if (required && text.trim().length === 0) isValid = false;

		if (email && !emailRegex.test(text.toLowerCase())) isValid = false;

		if (min != null && +text < min) isValid = false;

		if (max != null && +text > max) isValid = false;

		if (minLength != null && text.length < minLength) isValid = false;

		dispatch({
			type: INPUT_CHANGE,
			value: text,
			isValid: isValid,
		});
	};
	const handlerOnBlur = () => {
		dispatch({ type: INPUT_BLUR });
	};

	return (
		<View style={styles.main}>
			<Text style={styles.label}>Email</Text>
			<TextInput
				style={styles.input}
				{...props}
				placeholder="@Ejemplo.com"
				keyboardType="email-address"
				onChangeText={handlerOnChange}
				onBlur={handlerOnBlur}
				value={inputState.value}
			/>
			{!inputState.isValid && inputState.touched && (
				<Text style={styles.label}> {errorText}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		width: '80%',
		padding: 12,
		margin: 12,
		borderWidth: 1,
		borderColor: COLORS.ultraDarkBlue,
		borderRadius: 10,
		height: '46%',
		backgroundColor: COLORS.whiteBlue,
		elevation: 6,
	},
	label: {
		marginTop: 10,
		fontWeight: 'bold',
		fontSize: 15,
		color: COLORS.darkBlue,
	},
	input: {
		borderBottomWidth: 1,
		borderColor: COLORS.lightBlue,
	},
});
