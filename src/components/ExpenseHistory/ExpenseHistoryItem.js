import { View, Text } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';

const ExpenseHistoryItem = ({ title, amount }) => {
	return (
		<View className='flex-row justify-between items-center rounded-xl p-4 bg-white my-1'>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Icon
					name='pricetag'
					type='ionicon'
					backgroundColor='#00AA70'
					color='white'
					borderRadius='10'
					size='30'
					style={{ padding: 5 }}
				/>
				<Text className='text-base pl-3'>{title}</Text>
			</View>
			<Text className='text-lg'>{amount}</Text>
		</View>
	);
};

export default ExpenseHistoryItem;
