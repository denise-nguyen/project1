import React,{useEffect} from 'react';
import './HomePage.css';
import {connect} from 'react-redux';
import {layDanhSachKhoaHocAction} from '../../redux/actions/QuanLyKhoaHocAction';
import CourseList from '../../components/CourseList/CourseList';
 function HomePage(props) {

  useEffect(()=>{
    props.layDanhSachKhoaHoc();
  },[])
  return (
    <div>
        <CourseList mangKhoaHoc={props.mangKhoaHoc} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    mangKhoaHoc:state.QuanLyKhoaHocReducer.mangKhoaHoc
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    layDanhSachKhoaHoc: () =>{
      dispatch(layDanhSachKhoaHocAction());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
