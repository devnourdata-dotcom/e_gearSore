import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const response = await axios.get(
      "https://gist.githubusercontent.com/devnourdata-dotcom/1986481252e474a9e472e9dd493b4b23/raw/c97948b9c42e6304caf2c3d90ca6902c17227ad8/gistfile1.txt",
    );
    const data = response.data;
    return data;
})

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: null,
        loading: true,
        type: "all",
        singed:false
    },
    reducers: {
        changeType: (state, action) => {
            state.type = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
            .addCase(fetchData.rejected, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
    }
})
export const {
    changeType,
    signIn,
    closeSignInPop
} = dataSlice.actions;
export default dataSlice.reducer
