import { View, Text, SafeAreaView } from 'react-native';
import ExpenseHistory from '../components/ExpenseHistory/ExpenseHistory';
import IncomeBox from '../components/IncomeBox/IncomeBox';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
	const navigation = useNavigation();
	const expence = useSelector((state) => state.expense);
	const expenseList = useSelector((state) => state.expense.expenseList);

	return (
		<SafeAreaView className='flex-1'>
			<View className='flex justify-center items-center'>
				<View className='flex justify-center items-center w-full h-[180px] px-3 py-4 bg-primary'>
					<Text className='text-white text-base'>Total Balance</Text>
					<Text className='text-white text-3xl font-bold pt-2 tracking-wide'>
						$ {expence.totalAmount}
					</Text>
				</View>
				<IncomeBox
					incomeAmount={expence.incomeAmount}
					expenseAmount={expence.expenseAmount}
				/>
			</View>
			<View style={{ flex: 1 }}>
				{expenseList.length > 0 ? <ExpenseHistory /> : null}
			</View>
			<View className='justify-center items-center translate-x-1/2'>
				<Icon
					name='add-circle'
					type='ionicon'
					color='#00AA70'
					size='70'
					onPress={() => navigation.navigate('AddExpense')}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
