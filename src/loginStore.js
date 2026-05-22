function login(emailInput , passswordInput){
    //kiem tra email
    if(!emailInput){
        return "Vui long nhap email";
    }

    //kiemtramatkhau
    if(!passswordInput){
        return "Vui long nhap matkhau";
    }

    //kiemtra tai khoan co ton tai khong , vd admin@gmail.com , 123456

    if(emailInput=="admin@gmail.com" && passswordInput=="123456"){
        return "ok";
    }else {
        return "fail";
    }

}