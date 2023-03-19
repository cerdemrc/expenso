import { View, Text, FlatList } from 'react-native';
import ExpenseHistoryItem from './ExpenseHistoryItem';
import { useSelector } from 'react-redux';

const ExpenseHistory = () => {
	const expenseList = useSelector((state) => state.expense.expenseList);
	const expenseAmount = useSelector((state) => state.expense.expenseAmount);

	return (
		<View className='w-full mt-36 px-5'>
			<View className='flex-row pb-3 justify-between'>
				<Text className='font-bold text-lg tracking-wide'>Total Expense</Text>
				<Text className='font-bold text-lg tracking-wide'>
					$ {expenseAmount}
				</Text>
			</View>
			<FlatList
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				data={expenseList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<ExpenseHistoryItem
						key={item.id}
						title={item.title}
						amount={item.amount}
					/>
				)}
			/>
		</View>
	);
};

export default ExpenseHistory;
