
var tasks = new Array();
var num = 0;

function handle(){
    var t = document.getElementById("task").value;
    if(t != ""){
        document.getElementById("form").reset();
        tasks[num++] = document.getElementById("task").value;
        addNewTask(t);
    }
}
    
function addNewTask(t){

    var node = document.createElement("li");
    node.innerHTML = t;
    document.getElementById("addition").appendChild(node);
    node.addEventListener("click", function(){
        delete_task(node, t);
    });
}

function delete_task(node, t){
    //node.innerHTML = <del>t</del>;
    node.style.textDecorationLine = "line-through";}


