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
  // const response = await axios.get(`http://localhost:3001/lists/${id}`);
  const response = await axios.get('http://localhost:3001/lists');
  console.log(response.data);
  return response.data;
});

export const patchUpdateTaskOrder = createAsyncThunk(
  'todos/patchUpdateTaskOrder',
  async (tasks) => {
    const response = await axios.patch('http://localhost:3001/lists/0', { tasks: tasks });
    return response.data;
  }
);

// BUGGED
export const patchUpdateListOrder = createAsyncThunk(
  'todos/patchUpdateListOrder',
  async (lists) => {
    const response = await axios.patch('http://localhost:3001/lists/0', { lists: lists });
    return response.data;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: null,
  reducers: {
    updateTaskOrder(state, action) {
      const { tasks, listId } = action.payload;
      const list = state.find((list) => list.id === listId);
      list.tasks = tasks;
    },
    updateListOrder(state, action) {
      return action.payload;
    },
    addNewTask(state, action) {
      state.tasks.push(action.payload);
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

export const selectCurrentList = (state) => (state.todos ? state.todos[0] : null);
export const selectTasks = (state) => (state.todos ? state.todos[0].tasks : null);
export const selectLists = (state) => (state.todos ? state.todos : null);
// export const selectTitle = (state) => state.todos.title;

export const { updateTaskOrder, updateListOrder, addNewTask } = todosSlice.actions;
export default todosSlice.reducer;
