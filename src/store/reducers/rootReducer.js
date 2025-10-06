const innitState = {
  users: [
    { id: 1, name: "duc" },
    { id: 2, name: "Kieu" },
    { id: 3, name: "Kieu Anh Duc" },
  ],
  posts: [],
};

const rootReducer = (state = innitState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log("run into delete user : ", action);

      const user = state.users.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        users: user,
      };
    case "ADD_USER":
      let id = Math.floor(Math.random() * 1001);
      let adduser = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, adduser],
      };
    default:
      return state;
  }
};

export default rootReducer;
