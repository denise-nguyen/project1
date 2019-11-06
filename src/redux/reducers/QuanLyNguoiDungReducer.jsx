import {actionTypes} from '../constants/QuanLyNguoiDungConstant';

const initialState = {
    mangNguoiDung:[]
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LAY_DANH_SACH_NGUOI_TAO:{
            state.mangNguoiDung = action.mangNguoiDung;
            return {...state}
        }
    }

    
    return {...state}
}
