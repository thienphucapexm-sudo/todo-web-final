// ham unit : lay data tu api 

export async function fetchUsers(apiUrl){
    // 1. goi request den api url 
    const response = await fetch(apiUrl); // ham co san cua js , 1 web thi co 2 loai request va response( data || error)
    //debugger; // dung lai chuong trinh de theo doi  ( nhan f12 )
    // neu chay dung thi sau khi nhan nut lay du lieu se dung lai o debugger

    // 1 trang web khong the doi ham 1 goi du lieu roi moi den ham thu 2 (data1,data2...)
    // phai goi du lieu bat dong bo , manh ai nay goi 

    // tren mang co khi cup dien va co khi mat 4g nen phai kiem tra response
    if(!response.ok){
        // resultDiv.innerHTML = "Khong ket noi duoc API URL"; xai ben trang html 
        throw new Error("Khong ket noi duoc API URL"); // quang cai loi do ra
    }
    
    // 2. boc tach du lieu , xu ly ( json , xml )
    const data  = await response.json(); // js co san ham dua ve chuan json
    // them await de xu ly bat dong bo
    // debugger; tro chuot vao data thay 1 mang 10 user

    return data; // nho phai return 
}


// ham unit test validate phai la mang , phai co phan tu , phan tu phai theo quy tac (key theo quy dinh)

// ham khong can bat dong bo vi data da ve 
export function validateUsers(data){
    // kiem tra phia la mang khong 
    // du lieu dang json
    if(!Array.isArray(data)){
        return "data phai la Array";
    }
    // kiem tra co phan tu nao ko
    if(data.length <= 0 ){
        return "khong co phan tu nao";
    }
    // phan tu co dung cau truc quy dinh khong ( phai co id,name,email,phone )
    // CODE DA CHAY QUA 2 HAM NEN PHAI CO PHAN TU 
    const firstUser = data[0];

    var isValid = Boolean(firstUser
        && "id" in firstUser
        && "name" in firstUser
        && "email" in firstUser  
        && (firstUser.address && "city" in firstUser.address)
    ); // data.abc.efg de kiem tra sau hon cai nay hoi gemini lai 

    if(!isValid){ // neu khong hop le 
        return "data cua phan tu khong dung cau truc quy dinh";
    }
}

// HAM BUSINESS 

export async function loadUsers(apiUrl){
    // 1. goi ham lay data 
    const data  = await fetchUsers(apiUrl);  // goi ham async thi phai co await , goi ham ben file Store
    
    console.log('data >>> ',data); // in data ra trong f12 de kiem tra ten bien 
    // 2. kiem tra 
    const error = validateUsers(data);
    if(error !="" && error !=undefined){ // hoac la if(error) tuc la file no ton tai
        return error;
    }
    // 3. xu ly trinh dien dang LIST 
    var html = '<ul>'; // mo the va dong the
    data.forEach(user => { // ham duyet array
        html += '<li>'; // mo va dong the li
        html += `Ho ten: ${user.name} -- `;  // key phai chuan theo data json neu khong se ra undefined
        html += `Email: ${user.email} -- `;
        html += `Thanh pho: ${user.address.city}`;
        html += '</li>';
    });
    html += '</ul>';          
    
    return html; // nho phai tra ve 
}

// nhung vao head ben html moi xai duoc <script type = "module" src="src/userStore.js"></script>
// chi export ham business thoi 
// giu tuong tich voi trang html 
if (typeof window !== "undefined"){
    window.loadUsers = loadUsers;
}
