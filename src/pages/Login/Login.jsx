import React, { Component } from 'react';
import {connect} from 'react-redux';
import {dangNhapAction} from '../../redux/actions/QuanLyNguoiDungAction'

 class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan:'',
            matKhau:''
        }
    }
    handleChange=(e)=>{
        let {value,name} = e.target;
        this.setState({[name]:value})
    }
    handleSubmit = (e) => {
        e.preventDefault();//chặn submit của browser
        this.props.dangNhap(this.state); // đưa dữ liệu lên action 
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit}>
                <h3>Đăng nhập</h3>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input className="form-control" name="taiKhoan" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input className="form-control" name="matKhau" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <button>Đăng nhập</button>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dangNhap:(thongTinNguoiDung) => {
            dispatch(dangNhapAction(thongTinNguoiDung))
        }
    }
}
export default connect (null,mapDispatchToProps)(Login)