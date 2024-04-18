import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://nest-backend-roq2.onrender.com";

export const addUser = createAsyncThunk(
	"user/addUser",
	async (data, thunkAPI) => {
		try {
			const response = await axios.post("/user", data);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
