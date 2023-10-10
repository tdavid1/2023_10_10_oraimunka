import { Ember } from './ember.ts';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const emberek: Ember[] =[];
function tablecreate(){
  const table = document.getElementById("table")!;
  table.innerHTML="<thead><tr><td>Név</td><td>Ár</td><td>Product Code</td></tr></thead>";
  for(const t of emberek){
    const tbody = document.createElement("tbody");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const celltext1 = document.createTextNode(t.name);
    const celltext2 = document.createTextNode(t.price.toString());
    const celltext3 = document.createTextNode(t.productecode);
    cell.appendChild(celltext1);
    cell2.appendChild(celltext2);
    cell3.appendChild(celltext3);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);
    tbody.appendChild(row)
    table.appendChild(tbody);
  }
}
function registracio(){
  try{
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const price = parseInt((document.getElementById("price") as HTMLInputElement).value);
    const productcode = (document.getElementById("productcode") as HTMLInputElement).value;
    const Series = new Ember(name,price,productcode);
    emberek.push(Series);
    console.table(emberek)
    tablecreate();

    document.getElementById("errormessage")!.textContent ="";
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("price") as HTMLInputElement).value = "";
    (document.getElementById("productcode") as HTMLInputElement).value = "";

  }catch(e){
    if(e instanceof Error){
      document.getElementById("errormessage")!.textContent = e.message;
    }
  }
}
function init(){
  document.getElementById("gomb")!.addEventListener("click",registracio);
}
document.addEventListener("DOMContentLoaded",init);
