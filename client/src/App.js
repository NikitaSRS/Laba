import React from "react";
import './App.css';
/*import Login from "./Login";
import Registration from "./Registration"*/
import Login from "./Login";
import Registration from "./Registration";
import Request from "./Requst";
import ForumList from "./forumList";
import {Link, Route, Routes} from "react-router-dom";
import CreateTheme from "./CreateTheme";
import Reverse from "./Reverse";
export default function App() {
    return (
            <div>
                <nav>
                    <ul>
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
                    <Route path="/forumList" element={<ForumList />} />
                    <Route path="/CreateTheme" element={<CreateTheme />} />
                </Routes>
            </div>
    );
}







