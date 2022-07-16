import firebase from "firebase/app";
import "firebase/database";
import { useEffect, useReducer } from "react";
import reducer from "./Context/reducer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddData from "./Component/AddData";
import { firebaseConfig } from "./Firebase/firebase_config";
import Home from "./Home";
import { SET_DATA } from "./Context/action.type";

firebase.initializeApp(firebaseConfig);

const initialVal = {
    allData: [],
    dataKey: null,
    updateData: null,
    loading: false,
};

function App() {

    const [state, dispatch] = useReducer(reducer, initialVal)

    useEffect(async() => {
      //TODO: initiate loading
      const fetchData = await firebase.database().ref("/");
      fetchData.on("value", snapshot=>{
        dispatch(
          {
            type : SET_DATA,
            payload : snapshot.val()
          }
        )
      })
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="add" element={<AddData />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
