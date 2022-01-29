const getvalue = document.getElementById("links");
const inputval = document.getElementById("inputs");
const inputbtn = document.getElementById("btn1");
const tabbtn = document.getElementById("btn2");
const delbtn = document.getElementById("btn3");
getvalue.textContent = "";
var array = [];
var localstorageitem=JSON.parse(localStorage.getItem("links"));
if(localstorageitem)
{
    array=localstorageitem;
    for(i=0;i<array.length;i++)
    {
    getvalue.innerHTML += "<li>" + array[i] + "</li>";
    }
}
//*************************************************input button******************************************************************** */
inputbtn.addEventListener("click", getinputs);

function getinputs() {
  // ********************************************************textcontent*************************************/
  //   var list = document.createElement("li");
  //   list.style.listStyle="none";

  //   list.textContent = inputval.value;
  //   getvalue.appendChild(list);
  //   list.textContent = inputval.value;

  //***********************************************innerhtml************************************************ */
    getvalue.innerHTML += "<li>" + inputval.value + "</li>";
    
    array.push(inputval.value);
    localStorage.setItem("links", JSON.stringify(array));
    inputval.value = "";

  //*********************************************************using array****************************************** */
//   let listitems = "";
//   const array = [];
//   array.push(inputval.value);
//   for (i = 0; i < array.length; i++) {
//     listitems += `<li>
//          ${array[i]}
//       </li>`;
//   }
//   getvalue.innerHTML+= listitems;
//   inputval.value=" ";
}

//*****************************************************delete button************************************** */
delbtn.addEventListener("dblclick", 
function() {
    getvalue.textContent="";
    localStorage.clear();
    array=[];
});

//**********************************************tab button*************************************************************** */

tabbtn.addEventListener("click",function(){
    chrome.tabs.query({ active:true,currentWindow:true},function(tabs)
    { 
        console.log(tabs);
        getvalue.innerHTML += "<li>" + tabs[0].url + "</li>";
         array.push(tabs[0].url);
         localStorage.setItem("links", JSON.stringify(array));
    }
    )
})


