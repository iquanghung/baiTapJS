function getELE(id){
    return document.getElementById(id);
}
function hienThiThongTin(){
     layThongTin();
}
function layThongTin(){
    var maNV = getELE("txtMaNV").value;
    var tenNV = getELE("txtTenNV").value;
    var cv = getELE("chucVu").value;
    var luongCoBan = getELE("txtLuongCB").value;
    var gioLam = getELE("txtGioLamTrongThang").value;
    

    getELE("spanTenNV").innerHTML = tenNV;
    getELE("spanMaNV").innerHTML = maNV;
    if (cv == 1){
        getELE("spanChucVu").innerHTML = "Nhân Viên";
        getELE("spanTongLuong").innerHTML = luongCoBan*cv + " VND";
    } else if (cv == 2){
        getELE("spanChucVu").innerHTML = "Trưởng Phòng";
        getELE("spanTongLuong").innerHTML = luongCoBan*cv + " VND";
    } else if (cv == 3){
        getELE("spanChucVu").innerHTML = "Giám Đốc";
        getELE("spanTongLuong").innerHTML = luongCoBan*cv + " VND";
    }

    if (gioLam >= 120){
        getELE("spanXepLoai").innerHTML = "Nhân viên xuất sắc";
    } else if (gioLam >= 100){
        getELE("spanXepLoai").innerHTML = "Nhân viên giỏi";
    } else if (gioLam >= 80){
        getELE("spanXepLoai").innerHTML = "Nhân viên Khá";
    } else if (gioLam >= 50){
        getELE("spanXepLoai").innerHTML = "Nhân viên trung bình";
    }


}
