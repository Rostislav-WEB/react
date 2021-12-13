const FOLLOW = "FOLLOWER";
const UNFOLLOW = "UNFOLOWER";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg",
      followed: false,
      fullName: "Dima",
      status: "Hello i am Dima",
      location: { city: "Говно", country: "Russia" },
    },
    {
      id: 2,
      photoUrl:
        "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg",
      followed: true,
      fullName: "Petya",
      status: "Hello i am Petya",
      location: { city: "Киев", country: "Russia" },
    },
    {
      id: 3,
      photoUrl:
        "https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg",
      followed: true,
      fullName: "Rostislav",
      status: "Hello i am Rostislav",
      location: { city: "Maykop", country: "Russia" },
    },
  ],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};

export const followAC = (usersId) => ({ type: FOLLOW, usersId });
export const unFollowAC = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUSersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
