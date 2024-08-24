document.addEventListener('DOMContentLoaded', function() {
    const savedItems = JSON.parse(localStorage.getItem('expense')) || [];
    const getUl = document.getElementById("liste");

    savedItems.forEach(function(item, index) {
        const newLi = document.createElement("li");
        newLi.innerHTML = `${item.exp} - ${item.ds} - ${item.ch} `;
        const debtn= document.createElement("button");
    debtn.id= "delete";
    debtn.innerHTML= "Delete";
    const ebtn= document.createElement("button");
    ebtn.id= "edit";
    ebtn.innerHTML= "Edit";
    newLi.appendChild(debtn);
    newLi.appendChild(ebtn);
        getUl.append(newLi);
        debtn.addEventListener('click', function() {
            savedItems.splice(index, 1); // Remove item from array
            localStorage.setItem('expense', JSON.stringify(savedItems)); // Update localStorage
            getUl.removeChild(newLi); // Remove item from DOM
        });


    });
});

document.getElementById("btn").addEventListener('click', function(event) {
    event.preventDefault();

    const getExp = document.getElementById("expense").value;
    const getDs = document.getElementById("description").value;
    const getUl = document.getElementById("liste");
    const choos= document.getElementById("choose").value;

    const users = {
        exp: getExp,
        ds: getDs,
        ch: choos
    };

    const newLi = document.createElement("li");
    newLi.innerHTML = `${getExp} - ${getDs} - ${choos}`;

    const debtn= document.createElement("button");
    debtn.id= "delete";
    debtn.innerHTML= "Delete";
    const ebtn= document.createElement("button");
    ebtn.id= "edit";
    ebtn.innerHTML= "Edit";
    newLi.appendChild(debtn);
    newLi.appendChild(ebtn);
    
    
    getUl.append(newLi);
   

    

    const savedItems = JSON.parse(localStorage.getItem('expense')) || [];
    savedItems.push(users);
    localStorage.setItem('expense', JSON.stringify(savedItems));
    getExp.innerHTML= '';
    getDs.innerHTML = '';
    debtn.addEventListener('click', function() {
        const index = savedItems.indexOf(users);
        if (index > -1) {
            savedItems.splice(index, 1); // Remove item from array
            localStorage.setItem('expense', JSON.stringify(savedItems)); // Update localStorage
            getUl.removeChild(newLi); // Remove item from DOM
        }
    });

    ebtn.addEventListener('click',function(){
       var n= prompt("Enter wht u want to change ");
       
    })
    

});



