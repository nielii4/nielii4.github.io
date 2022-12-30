function sendEmail(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const params = {
        name : name,
        email : email,
        message : message,
    };

    const serviceID = "service_fyigt0g";
    const templateID = "template_hq6wmq8";

    emailjs.send(serviceID, templateID,params).then(
        (response)=>{
            document.querySelector('.contact__form').reset();
            alert("MESSAGE SENT")
        }
    ).catch(error => console.log(error));
}