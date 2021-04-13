'use strict';

const myForm = document.getElementById('myForm');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formDepart = document.getElementById('Department');
const myTable = document.getElementById('myTable');


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


let departArray = ['Call-Center','Information-Technology','Human-Resources'];




function Salary (name,email,Department){
    this.name=name;
    this.email=email;
    this.Department=Department;
    this.Salaries=randomNum(100,500);
    Salary.all.push(this);
}
Salary.all=[];






function getItems (){
    let storage = JSON.parse(localStorage.getItem('salary'));
    // for ( let i=0; i<storage.length ; i++)


    const tableRow = document.createElement('tr');
    myTable.appendChild(tableRow);

    const tableData1 = document.createElement('td');
    tableRow.appendChild(tableData1);
    tableData1.textContent=`${storage}`;

    const tableData2 = document.createElement('td');
    tableRow.appendChild(tableData2);
    tableData2.textContent=`${storage}`;

    const tableData3 = document.createElement('td');
    tableRow.appendChild(tableData3);
    tableData3.textContent=`${storage}`;

    const tableData4 = document.createElement('td');
    tableRow.appendChild(tableData4);
    tableData4.textContent=`${storage}`;

    console.log(getItems);

}


myForm.addEventListener('submit',addNew);
function addNew(event) 
{
    event.preventDefault();
    let newObj = new Salary (event.target.name.value  ,event.target.email.value,  formDepart.value );
    
    const tableRow = document.createElement('tr');
    myTable.appendChild(tableRow);

    const tableData1 = document.createElement('td');
    tableRow.appendChild(tableData1);
    tableData1.textContent=`${newObj.name}`;

    const tableData2 = document.createElement('td');
    tableRow.appendChild(tableData2);
    tableData2.textContent=`${newObj.email}`;

    const tableData3 = document.createElement('td');
    tableRow.appendChild(tableData3);
    tableData3.textContent=`${newObj.Department}`;

    const tableData4 = document.createElement('td');
    tableRow.appendChild(tableData4);
    tableData4.textContent=`${newObj.Salaries}`;


    let Total = Total + Salaries; 
    
    const tableData5 = document.createElement('td');
    myTable.appendChild(tableData5);
    tableData5.textContent=`Total = ${Total}`;

    localStorage.setItem('salary', JSON.stringify(Salary.all));
    
}

getItems();

