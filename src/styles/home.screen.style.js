import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	incomeContainer: {
		flexDirection: 'row',
		gap: 10,
		paddingHorizontal: 20,
		position: 'absolute',
		top: 150,
	},
	incomeBox: {
		backgroundColor: 'white',
		position: 'relative',
		color: 'white',
		flex: 1,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
	},
});
