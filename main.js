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
usersList.style.display="block"
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
  } else {
    document.getElementById("err1").innerHTML = "";
  }
  // userData = JSON.parse(localStorage.getItem("userData")) || [];
  let userToLog = userData.map((user) => user.emails);

  console.log("Provided Email:", email.value);
  console.log("Existing Emails:", userToLog);

  if (email.value === "") {
    document.getElementById("err2").innerHTML = "Email is required";
    document.getElementById("email").focus();
    return false;
  } else if (userToLog.includes(email.value)) {
    console.log("Email already exists");
    document.getElementById("err2").innerHTML = "Email is already in use";
    document.getElementById("email").focus();
    return false;
  } else {
    document.getElementById("err2").innerHTML = "";
  }

  if (password.value == "") {
    document.getElementById("err3").innerHTML = "password is required";
    document.getElementById("password").focus();
    return false;
  } else {
    document.getElementById("err3").innerHTML = "";
  }
}
// resetForm();
// alert("User Add Successfully")
 let delbtn2 = document.getElementById("delbtn");
 delbtn2.style.display = "none";
 let updatebtn = document.getElementById("updatebtn");
 updatebtn.style.display = "none";
 document.getElementById("exampleModalLongTitle").innerHTML =
   "New User Add Notification!";
 document.getElementById("modal-body").innerHTML =
   "The new user added successfully";
 document.getElementById("btnDelete").innerHTML = "Close";

 $("#exampleModalCenter").modal("show");

acceptData();
resetForm();
 
return true;

}
const modalClose = () => {
  $("#exampleModalCenter").modal("hide");
};

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

