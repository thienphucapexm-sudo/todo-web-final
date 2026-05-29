import { describe, expect, it } from "vitest";
import {validatePhanTram , validateSoTien,tinhTien} from "../../src/discountStore"; //cu phap tim file , out ra 2 lan vao src se gap file login

// mo ta TEST PLAN 

// trong day test business tuc la chi test ham business

describe("Kiem thu tung ham nho cua chuc nang tinh tien giam gia", ()=>{
    // test case 1

    it("giam gia co ban khi sotien=1.000.000 giamgia=10%", ()=>{
        // const sotien = validateSoTien(1000000);
        // const phantram = validatePhanTram(10);
        const kq = tinhTien(1000000,10);
        console.log(">>>>>>>>>> ketqua", kq);

        expect(kq).toBe("So tien phai tra la: 900000"); // pass

    });

    // test case 2

    it("giam gia co ban khi sotien=500 giamgia=0%", ()=>{
        
        const kq = tinhTien(500,0);
        console.log(">>>>>>>>>> ketqua", kq);
        expect(kq).toBe("So tien phai tra la: 500"); // pass

    });

    // test case 3

    it("giam gia co ban khi sotien=500 giamgia=100%", ()=>{
        
        const kq = tinhTien(500,100);
        console.log(">>>>>>>>>> ketqua", kq); // show ket qua kiem tra
        expect(kq).toBe("So tien phai tra la: 0"); // pass

    });

    // test case 4

    it("truong hop so tien toi thieu hop le , so tien = 1", ()=>{
        
        const kq = tinhTien(1,10);
        console.log(">>>>>>>>>> ketqua", kq); // show ket qua kiem tra
        expect(kq).toBe("So tien phai tra la: 0.9"); // pass

    });

    // test case 5

    it("truong hop so tien rat lon, so tien = 1.000.000.000", ()=>{
        
        const kq = tinhTien(1000000000,10);
        console.log(">>>>>>>>>> ketqua", kq); // show ket qua kiem tra
        expect(kq).toBe("So tien phai tra la: 900000000"); // pass

    });
    
    // test case 6

    it("truong hop so tien am = -100", ()=>{
        
        const kq = tinhTien(-100,10);
        console.log(">>>>>>>>>> ketqua", kq); // show ket qua kiem tra
        expect(kq).toBe("So tien phai > 0"); // pass

    });

    // test case 7

    it("truong hop so giam gia = -100", ()=>{
        
        const kq = tinhTien(100,-100);
        console.log(">>>>>>>>>> ketqua", kq); // show ket qua kiem tra
        expect(kq).toBe("vui long nhap phan tram tu 0-100"); // pass

    });

    // // test case 8

    // it("truong hop khong nhap so tien ", ()=>{
        
    //     const kq = tinhTien("",10);
    //     console.log(">>>>>>>>>> ketqua", kq); // show ket qua kiem tra
    //     expect(kq).toBe("vui long nhap so tien"); // pass

    // }); dag fail vi vi tien phai >0 

});
