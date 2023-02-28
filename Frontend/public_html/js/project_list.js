


export class Projectlist{

windowInnerWidth = window.innerWidth

list_update(data_array){
    let row_number;
    let root = document.getElementById("projects");
    
    let row = document.createElement("div");
    row.classList.add("projects_row");
    if (this.windowInnerWidth > 650){
        row_number = 3;
    } else 
        {
            row_number = 1;
        }
    for (let i=0; i<data_array.lenght; i++){
        if(i%row_number===0){
           root.appendChild(row);
        }
        let current_row=document.getElementsByClassName("projects_row")[(document.getElementsByClassName("projects_row").length-1)];
        let column = document.createElement("div");
        column.classList.add("projects_column");
        column.appendChild(this.add_item_list(data_array[i]));
        current_row.appendChild(column);
    }
       
}


add_item_list(data){
    let item = document.createElement("div");
    let img = document.createElement('img');
    let name = document.createElement("a");
    let info = document.createElement("p");
    let sfera = document.createElement("a");
    let button = document.createElement("a");
    item.classList.add("projects_div");
    img.src = "https://ipfs.io/ipfs/"+data.image_cid;
    img.classList.add("project_img");
    img.alt("project img");
    item.appendChild(img);
    name.innerHTML(data.name);
    name.classList.add("project_name");
    item.appendChild(name);
    info.innerHTML(data.info);
    info.classList.add("project_info");
    item.appendChild(info);
    sfera.innerHTML(data.sfera);
    item.appendHTML(sfera);
    button.href("./projects/"+data.name+".html");
    button.classList.add("project_button");
    item.appendChild(button);
    return item;
}




}