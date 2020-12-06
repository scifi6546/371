function main(){
    setup_buttons([{"name":"Needs","multiplier":-1.0,"items":[{"name":"rent","cost":100}]},{"name":"Wants","multiplier":1.0,},{"name":"Income","multiplier":1.0,"items":[{"name":"Job","cost":100}]}])
}
let global_costs = {}

window.onload = main;
function setup_buttons(data){
    let top = document.getElementById("top")
    for(var i in data){
        let form = document.createElement("form")

        let name_div = "<div class = \"item_name\">"+data[i].name+"</div>"
        form.innerHTML=name_div
        
        let items_div = document.createElement("div");
        for(var j in data[i].items){
            let edit_str =  '\'edit_price(this,\"'+
            data[i].items[j].name+'",'+data[i].items[j].cost+
            
            ",\""+data[i].multiplier+'","'+data[i].name+"\")'";
            console.log(edit_str)
            let s =  "<div class=\" row\">"+data[i].items[j].name+"<input type = \"number\" oninput ="+edit_str+"onload = "+edit_str+" value=\""+data[i].items[j].cost+"\"/></div>"
            items_div.innerHTML+=s
           
        }
        form.appendChild(items_div)
        form.id=data[i].name
        console.log(form)
        
        
        
        top.appendChild(form)
    }
    let final_cost = '<div class="total_cost" id="total_cost">'+String(0)+'</div>'
       top.innerHTML+=final_cost
}
function add_item(){
    
}
function edit_price(div,item_name,item_cost,multiplier,category_name) {
    if(!global_costs[category_name]){
        global_costs[category_name] = []
    }
    global_costs[category_name][item_name] = {"cost":div.value,"multiplier":multiplier};
    console.log(global_costs)
    let total=0;
    for(let i in global_costs){
        for(let j in global_costs[i]){
            total+=global_costs[i][j].cost*global_costs[i][j].multiplier
        }
    }
    update_total_div(total)
   // global_costs[item.id] = item.value

    
}
function update_total_div(total){
    console.log(total)
    document.getElementById("total_cost").innerText=total
}
//<!-- Change overall document background-->
function colorChange(obj) {
    document.body.style.backgroundColor = obj.value;
}
//<!-- Change fixed cost background-->
function fixedColorChange(obj) {
    document.getElementById("Fixed").style.backgroundColor = obj.value;
}
//<!-- Change variable cost background-->
function varColorChange(obj) {
    document.getElementById("Variable").style.backgroundColor = obj.value;
}
//<!-- Change income background-->
function incomeColorChange(obj) {
    document.getElementById("Income").style.backgroundColor = obj.value;
}
function add_item(plus_object) {
    
}