let generateid = () => {
  // Generate a unique key using a combination of timestamp and random number
  return `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

let userData=[]
let parentid = generateid();
let acceptData=()=>{
    userData.push({
      id: parentid,
      name: username.value,
      emails: email.value,
      passwords: password.value,
    });
    localStorage.setItem("userData",JSON.stringify(userData));
    console.log("userData", userData);
    allUserListFun();
}
let openUpdateForm = (parentid) => {
  // Pass the parent ID to the form 2 HTML file
  
// let userToup = userData.map((user) => user.id);
// let user_toupdate = String(userToup);
// console.log(user_toupdate);
  window.open(`update.html?id=${parentid}`, "_self");
};

let table = document.getElementById("table");
const displayEmail=()=>{
table.innerHTML = "";
let parentid;
userData.map((x,y)=>{
  parentid=x.id;
    return (table.innerHTML += `


                            <tr class="" id="${y + 1}  scope="row">
                                
                                <td>${x.name} </td>
                                <td>${x.emails}</td>
                                <td> <button class="formBtn "value="updateUserBtn" name="updateUser" id="updateUsers" onclick="openUpdateForm('${parentid}')"><i class="bi bi-person-fill-gear"></i>Update</button>
        <button class="formBtn formbtn2" value="deleteUserBtn" name="deleteUserBtn" id="deleteUserBtn" onclick="delCurentUser()"><i class="bi bi-person-x-fill"></i>Discard</button></td>
                            </tr>
                            
                 
               
    `);
})
}

const delReset = () => {
  console.log("delreset");
  emailDelete.value=""};

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
      $("#exampleModalCenter").modal("show");
      document.getElementById("updatebtn").style.display = "none";
      let delbtn2 = document.getElementById("delbtn");
      delbtn2.style.display = "none";
      document.getElementById("exampleModalLongTitle").innerHTML =
        "Email  not exist Notification!";
      document.getElementById("modal-body").innerHTML =
        "Email does not exist. Please check your email or register an account.";
      document.getElementById("btnDelete").innerHTML = "Ok";
        
    } else {
        if (userToLogin.passwords === loginPassword) {

          $("#exampleModalCenter").modal("show");
          document.getElementById("updatebtn").style.display = "none";
          let delbtn2 = document.getElementById("delbtn");
          delbtn2.style.display = "none";
          document.getElementById("exampleModalLongTitle").innerHTML =
            "Login Notification!";
          document.getElementById(
            "modal-body"
          ).innerHTML = `Welcome, ${userToLogin.name}! Login successful`;
          document.getElementById("btnDelete").innerHTML = "close";
            
            loggedInUserEmail = userToLogin.emails; // Store the email of the logged-in user
            updateHeader(userToLogin.name);
            logoutVar.style.display = "block";
            
        } else {
              $("#exampleModalCenter").modal("show");
              document.getElementById("updatebtn").style.display = "none";
              let delbtn2 = document.getElementById("delbtn");
              delbtn2.style.display = "none";
              document.getElementById("exampleModalLongTitle").innerHTML =
                "Password  not match Notification!";
              document.getElementById("modal-body").innerHTML =
                "Password does not match. Please check your password.";
              document.getElementById("btnDelete").innerHTML = "Ok";
         
        }
    }
    loginRest();
 allUserListFun()

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




  let delCurentUser=()=>{

  


      usersList.style.display = "block";
      updateUserData.style.display = "none";
      deleteExtUser.style.display = "none";
      userLogin.style.display = "none";
      addNewUser.style.display = "none";
      const currentUserEmail=loggedInUserEmail;
      const currentUser=userData.find(user=>user.emails===currentUserEmail)
      if(currentUser){
          $("#exampleModalCenter").modal("show");
          document.getElementById("updatebtn").style.display = "none";
          let delbtn2 = document.getElementById("delbtn");
          delbtn2.style.display = "block";
          document.getElementById("exampleModalLongTitle").innerHTML =
            "User Delete Notification!";
          document.getElementById("modal-body").innerHTML =
            `Are You Sure to Delete ${currentUser.name} Account`;
            
  document.getElementById("btnDelete").innerHTML = "No";
  document.getElementById("delbtn").addEventListener("click", function () {
document.getElementById("delemail").value = currentUser.emails;
    deleteUser()

    $("#exampleModalCenter").modal("hide");
  });
        
      }else{
         $("#exampleModalCenter").modal("show");
         document.getElementById("updatebtn").style.display = "none";
         let delbtn2 = document.getElementById("delbtn");
         delbtn2.style.display = "none";
         document.getElementById("exampleModalLongTitle").innerHTML =
           "User Not Found Notification!";
         document.getElementById("modal-body").innerHTML =
           "User not found Please login and then try!!!";
           document.getElementById("btnDelete").innerHTML = "Ok";
        // alert("user Not found Please login and then try!!!");
      }
  }
let deleteUser = () => {
  let oldEmail = loggedInUserEmail;

  
  const indexToDelete = userData.findIndex((user) => user.emails === oldEmail);
  console.log("indexToDelete", indexToDelete);
  if (indexToDelete !== -1) {
     
    console.log("delete2");
    userData.splice(indexToDelete, 1);
    localStorage.setItem("userData", JSON.stringify(userData));
   
 
  } 

  
 
  logout();
} ;
// deleteExtUser.addEventListener("submit", (e) => {
//   e.preventDefault();
//   deleteUser();
// });


// const updateCurrentUser =()=>{
//    usersList.style.display = "none";
//    updateUserData.style.display = "block";
//    deleteExtUser.style.display = "none";
//    userLogin.style.display = "none";
//    addNewUser.style.display = "none";
//   const currentUserEmail=loggedInUserEmail;
//   const currentUser=userData.find(user=>user.emails===currentUserEmail)
//   if(currentUser){
//     document.getElementById("updateUsername").value=currentUser.name;
//     document.getElementById("updateEmail").value=currentUser.emails;
//     document.getElementById("updatePassword").value=currentUser.passwords;
//   }else{
//     alert("user not Found . Plese check your login")
//   }
// }






// const updateUser = () => {
//   let oldEmail=loggedInUserEmail
    
//     const indexToUpdate = userData.findIndex(
//       (user) => user.emails === oldEmail
//     );

//     if (indexToUpdate !== -1) {
//         userData[indexToUpdate].name = document.getElementById("updateUsername").value;
//         userData[indexToUpdate].emails = document.getElementById("updateEmail").value;
//         userData[indexToUpdate].passwords = document.getElementById("updatePassword").value;
//         localStorage.setItem("userData", JSON.stringify(userData));
//         alert("User updated successfully");
//         displayEmail(); // Update the displayed user list
//         // resetUpdateForm(); // Reset the form after updating
//     } else {
//         alert("User not found");
//     }
// }
 
let show=()=>{
  document.getElementById("left").style.width="40%"
  document.getElementById("left").style.padding="20px 20px"
}
let hideMenue=()=>{
  document.getElementById("left").style.width = "0px";
  document.getElementById("left").style.padding = "20px 0px";
}

// Scroll Animation
const sr = ScrollReveal({
    origin: 'left',
    distance:'85px',
    duration:2000,
    reset: true
})



sr.reveal(".header-h1", {});
sr.reveal(".userName", { delay: 200 });
sr.reveal(".logout", { delay: 200 });

const srT = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2000,
  reset: true,
});
srT.reveal(".leftSpan", { delay: 200 });
srT.reveal(".left button", { delay: 200 });


srT.reveal(".usersList", {  easing: 'ease-in' });
srT.reveal(".userList-h2", { delay: 200 });
srT.reveal(".userlist-p", { delay: 200 });














(() => {
  userData = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(userData);

})();




