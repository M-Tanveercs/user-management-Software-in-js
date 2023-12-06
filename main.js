let userName = document.getElementById("userName");
let allUserListBtn = document.getElementById("allUserListBtn");
let addUserBtn = document.getElementById("addUserBtn");
let updateUserBtn = document.getElementById("updateUserBtn");
let deleteUserBtn = document.getElementById("deleteUserBtn");
let userLoginBtn = document.getElementById("userLoginBtn");
let mainContent = document.getElementById("mainContent");
let usersList = document.getElementById("usersList");
let addNewUser = document.getElementById("addNewUser");
let deleteExtUser = document.getElementById("deleteExtUser");
let userLogin = document.getElementById("userLogin");
let password =document.getElementById("password")
let submit=document.getElementById("submit")
let username=document.getElementById("username")
let email=document.getElementById("email")
let emailDelete = document.getElementById("delemail")
let updateEmail=document.getElementById("")
let logoutVar = document.getElementById("logout");
let updateUserData = document.getElementById("updateUser");
usersList.style.display="none"
addNewUser.style.display = "none"
deleteExtUser.style.display = "none"; 
userLogin.style.display = "none"; 
logoutVar.style.display="none";
updateUserData.style.display="none"
let loggedInUserEmail;
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation=()=>{
{
    if (username.value == "") {
      document.getElementById("err1").innerHTML = "user name required";
        document.getElementById("username").focus();
      return false;
    }else{
 document.getElementById("err1").innerHTML = "";
    }
    if (email.value == "") {
      document.getElementById("err2").innerHTML = "email is required";
       document.getElementById("email").focus();
      return false;
    }else{
          document.getElementById("err2").innerHTML = "";
    }
    if (password.value == "") {
      document.getElementById("err3").innerHTML = "password is required";
      document.getElementById("password").focus();
      return false;
    }else{
        document.getElementById("err3").innerHTML = "";
    }
}
// resetForm();
alert("User Add Successfully")
acceptData();
resetForm();
return true;

}
 const resetForm=()=>{
    console.log("reset");
    username.value = "";
    email.value = "";
    password.value = "";
   
 }



const allUserListFun=()=>{
      addNewUser.style.display = "none";
      deleteExtUser.style.display = "none";
      userLogin.style.display = "none";
      updateUserData.style.display = "none";
      usersList.style.display = "block";
      
      displayEmail();
      return true
}

const addUserFun=()=>{
 usersList.style.display = "none";

 deleteExtUser.style.display = "none";
 userLogin.style.display = "none";
 addNewUser.style.display = "block";
 updateUserData.style.display = "none";
  return true;
}






const deleteUserFun =()=>{
 console.log("deleteUserBtn");
 usersList.style.display = "none";
 addNewUser.style.display = "none";
updateUserData.style.display = "none";
 userLogin.style.display = "none";
 deleteExtUser.style.display = "block";

  return true;
}


const userLoginFun=()=>{
 usersList.style.display = "none";
 addNewUser.style.display = "none";
 deleteExtUser.style.display = "none";
 userLogin.style.display = "block";
 updateUserData.style.display = "none";

  return true;
}


let userData=[]

let acceptData=()=>{
    userData.push({
      name: username.value,
      emails: email.value,
      passwords: password.value,
    });
    localStorage.setItem("userData",JSON.stringify(userData));
    console.log("userData", userData);
    
}



let userList = document.getElementById("userList");
const displayEmail=()=>{
userList.innerHTML = "";
userData.map((x,y)=>{
    return (userList.innerHTML += `
<ul id="${y+1}">
    <i>${y+1}.
    ${x.emails}
    </i>
</ul>
    `);
})
}

const delReset = () => {
  console.log("delreset");
  emailDelete.value=""};

let deleteUser = () => {
  let delEmail = emailDelete.value;
  console.log("emailDelete", delEmail);
  if (delEmail === loggedInUserEmail){
  const indexToDelete = userData.findIndex((user) => user.emails === delEmail);
  console.log("indexToDelete", indexToDelete);
  console.log("delete1");
  if (indexToDelete !== -1) {
    console.log("delete2");
    userData.splice(indexToDelete, 1);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("user delete Successfully");
 
  } else {
    alert("user Not found");
  }}else{
    alert("you can only can delete your own account")

  }
  delReset()
  logout();
};
deleteExtUser.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteUser();
});
let userLoginForm = document.getElementById("userLoginForm");


let  loginmail = document.getElementById("logEmail")
let loginPass = document.getElementById("LogPassword")
let loginRest = () => {
  loginmail.value = "";
  loginPass.value = "";
};
    
const loginAccount = () => {
  let loginEmail=loginmail.value;
   let loginPassword=loginPass.value

    const userToLogin = userData.find(user => user.emails === loginEmail);
console.log("userToLogin", userToLogin);
    if (!userToLogin) {
        alert("Email does not exist. Please check your email or register an account.");
    } else {
        if (userToLogin.passwords === loginPassword) {
            alert(`Welcome, ${userToLogin.name}! Login successful`);
            loggedInUserEmail = userToLogin.emails; // Store the email of the logged-in user
            updateHeader(userToLogin.name);
            logoutVar.style.display = "block";
            
        } else {
            alert("Password does not match. Please check your password.");
        }
    }
    loginRest();
   
}


const updateHeader = (userName) => {
    const headerUserName = document.getElementById("userName");
    headerUserName.textContent = `Hello, ${userName}`;
}
let logout=()=>{
   loggedInUserEmail = null;
   updateHeader("Guest");
   console.log("logout");
    logoutVar.style.display = "none";
}

// Modify the login form submission
userLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginAccount();
});


const updateCurrentUser =()=>{
   usersList.style.display = "none";
   updateUserData.style.display = "block";
   deleteExtUser.style.display = "none";
   userLogin.style.display = "none";
   addNewUser.style.display = "none";
  const currentUserEmail=loggedInUserEmail;
  const currentUser=userData.find(user=>user.emails===currentUserEmail)
  if(currentUser){
    document.getElementById("updateUsername").value=currentUser.name;
    document.getElementById("updateEmail").value=currentUser.emails;
    document.getElementById("updatePassword").value=currentUser.passwords;
  }else{
    alert("user not Found . Plese check your login")
  }
}






const updateUser = () => {
  let oldEmail=loggedInUserEmail
    
    const indexToUpdate = userData.findIndex(
      (user) => user.emails === oldEmail
    );

    if (indexToUpdate !== -1) {
        userData[indexToUpdate].name = document.getElementById("updateUsername").value;
        userData[indexToUpdate].emails = document.getElementById("updateEmail").value;
        userData[indexToUpdate].passwords = document.getElementById("updatePassword").value;
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("User updated successfully");
        displayEmail(); // Update the displayed user list
        // resetUpdateForm(); // Reset the form after updating
    } else {
        alert("User not found");
    }
}









(() => {
  userData = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(userData);

})();




