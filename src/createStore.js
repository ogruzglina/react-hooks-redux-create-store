function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState }; //we return a JavaScript object containing the dispatch method. In Redux terms, 
                      //this returned JavaScript object is called the store, so we've named the method createStore because that's what it does.
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;//state.count;
}

let store = createStore(reducer);
store.dispatch({ type: "@@INIT" });

let button = document.getElementById("button");
button.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});
