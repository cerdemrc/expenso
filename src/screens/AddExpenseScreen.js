import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/addexpense.screen.style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/ExpenseSlice';
import { useNavigation } from '@react-navigation/native';

const AddExpenseScreen = () => {
	const [expense, setExpense] = useState([]);
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handleChange = (item, value) => {
		setExpense({ ...expense, [item]: value });
	};

	const addNewExpense = () => {
		dispatch(addExpense({ ...expense, id: Math.random() * 100 }));
		navigation.navigate('Home');
	};

	return (
		<View className='flex-1'>
			<TextInput
				style={styles.input}
				placeholder='Expense Title'
				autoCorrect={false}
				onChangeText={(text) => handleChange('title', text)}
				value={expense.title}
			/>
			<TextInput
				style={styles.input}
				placeholder='Expense Category'
				autoCorrect={false}
				onChangeText={(text) => handleChange('category', text)}
				value={expense.expenseCategory}
			/>
			<TextInput
				style={styles.input}
				placeholder='Expense Amount'
				autoCorrect={false}
				onChangeText={(text) => handleChange('amount', text)}
				value={expense.expenseAmount}
			/>
			<Text className='px-5 text-sm text-gray-500'>
				(if expense - should be put.)
			</Text>
			<TouchableOpacity
				className='p-4 mt-10 mx-5 rounded-xl bg-primary'
				onPress={() => addNewExpense()}>
				<Text className='text-center text-base text-white'>Add Expense</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddExpenseScreen;
