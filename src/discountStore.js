
// day la cac ham unit

//kiem tra so tien hop le
export function validateSoTien(sotien){
    if(sotien == null || sotien == undefined){ // chi la number hop le 
        return "vui long nhap so tien";
    }
    if(sotien <=0){ // so >0 
        return "So tien phai > 0";
    }
    return "";
}

export function validatePhanTram(phantram){
    if(phantram == null || phantram == undefined){ // chi la number hop le 
        return "vui long nhap phan tram giam gia";
    }
    if(phantram < 0 || phantram >100 ){ // so >= 0 va  <=100 
        return "vui long nhap phan tram tu 0-100";
    }
    return ""; // neu khong bi vi pham luat nao 
}

// ham business : nghiep vu tinh tien giam gia 

export function tinhTien(sotien,giamgia){
    //validate so tien 
    const sotienError = validateSoTien(Number(sotien)); // ep kieu ve number
    if(sotienError !="") return sotienError;
    // validate phan tram
    const giamgiaError = validatePhanTram(Number(giamgia));
    if(giamgiaError != "") return giamgiaError;
    //tinh toan
    const kq = tinhTienGiamGia(sotien,giamgia);
    return "So tien phai tra la: " + kq;

}

// ham unit
export function tinhTienGiamGia(sotien, phantram){
    const giamgia = (sotien * phantram) / 100;
    const kq = sotien - giamgia;

    return kq;
}



// giu tuong tich , day la ham duoc export ra
if (typeof window !== "undefined"){
    window.tinhTien = tinhTien;
}

// ben trang html khong bao gio tu dong tinh toan con xu ly la file rieng

// ben trang html chi goi ham nghiep vu thoi 