import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../../data";

const initialState = {
  menuItems: menuItems,
  isSidebarOpen: false,
  isSidebarShrink: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleMenuItem: (state, { payload }) => {
      state.menuItems = state.menuItems.map((item) => {
        if (item.title === payload) {
          item.state = !item.state;
        } else {
          item.state = false;
        }
        return item;
      });
    },
    toggleSidebar:(state,{payload})=>{
       state.isSidebarOpen =  payload;
    }
  },
});

export default sidebarSlice.reducer;
export const { toggleMenuItem ,toggleSidebar } = sidebarSlice.actions;
