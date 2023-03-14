// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//         phoneNumber: document.getElementById("phone").value,
//     };


// const serviceID = "service_4cd31tl";
// const templateID = "template_t2dmwtg";

// emailjs
//     .send(serviceID,templateID,params)
//     .then((res) =>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         document.getElementById("phone").value = "";
//         console.log(res);
//         alert("Message Sent Successfully")
//     }, (error) => {
//         console.log(error);
//     })
    
// }    







function sendMail(e){
    e.preventDefault()
  


        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";

 
    window.location.reload()

}    