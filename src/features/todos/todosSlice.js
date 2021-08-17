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
  const response = await axios.get('http://localhost:3001/lists');
  console.log(response.data);
  return response.data;
});

export const patchUpdateTaskOrder = createAsyncThunk(
  'todos/patchUpdateTaskOrder',
  async (tasks, { getState }) => {
    const id = getState().todos.selectedProjectId;
    const response = await axios.patch(`http://localhost:3001/lists/${id}`, { tasks: tasks });
    return response.data;
  }
);

// BUGGED
export const patchUpdateListOrder = createAsyncThunk(
  'todos/patchUpdateListOrder',
  async (lists, { getState }) => {
    const projects = getState().todos.projects;
    const response = await axios.patch('http://localhost:3001/lists', projects);
    return response.data;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    selectedProjectId: 0,
    projects: [],
  },
  reducers: {
    updateTaskOrder(state, action) {
      state.projects[state.selectedProjectId].tasks = action.payload;
    },
    updateListOrder(state, action) {
      state.projects = action.payload;
    },
    addNewTask(state, action) {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.projects = action.payload;
    },
  },
});

// export const selectCurrentTodoList = (state, listId) =>
//   state.todos ? state.todos.lists[listId] : null;

export const selectCurrentList = (state) =>
  state.todos.projects ? state.todos.projects[state.todos.selectedProjectId] : null;
export const selectTasks = (state) =>
  state.todos.projects ? state.todos.projects[state.todos.selectedProjectId].tasks : null;
export const selectLists = (state) => (state.todos.projects ? state.todos.projects : null);
// export const selectTitle = (state) => state.todos.title;

export const { updateTaskOrder, updateListOrder, addNewTask } = todosSlice.actions;
export default todosSlice.reducer;
