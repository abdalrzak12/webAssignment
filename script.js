var Counter = 0;
var aaa="a";
function buttonadd() {
    var textInput = document.getElementById("textInput");
    var textInput = textInput.value;

    if (textInput.trim() == "") {
        alert("الرجاء ادخال مهمة")
        return;
    }


    

    
    var ul_list = document.getElementById("ul-list");

    var taskId = Counter;
    Counter++;

    var newTaskHTML = `<div class="div-pad" id="${taskId}"><li id="" class="div-li">
                <p>${textInput}</p>
                <button class="complete-btn" onclick="completeTask('${taskId}')">انجاز </button>
                <button class="delete-btn" onclick="deleteTask('${taskId}')">حذف </button>
                </li>
                </div>
                `

    ul_list.innerHTML = ul_list.innerHTML + newTaskHTML;
    textInput.value = "";
}

function completeTask(id_test) {
    // alert("ddf");
    comp=document.getElementById(id_test);
    // alert(id_test);
    comp.style.backgroundColor = "green";
}

// function completeTask() {
//     alert("ddf");
//    var t1=document.getElementById(aaa);
//     alert(aaa);
//     t1.style.backgroundColor = "green";
// }

function deleteTask(del_id) {
 delet=document.getElementById(del_id)
//  alert(del_id)
 confirms=confirm("هل انت متأكد من حذف المهمة؟")
 if(confirms){
    delet.style.display="none";
 }
}
setInterval(() => {
    document.getElementById("p-time").innerHTML = new Date().toLocaleTimeString()
}, 1000);

setTimeout(() => {
    alert("تنبيه🙃")
}, 30000);