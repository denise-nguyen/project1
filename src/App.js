import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './templates/HomeTemplate.jsx/Home';
import HomePage from './pages/HomePage/HomePage';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import Header from './components/Header/Header';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import Login from './pages/Login/Login';
import AdminIndex from './pages/Admin/Admin'; //admin của page (export default)
import {Admin} from './templates/AdminTemplate/Admin'; //com AdminTemplate (không đổi tên được vì export)
import AddCourse from './pages/Admin/AddCourse/AddCourse';
import CourseList from './pages/Admin/CourseList/CourseList';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
     
        <Switch>
          <Home exact path='/contact' Component={Contact} />
          <Home exact path='/about' Component={AboutUs} />
          <Home exact path='/coursedetail/:maKhoaHoc' Component={CourseDetail} />
          {/*Sử dụng route để không kế thừa từ template home hoặc tự định nghĩa ra template riêng cho login */}
          <Route exact path='/login' component={Login} />
          <Admin exact path='/admin/addcourse' Component={AddCourse} />
          <Admin exact path='/admin/courselist' Component={CourseList} /> 

          <Admin exact path='/admin' Component={AdminIndex} />
          <Home exact path='/' Component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
