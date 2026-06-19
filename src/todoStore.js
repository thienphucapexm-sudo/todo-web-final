// Hàm UNIT: CRUD - READ
export async function fetchTodos(apiUrl) {
    const response = await fetch(apiUrl);
    if(!response.ok) {
        throw new Error("Err001: Không kết nối được API URL");

    }
    const data = await response.json();
    return data;

}

// HÀM BUSINESS: load danh sách todos và trình diễn
export async function loadTodos(apiUrl) {
    // 1.Gởi request và lấy dữ liệu
    const data = await fetchTodos(apiUrl);
    // 2. Trình diễn
    var html = '';
        data.forEach(job => {
            html += '<li>';
            html += `<input type="checkbox" class="todo-checkbox" data-id="${job.id}" id="chk${job.id}" `+ ((job.completed)?'checked':'') +`/><span>${job.title}</span>`; // thuoc tinh
            html += `<button type="button" class="btn-edit" data-id="${job.id}" data-title="${job.title}" id="edit-button${job.id}">➖ Sửa</button>`;
            html += `<button type="button" class="btn-delete" data-id="${job.id}" id="delete-button${job.id}">❌Xóa</button>`;
            html += '</li>';
        }); // thuoc tinh truyen du lieu cua html 
    return html;
}
// Hàm UNIT: CRUD - CREATE
export async function addTodo(apiUrl, newTitle) {
    // chuẩn bị dữ liệu gởi đi
    const payload = {
        title: newTitle,
        completed: false
    };
    // gởi request POST
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    //console.log(">>>>> response : ",response);
    if(!response.ok) {
        throw new Error("Err002: Không kết nối được dữ liệu");

    }
    return await response.json();
}

export async function updateTodo(apiUrl, id, newTitle) {
    const payload = {
        title: newTitle,
    };
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if(!response.ok) {
        throw new Error("Err003: Không cập nhật được dữ liệu");

    }
    return await response.json();
}

export async function deleteTodo(apiUrl, id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(!response.ok) {
        throw new Error("Err004: Không xóa được dữ liệu");

    }
    return await response.json();
}

export async function updateTodoStatus(apiUrl,id ,newCompleted){
    // chuan bi du lieu gui di 
    const payload = {
        completed: newCompleted
    };

    // goi request 
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if(!response.ok){
        throw new Error("khong cap nhat duoc du lieu");
    }

    return await response.json();
}

// ham nao muon public ra thi ghi vao
if (typeof window !== "undefined") {
    window.loadTodos = loadTodos;
    window.addTodo = addTodo;
    window.deleteTodo = deleteTodo;
    window.updateTodo=updateTodo;
    window.updateTodoStatus = updateTodoStatus;
}
