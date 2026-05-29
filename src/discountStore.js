export function tinhTienGiamGia(sotien, phantram){
    const giamgia = (sotien * phantram) / 100;
    const kq = sotien - giamgia;

    return kq;
}

// giu tuong tich
if (typeof window !== "undefined"){
    window.tinhTienGiamGia = tinhTienGiamGia;
}