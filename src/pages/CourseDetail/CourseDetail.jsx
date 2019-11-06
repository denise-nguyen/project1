import React, { Component } from 'react';
import {connect} from 'react-redux';
import {layChiTietKhoaHocAction} from '../../redux/actions/QuanLyKhoaHocAction'

class CourseDetail extends Component {


    componentDidMount(){
        //lấy giá trị tham số từ url this.props.match.params.tenThamSo
        let {maKhoaHoc} = this.props.match.params;
        this.props.layThongTinKhoaHoc(maKhoaHoc);
        // console.log(maKhoaHoc);
    }

    render() {
        console.log(this.props.thongTinKhoaHoc)
        let {thongTinKhoaHoc} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>{thongTinKhoaHoc.tenKhoaHoc}</h3>
                        <img src={thongTinKhoaHoc.hinhAnh} width={300} height={200}/>
                    </div>
                    <div className="col-6">
                        <div className="bold" >{thongTinKhoaHoc.moTa}</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = state => (
    {
        thongTinKhoaHoc: state.QuanLyKhoaHocReducer.thongTinKhoaHoc
    }
)
const mapDispatch = dispatch => (
    {
        layThongTinKhoaHoc: (maKhoaHoc) => {
            dispatch(layChiTietKhoaHocAction(maKhoaHoc))
        }
    }
)

export default connect (mapState,mapDispatch)(CourseDetail)