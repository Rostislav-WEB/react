let state = {
  profilePage: {
    posts: [  
      { id: 1, message: "Rostislav222", likesCount: 43 },
      { id: 2, message: "34433434", likesCount: 15 },
      { id: 3, message: "blabla", likesCount: 2323 },
    ],
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
      {name: '1 пидр'},
      {name: '2 пидр'},
      {name: '3 пидр'}
    ]
  },
};

export let addPost = (postMessage) => {
  let newPost = {
     id: 5, message: postMessage, likesCount: 0 
  }
  state.profilePage.posts.push(newPost);
}

export default state;