import { View } from 'react-native';
import React from 'react';
import styles from '../../styles/home.screen.style';
import IncomeBoxItem from './IncomeBoxItem';

const IncomeBox = ({ incomeAmount, expenseAmount }) => {
	return (
		<View style={styles.incomeContainer}>
			<IncomeBoxItem
				text='Income'
				icon='arrow-up-circle'
				color='#09B303'
				amount={incomeAmount}
			/>
			<IncomeBoxItem
				text='Expense'
				icon='arrow-down-circle'
				color='#FE060A'
				amount={expenseAmount}
			/>
		</View>
	);
};

export default IncomeBox;
