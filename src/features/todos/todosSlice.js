import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const data = {
//   lists: [
//     {
//       title: 'Home Chores',
//       tasks: [
//         { title: 'Take out the garbage' },
//         { title: 'Watch my favorite show' },
//         { title: 'Cook dinner' },
//       ],
//     },
//   ],
// };

// refactor to only GET specific todolist array instead of entire object
// export const fetchCurrentTodoList = createAsyncThunk('todos/fetchData', async (id) => {
//   const response = await axios.get('http://localhost:3001/todos/');
//   console.log(response.data.lists.find((list) => list.id === id));
//   return response.data.lists.find((list) => list.id === id)[0];
// });

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:3001/lists?id=0');
  console.log(response.data[0]);
  return response.data[0];
});
export const postReorderedTasks = createAsyncThunk('todos/postReorderedTasks', async (tasks) => {
  const response = await axios.post('http://localhost:3001/todos/');
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: null,
  reducers: {
    reorderTasks(state, action) {
      state.lists[state.selectedListId].tasks = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

// export const selectCurrentTodoList = (state, listId) =>
//   state.todos ? state.todos.lists[listId] : null;

export const selectCurrentList = (state) => state.todos;
export const selectTitle = (state) => state.todos.title;
export const selectTasks = (state) => state.todos.tasks;
export const { reorderTasks } = todosSlice.actions;
export default todosSlice.reducer;
