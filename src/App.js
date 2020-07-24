import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Application/Login";
import Registration from "./Application/Registration";
import HomeTeacher from "./Application/HomeTeacher";
import HomeStudent from "./Application/HomeStudent";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/TeacherHome" component={HomeTeacher}></Route>
        <Route path="/StudentHome" component={HomeStudent}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" component={Registration}></Route>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
