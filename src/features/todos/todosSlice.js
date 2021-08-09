import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const data = {
  lists: [
    {
      title: 'Home Chores',
      tasks: [
        { title: 'Take out the garbage' },
        { title: 'Watch my favorite show' },
        { title: 'Cook dinner' },
      ],
    },
  ],
};

export const fetchData = createAsyncThunk('todos/fetchData', async () => {
  const response = await axios.get('http://localhost:3001/user/');
  console.log(response.data);
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: data,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default todosSlice.reducer;
