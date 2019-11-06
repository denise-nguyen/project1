import {actionTypes} from '../constants/QuanLyNguoiDungConstant';
import {settings} from '../../common/Config/settings';
import axios from 'axios';
import swal from 'sweetalert2';
import { actionType } from '../constants/QuanLyKhoaHocConstant';

export const dangNhapAction = (thongTinNguoiDung) => {
    console.log(thongTinNguoiDung)
    return dispatch => {
        axios({
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method:'post',
            data:thongTinNguoiDung
        }).then(result => {
            localStorage.setItem(settings.userLogin,JSON.stringify(result.data));
            localStorage.setItem(settings.token,result.data.accessToken)
            console.log(result.data)
        }).catch(error => {
            swal.fire('Thông báo đăng nhập',error.response.data,'error');
        })
    }
}


export const layDanhSachNguoiTaoAction = () => {
    return dispatch => {
        axios({
            url:settings.domain + `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`,
            method:'GET',
        }).then(result => {
            //Sau khi lấy dữ liệu người dùng về từ api => đưa dữ liệu lên reducer
            dispatch({
                type: actionTypes.LAY_DANH_SACH_NGUOI_TAO,
                mangNguoiDung: result.data.filter(nd => nd.maLoaiNguoiDung === 'GV')
            })
            
        }).catch(error => {
            console.log(error.response.data);
        })
    }
}

