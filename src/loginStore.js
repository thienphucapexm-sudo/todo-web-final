// ham kiem tra email hop le (HAM UNIT)
export function checkEmail(email){ // xuat khau ra cho khac xai duoc
    if(email == ""){
        return false;
    }else if(email.length < 3){
        return false;
    }
    return true; // true false thi phai return du 2 truong hop 
}

// ham kiem tra mat khau hop le (HAM UNIT)
export function checkPassword(password){
    if(password == ""){
        return false;
    }else if(password.length < 6){
        return false;
    }
    return true;
}

// ham nghiep vu dang nhap ( GOI CAC HAM CON )
export function login(emailInput , passswordInput){
    //kiem tra email
    var isValidEmail = checkEmail(emailInput);
    if(!isValidEmail){
        return "Email khong hop le";
    }

    //kiemtramatkhau
    var isValidPassword = checkPassword(passswordInput);
    if(!isValidPassword){
        return "pass khong hop le";
    }

    //kiemtra tai khoan co ton tai khong , vd admin@gmail.com , 123456

    if(emailInput=="admin@gmail.com" && passswordInput=="123456"){
        return "ok";
    }else {
        return "fail";
    }

}
// giu tuong tich
if (typeof window !== "undefined"){
    window.login =login;
}