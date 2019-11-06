import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
export default class CourseList extends Component {



    renderKhoaHoc = () => {
        //đầu vào là mảng khoá học 
        let { mangKhoaHoc } = this.props;
        return mangKhoaHoc.map((khoaHoc, index) => {
            return (
                <div className="col-3">
                    <div className="card text-white bg-primary">
                        <img className="card-img-top" src={khoaHoc.hinhAnh} alt />
                        <div className="card-body">
                            <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
                            <NavLink to={`/coursedetail/${khoaHoc.maKhoaHoc}`} className="btn btn-success">Đăng ký</NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderKhoaHoc()}
                </div>
            </div>
        )
    }
}
