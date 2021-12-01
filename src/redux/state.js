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
        { id: 1, message: "qwerty" },
        { id: 2, message: "qwerty2" },
        { id: 3, message: "qwerty3" },
        { id: 4, message: "qwerty4" }
      ],
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Valera" },
        { id: 4, name: "Sveta" }
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
}


export default store;