import React from "react";

import './styles.css';

var text = ""
var inicio = null;
var leadsList = [];

const tableKeys = ["cliente", "dados", "reuniao"]

function onDragStart(ev) {
    ev
      .dataTransfer
      .setData('text/plain', ev.target.id);

    console.log(ev.target.id)

    inicio = ev.currentTarget;

    text = ev
    .currentTarget
    .innerText;
  }

  function onDragOver(ev) {
    ev.preventDefault();
  }

  function onDrop(ev) {

    ev
    .dataTransfer
    .setData('text/plain', ev.target.id);

  

    if(canChange(inicio.id, ev.currentTarget.id) && inicio.innerText !== ""){
        var result = window.confirm("Deseja proceguir com esta alteração? \nAlterações feitas não podem ser desfeitas.");
        if (result === true){
          ev.currentTarget.innerText = text;

          inicio.innerText = "";
          saveChanges();
        }
    }

  }

  function canChange(idfirst, idsecond){
    var id1 = idfirst.toString();
    var id2 = idsecond.toString();
    var linha1 = id1.substr(0, id1.length - 1);
    var col1 = id1.substr(id1.length - 1);
    var linha2 = id2.substr(0, id2.length - 1);
    var col2 = id2.substr(id2.length - 1);


    if(linha1 === linha2 && parseInt(col2) === parseInt(col1) + 1){
      return true;
    }
    return false;
  }

  function saveChanges(){
    var tabl = document.getElementById('leadsTable')
    var l = tabl.rows.length;
    var h = tabl.rows[0].cells.length;
    leadsList.length = 0;
    for ( var i = 1; i < l; i++ ){
      var tr = tabl.rows[i];
      var tablelead = {
        "cliente": "",
        "dados": "",
        "reuniao": ""
      }
      for ( var x = 0; x < h; x++){
        var cll = tr.childNodes[x].innerText;
        tablelead[tableKeys[x]] = cll;
      }
      leadsList.push(tablelead);

  }
  localStorage.setItem("tableleads", JSON.stringify(leadsList));

}


const Head = ({keys, head}) => {
    const tableHead = head || {}
  return(
    <thead>
        <tr>
            {
                keys.map(key => <th>{tableHead[key] || key}</th>)
            }
        </tr>
    </thead>
  )  
}

const Row = ({record, id}) =>{
    const keys = Object.keys(record)
    return(<tr key = {record.cliente}>
        {
            keys.map( (key, index) => <td  id = {(id*10) + index} key = {key} draggable="true" onDragStart={(ev) => {onDragStart(ev)}} onDragOver={(ev) => {onDragOver(ev)}} onDrop={(ev) => {onDrop(ev)}}>{record[key]} </td> )   
        }
    </tr>
    )    
}


const Table = ( {leads, head} ) => {
    const keys = Object.keys(leads[0]);
    return (
        <table id = "leadsTable">
            <Head keys = {keys} head = {head} />
            <tbody>
                {leads.map((record, i) => <Row record={record} id = {i+1}/>)}    
            </tbody>
        </table>
    )
}

export default Table;