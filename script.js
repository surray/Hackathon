async function getUsers(){
  
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const users = await data.json();
    console.log(users);
    users.forEach(user => createUser(user));
   
   }
 getUsers();
 
 function createUser({name, brewery_type,address_2, website_url, phone}){
   
   const info =document.createElement('div');
 info.innerHTML=
  ` <h2>${name}</h2>
    <p>${brewery_type}</p>
    <p>${address_2}</p>
    <p>${website_url}</p>
    <p>${phone}</p>
       
  `;
   
 document.body.append(info);
 info.style.width='16rem';
 info.style.padding='10px';
 info.style.borderRadius='5px'
 info.style.background='white';
 document.body.style.background="whitesmoke";
 
 }
 
 
    
     
 