import React,{useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import axios from 'axios';
//Kết nối redux
import {connect} from 'react-redux';
import {layDanhMucKhoaHocAction} from '../../redux/actions/QuanLyKhoaHocAction';
function Header(props) {

  const [state,setState] = useState({
                                      mangDanhMucKhoaHoc:[]
                                    }); //{}: là giá trị khởi tạo ban đầu của state
  //Tương đương reactClassComponent
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mangDanhMucKhoaHoc:[]
  //   }
  // }
  


  //useEffect thay thế cho lifecycle của react:
  //componentDidMount, componentDidUpdate và componentWillUnmount
  //Nhận vào function => thực thi function đó ứng với các lifecycle
  useEffect(()=>{
    //Gọi ajax
    // axios({
    //   url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
    //   method:'GET'
    // }).then(result=>{
    //   // console.log(result);
    //   setState({mangDanhMucKhoaHoc:result.data});
    // }).catch(error=>{
    //   console.log(error.response.data)
    // })

    props.layDanhMucKhoaHoc();
  },[]) //Tham số thứ 2 [], tương đương componentDidMount

  const renderDanhMucKhoaHoc = () => {
    return props.mangDanhMucKhoaHoc.map((dmkh,index) => {
      return  <a key={index} className="dropdown-item" href="#">{dmkh.tenDanhMuc}</a>
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{ backgroundColor: '#e3f2fd' }}>
      <NavLink to='/' className="navbar-brand">Cybersoft</NavLink>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink  to='/' className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danh mục khóa học</a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              {renderDanhMucKhoaHoc()}
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

  )
}


const mapStateToProps = (state) =>{
  return {
    mangDanhMucKhoaHoc: state.QuanLyKhoaHocReducer.mangDanhMucKhoaHoc
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    layDanhMucKhoaHoc: ()=>{
      dispatch(layDanhMucKhoaHocAction());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);