const list_Selector = document.querySelector(".list-group");
let id,todoList;

query();

function query() {
    $.ajax({
        method : "GET",
        //url: "http://54.180.124.191:3000",  //전송
        url: "http://localhost:3000",  //전송
        dataType:"JSON", 
    })
    .done(function(data) {
        console.log(data);
        todoList = data;
        initial();
    });
}

$('#button-addon2').click(function() { 
    var addTask = $("#addTask").val();
    // alert(addTask);
    $.ajax({
        method : "GET",
        // url: `http://54.180.124.191:3000/add?name=${addTask}`,  //전송
        url: `http://localhost:3000/add?name=${addTask}`,  //전송
        dataType:"JSON", 
    })
    .done(function(data) {
        location.reload();
    })
    .always(function(xhr, status) { 
        alert("요청이 완료되었습니다.");
    });
    
;
    
});

function getCheckboxValue()  {
    // 선택된 목록 가져오기
    const query = 'input[name="animal"]:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    
    // 선택된 목록에서 value 찾기
    let result = '';
    selectedEls.forEach((el) => {
      result += el.value + ' ';
    });
    
    // 출력
    document.getElementById('result').innerText
      = result;
  }

function initial() {
    
    // check if data is not empty
    if (todoList) {
        console.log("todoList",todoList);
        id = todoList.length;
        loadList(todoList);
    } else {
        todoList = [];
        id = 0;
    }
    console.log("here",todoList);
};

function loadList(array) {
    array.forEach(function (item) {
        addToDo(item.name, item.id, item.done)
    });
};

// add to do
function addToDo(name, id, done) {

    let check = '';
    if(done === "Y") {
        check = `<input id = "check" class="form-check-input me-1" type="checkbox" value=${id} checked></input>`;
    } else {
        check = `<input id = "check" class="form-check-input me-1" type="checkbox" value=${id}></input>`;
    }

    const item = `<li class="list-group-item">
                    ${check}
                    ${name}
                    </li>
                  `;
    const position = "beforeend";
    list_Selector.insertAdjacentHTML(position, item);
};


{/* <button type="button" class="btn btn-sm btn-outline-primary position-absolute end-0 me-3">완료</button> */}