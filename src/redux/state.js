let rerenderEntireTree = () => {
  console.log('State changed');
}
let state = {
  profilePage: {
    posts: [  
      { id: 1, message: "Rostislav222", likesCount: 43 },
      { id: 2, message: "34433434", likesCount: 15 },
      { id: 3, message: "blabla", likesCount: 2323 },
    ],
    newPostText: 'it-camasutra',
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Dima" },
      { id: 2, message: "Andrey" },
      { id: 3, message: "Valera" },
      { id: 4, message: "Sveta" }
    ],
    dialogs: [
      { id: 1, name: "hohoh" },
      { id: 2, name: "yoyoy" },
      { id: 3, name: "yo" },
      { id: 4, name: "sdds" }
    ]
  },
  sidebar: {
    friends: [
      {name: 'пидр1'},
      {name: 'пидр2'},
      {name: 'пидр3'}
    ]
  },
};

export const addPost = () => {
  let newPost = {
     id: 5, message: state.profilePage.newPostText, likesCount: 0 
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;