import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./operations";

const handlePending = (state) => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: { name: null, email: null, message: null },
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(addUser.pending, handlePending)
			.addCase(addUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.user = action.payload;
			})
			.addCase(addUser.rejected, handleRejected);
	},
});

export const userReducer = userSlice.reducer;
