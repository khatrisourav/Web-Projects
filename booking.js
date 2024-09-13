
function handleform(event){

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const choose = document.getElementById("choose");
    const list = document.getElementById("list");

    const userdetails = {
        name : name.value,
        email: email.value,
        number : number.value,
        choose : choose.value
    }



    event.preventDefault();
    document.getElementById("book").addEventListener('click',function(){
     name.value="";
     email.value="";
     number.value="";
     choose.value="";
     const newli= document.createElement("li");
     newli.innerHTML= `${name.value} ${email.value} ${number.value} ${choose.value}`;
     list.appendChild(newli);



    })
        
   
}


