import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddData from "./Component/AddData";
import { SET_DATA, SET_LOADING } from "./Context/action.type";
import reducer from "./Context/reducer";
import { app } from "./Firebase/firebase_config";
import Home from "./Home";
import dataContext from "./Context/dataContext";

const initialVal = {
    allData: [],
    dataKey: null,
    updateData: null,
    loading: 1,
};
    
function App() {
    const [state, dispatch] = useReducer(reducer, initialVal);

    const getData = async () => {

        dispatch({
            type: SET_LOADING,
            payload: true,
        });

        const fetchData = ref(getDatabase(app), "");
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
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Router>
            <dataContext.Provider value={{ state, dispatch }}>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="add" element={<AddData db={app}/>}></Route>
                    </Route>
                </Routes>
            </dataContext.Provider>
        </Router>
    );
}

export default App;
