let store = {
  _state: {
    profilePage: {
      posts: [  
        { id: 1, message: "Rostislav222", likesCount: 43 },
        { id: 2, message: "34433434", likesCount: 15 },
        { id: 3, message: "blabla", likesCount: 2323 },
      ],
      newPostText: '',
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
  },
  _callSubscriber()  {
    console.log('State changed');
  },
  getState () {
    return this._state;
  },
  subscribe (observer) {
    this.rerenderEntireTree = observer;
  },
  dispatch (action) {
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 5, message: this._state.profilePage.newPostText, likesCount: 0 
     }
     this._state.profilePage.posts.push(newPost);
     this._state.profilePage.newPostText = '';
     this.rerenderEntireTree(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this.rerenderEntireTree(this._state);
    }
  },
  addPost ()  {
    let newPost = {
       id: 5, message: this._state.profilePage.newPostText, likesCount: 0 
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree(this._state);
  },
}


export default store;