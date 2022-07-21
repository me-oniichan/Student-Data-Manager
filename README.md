# A simple React app to Read, Write and Remove data from firebase-realtime database

To read the data

```js
const fetchData = ref(getDatabase(app), "/");
onValue(fetchData, (snapshot) => {
    dispatch({
        type: SET_DATA,
        payload: snapshot.val(),
    });

    dispatch({
        type: SET_LOADING,
        payload: false,
    });
});
```

To write data

```js
set(ref(getDatabase(db), "/" + key), {
    name: data,
    remark,
    result: sum(marks) >= 170,
    math: marks[0],
    physics: marks[1],
    english: marks[2],
    chemistry: marks[3],
    computer: marks[4],
});
```

To remove data

```js
remove(ref(getDatabase(app), "/" + key))
    .then(() => {
        console.log("removed");
    })
    .catch((err) => {
        console.log(err);
    });
```
Hooks used: `useState`, `useContext`, `useReducer`, `createBrowserHistory`

Reducer action types:
```js
export const SET_LOADING = "SET_LOADING";
export const SET_DATA = "SET_DATA";
export const DATA_TO_UPDATE = "DATA_TO_UPDATE";
```