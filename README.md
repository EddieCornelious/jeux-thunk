## What is this??!!

Instead of just dispatching plain js objects, Jeux-Thunk allows you to dispatch functions which are invoked with 

your Jeux store's dispatch, getState method. Because you are dispatching a function, things can be

done asynchronously now.


### Example

```javascript

const store = Jeux.createStore(....);

function AsyncCall(){
    return function(dispatch, getState){
        dispatch({type : "REQUEST_DATA"})
        fetch('http://example.com/movies.json')
          .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          dispatch({type: "RECEIVE_DATA", movies:myJson})
        });
    }
}

