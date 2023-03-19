import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	expenseList: [],
	totalAmount: 0,
	expenseAmount: 0,
	incomeAmount: 0,
};

const expenceSlice = createSlice({
	name: 'expense',
	initialState: initialState,
	reducers: {
		addExpense: (state, action) => {
			state.expenseList.push(action.payload);
			const amount = parseInt(action.payload.amount);
			state.totalAmount += amount;
			if (amount < 0) {
				state.expenseAmount += amount;
			} else {
				state.incomeAmount += amount;
			}
		},
	},
});

export const { addExpense } = expenceSlice.actions;

export default expenceSlice.reducer;
