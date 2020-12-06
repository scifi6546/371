function main(){
    setup_buttons([{"name":"Needs","multiplier":-1.0,"items":[{"name":"rent","cost":100}]},{"name":"Wants","multiplier":1.0,},{"name":"Income","multiplier":1.0,"items":[{"name":"Job","cost":300}]}])
}
let global_costs = {}

window.onload = main;
function build_budget_entry(item_name,item_cost,multiplier,category_name){
    let edit_str = build_edit_str(item_name,item_cost,multiplier,category_name);
           
    console.log(edit_str)
    return "<div class=\" row\">"+item_name+"<input type = \"number\" oninput ="+edit_str+"onload = "+edit_str+" value=\""+item_cost+"\"/></div>"
}
function build_edit_str(item_name,item_cost,multiplier,category_name){
    let edit_str =  '\'edit_price(this,\"'+
    item_name+'",'+item_cost+
    
    ",\""+multiplier+'","'+category_name+"\")'";
    return edit_str
}
function setup_buttons(data){
    let top = document.getElementById("top")
    for(var i in data){
        let form = document.createElement("div")

        let name_div = "<div class = \"item_name\">"+data[i].name+"</div>"
        form.innerHTML=name_div
        
        let items_div = document.createElement("div");
        for(var j in data[i].items){
            let edit_str = build_edit_str(data[i].items[j].name,data[i].items[j].cost,data[i].multiplier,data[i].name)
           
            console.log(edit_str)
            let s = build_budget_entry(data[i].items[j].name,data[i].items[j].cost,data[i].multiplier,data[i].name)
            items_div.innerHTML+=s
           
        }
        form.appendChild(items_div)
        form.id=data[i].name
        console.log(form)
        form.innerHTML+='<button onclick="add_budget_item(this,'+data[i].multiplier+',\''+data[i].name+'\')" >Add Item</button>';
        
        
        top.appendChild(form)
        
        
    }
    let final_cost = '<div class="total_cost" id="total_cost">'+String(0)+'</div>'
       top.innerHTML+=final_cost
       for(var i in data){
        for(var j in data[i].items){
            edit_price({"value":data[i].items[j].cost},data[i].items[j].name,0.0,data[i].multiplier,data[i].name)
        }
    }
}
function add_budget_item(div,multiplier,category_name){
    console.log("added")
    document.getElementById(category_name).innerHTML+=build_budget_entry(String(Math.random()*1000000000),0.0,multiplier,category_name)
    console.log(div)


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