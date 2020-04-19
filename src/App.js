import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Link, Switch } from "react-router-dom"
import CityList from './pages/CityList';
import Home from "./pages/Home"
import Map from './pages/Map'
import Fn404 from "./pages/Fn404"
function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/home">首页</Link>
        <Link to="/citylist">城市列表</Link>
        <Link to="/map">地图路线</Link>
        <Switch>
          {/* 路由重定向 */}
          <Redirect exact from='/' to='/home' />
          {/* 一级路由 */}
          <Route path="/home" component={Home} />
          <Route path="/citylist" component={CityList} />
          <Route path="/map" component={Map} />
          {/* 404页面 */}
          <Route component={Fn404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
