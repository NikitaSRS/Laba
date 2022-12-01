import React from "react";
import './App.css';
/*import Login from "./Login";
import Registration from "./Registration"*/
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Request from "./Requst";
import ForumList from "./forumList";
export default function App() {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Login">LogIn</Link>
                        </li>
                        <li>
                            <Link to="/Registration">Registration</Link>
                        </li>
                        <li>
                            <Link to="/forumList">Forum</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/forumList" element={<ForumList />} />
                </Routes>
            </div>
    );
}



function Home() {
    return<> <h2>Home</h2>
        </>;
}



