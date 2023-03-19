import { View, Text } from 'react-native';
import React from 'react';
import styles from '../../styles/home.screen.style';
import { Icon } from '@rneui/themed';

const IncomeBoxItem = ({ text, icon, color, amount }) => {
	return (
		<View style={styles.incomeBox}>
			<Icon name='server' type='ionicon' color='#FDC631' size='30' />
			<View style={{ position: 'absolute', top: 36, right: 75 }}>
				<Icon
					name={icon}
					type='ionicon'
					color={color}
					backgroundColor='white'
					borderRadius='10'
					size='17'
				/>
			</View>
			<Text className='pt-1 pb-3'>{text}</Text>
			<Text className='font-bold text-lg' style={{ color: color }}>
				$ {amount}
			</Text>
		</View>
	);
};

export default IncomeBoxItem;
