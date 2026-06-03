
// ham unit : kiem tra gia tri o nhap lieu kwh
export function validateSokwh(sokwh){
    // 1. bat buoc nhap
    if(sokwh == "" || sokwh == null || sokwh == undefined){
        return "Vui long nhap so kwh(batbuoc)";
    }
    // 2. phai la so number , luc nao input cung la chuoi string nen phai ep kieu
    const parsedNumber =  Number(sokwh);
    if(!Number.isFinite(parsedNumber)){ // kiem tra la number chua
        return "So kwh phai la so";
    }
    // 3. number phai > 0 
    if(parsedNumber < 0 ){
        return "So kwh phai > 0";
    }
    // 4. truong hop cuoi cung la khong bi loi gi ca (dung)
    return "";      
}

/*
0-50kwh = 1.800vnd/kwh
51-100 = 2000
>100 = 2500
*/

// ham unit : tinh tien dien theo so kwh da su dung
export function tinhTienDienSuDung(sokwh){
    var tongTien = 0;
    // truong hop 1
    if(sokwh <= 50){ // so am da bao loi roi , so kwh>0 && sokwh<=50
        return sokwh * 1800; // return luon ket qua
    }
    // truong hop thu 2 phai tinh cong them 50kwh dau gia 1800
    tongTien += 50 * 1800;
    if(sokwh <=100){
        tongTien += (sokwh-50)*2000; // cong don len 
        return tongTien;
    }
    // truong hop thu 3 tren 100kwh 
    tongTien += 50*2000; // lan 2 da co 50*1800
    tongTien += (sokwh-100)*2500;
    return tongTien;

}

// ham business : tinh tien dien 
export function tinhTienDien(sokwh){
    // phai co ham unit bat buoc nhap , sokwh phai hople ...
    const soKwhError = validateSokwh(sokwh);
    if(soKwhError){ // neu no co gia tri thi dung
        return soKwhError;
    }

    var soTien = tinhTienDienSuDung(sokwh);
    if(soTien <= 20000){
        return `<span style="color:red;">So tien phai tra la ${soTien}</span>`;
    }else if(soTien <=50000){
        return `<span style="color:blue;">So tien phai tra la ${soTien}</span>`;
    }else {return `<span style="color:green;">So tien phai tra la ${soTien}</span>`;}

}


// chi export ham business thoi 
if (typeof window !== "undefined"){
    window.tinhTienDien = tinhTienDien;
}

