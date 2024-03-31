
const form=document.getElementById("form");
const input=document.getElementById("name");
const button=document.getElementById("search");

form.addEventListener("submit",(event)=>{
event.preventDefault();
const currentUser=input.value;

fetch(`https://api.github.com/users/${currentUser}`)
.then((response)=>response.json())
.then(data=>showUserInfo(data))
 
})


function showUserInfo(obj){
    const userInfo=document.createElement("div");

    userInfo.innerHTML=`
    <div class="card">
    <img src="${obj.avatar_url}" alt="Avatar" style="width:200">
    <p>${obj.name}</p>
    <p>${obj.bio}</p>
    </div>`
    document.body.appendChild(userInfo);

}

