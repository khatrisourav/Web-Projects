
function handleform(event){
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const choose = document.getElementById("choose").value;


    const userdetails = {
        name : name.value,
        email: email.value,
        number : number.value,
        choose : choose
    }

    
     axios
     .post("https://crudcrud.com/api/6bfd0ac678de49e188f079e06a83140f/data",userdetails).then(()=>{

        name.value="";
        email.value="";
        number.value="";
        choose.value="";

      fetchData();
     }).catch((err)=>{
       console.log(err);
     })   
}


function fetchData() {
    const list = document.getElementById("list");
    const filtervalue= document.getElementById("filter").value;


    
    // Clear the existing list
    list.innerHTML = "";

    // Fetch data from the API
    axios.get("https://crudcrud.com/api/6bfd0ac678de49e188f079e06a83140f/data")
        .then(response => {
           
         const data = response.data;
            
            
           const x = ['ram','123','sourav'];
           const filterdata = filtervalue === "all" ? data : data.filter(item=>item.choose===filtervalue);

       

       
console.log(filterdata);
        
         
       console.log(data);
            

        filterdata.forEach(item => {
                // Create list item for each data entry
                const newLi = document.createElement("li");
                newLi.innerHTML = `${item.name} ${item.email} ${item.number} ${item.choose}`;

                // Create and append Delete button
                const deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "Delete";
                 deleteBtn.onclick = () => deleteItem(item._id, newLi);
                newLi.appendChild(deleteBtn);

                // Create and append Edit button
                const editBtn = document.createElement("button");
                editBtn.innerHTML = "Edit";
                // editBtn.onclick = () => editItem(item._id, item);
                newLi.appendChild(editBtn);

                // Append the new list item to the list
                list.appendChild(newLi);
            });
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
}


function deleteItem(id, list ){
    axios
    .delete(`https://crudcrud.com/api/6bfd0ac678de49e188f079e06a83140f/data/${id}`).then(()=>{
        list.remove();
    })
    .catch((err)=>{
  console.log(err);
    })
}

document.addEventListener('DOMContentLoaded', fetchData);


