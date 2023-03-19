import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
//screens
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerTitle: 'Expenso' }}>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='AddExpense' component={AddExpenseScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};
