function validateForm(){
    //get input into name
    let name =document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("text-area");
    
    //Regex to check for whitespace
    let regName = /\s/;
    //Regex test for valid email
    let regMail = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    
    //Make sure name is at least 5 characters
    if (name.value.length <=5){
        document.getElementById("invalid-input").innerHTML= "Please enter your first and last name.";
        name.focus();
        return false;
    }
    //Make sure message is at least 2 characters
    if (message.value.length <=2){
        document.getElementById("invalid-input").innerHTML= "Your message must be longer than 2 characters";
        message.focus();
        return false;
    }
    //test to see if there is whitespace
    if (!regName.test(name.value)){
        document.getElementById("invalid-input").innerHTML= "Please enter your first and last name.";
        name.focus();
        return false;
    }
    //test for valid email
    if (!regMail.test(email.value)){
        document.getElementById("invalid-input").innerHTML= "Please enter a valid email";
        email.focus();
        return false;
    }
    

    else {
        return true;
    }

    
}

function getBUCourses(){
    fetch("https://roasted-climbing-avenue.glitch.me/mscis.json").then((response) =>{
        console.log('resolved', response);
        return response.json();
    }).then(data =>{
        console.log(data);
        let placeholder = document.querySelector("#course-table")
        let courseTable = "";
        for(let i = 0; i < data.length; i++){
        courseTable += `
        <tr>
           <td> ${data[i].CourseID} </td>
           <td> ${data[i].CourseName} </td>
           <td> ${data[i].Credits} </td>
           <td> ${data[i].Term} </td>
           <td> ${data[i].Grade} </td>

        </tr>
        `;
        }
        document.getElementById("course-table").innerHTML = courseTable;
    }).catch((err) => {
        console.log('rejectd', err);
    });
    }

    function getBSUCourses(){
        fetch("https://roasted-climbing-avenue.glitch.me/met.json").then((response) =>{
            console.log('resolved', response);
            return response.json();
        }).then(data =>{
            console.log(data);
            let placeholder = document.querySelector("#course-tableBSU")
            let courseTable = "";
            for(let i = 0; i < data.length; i++){
            courseTable += `
            <tr>
               <td> ${data[i].CourseID} </td>
               <td> ${data[i].CourseName} </td>
               <td> ${data[i].Credits} </td>
               <td> ${data[i].Term} </td>
               <td> ${data[i].Grade} </td>
    
            </tr>
            `;
            }
            document.getElementById("course-tableBSU").innerHTML = courseTable;
        }).catch((err) => {
            console.log('rejectd', err);
        });
        }