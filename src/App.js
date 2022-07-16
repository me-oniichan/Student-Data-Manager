import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddData from "./Component/AddData";
import { SET_DATA } from "./Context/action.type";
import reducer from "./Context/reducer";
import { firebaseConfig } from "./Firebase/firebase_config";
import Home from "./Home";

const firebase = initializeApp(firebaseConfig);

const initialVal = {
    allData: [],
    dataKey: null,
    updateData: null,
    loading: false,
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialVal);

    useEffect(async () => {
        //TODO: initiate loading
        const fetchData = ref(getDatabase(), "/");
        onValue(fetchData, (snapshot) => {
            dispatch({
                type: SET_DATA,
                payload: snapshot.val(),
            });
        });
    }, []);

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
