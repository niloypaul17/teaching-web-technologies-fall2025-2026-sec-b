function reg(){
    let name=document.getElementById("I1").value;
    let username=document.getElementById("I2").value;
    let address=document.getElementById("I3").value;
    let Phone=document.getElementById("I9").value;
    let email=document.getElementById("I4").value;
    let national=document.getElementById("I5").value;
    let DOB=document.getElementById("I6").value;
    let DN=document.getElementById("S1").value;
    let CN=document.getElementById("S2").value;
    let R1=document.getElementById("R1").value;
    let R2=document.getElementById("R2").value;
    let R3=document.getElementById("R3").value;
    let R4=document.getElementById("R4").value;
    let R5=document.getElementById("R5").value;
    let R6=document.getElementById("R6").value;
    let id=document.getElementById("I7").value;

    let DIV1=document.getElementById("SMD2");
    let DIV2=document.getElementById("MD1");
    let DIV3=document.getElementById("MD2");
    let DIV4=document.getElementById("MD3");

    if(name===""||username===""||address===""||Phone===""||email===""||national===""||DN==="None"||CN==="None"||R1==false||R2==false||R3==false||R4==false||R5==false||R6==false||id===""){
        DIV1.style.backgroundColor="red";
        DIV1.style.width="auto";
        DIV1.style.color="white";
        DIV1.style.borderRadius="5px";
        DIV1.style.textAlign="center";
        DIV1.innerHTML="You must fill up every box";
        return false;
    }

    let EV=email.includes("@");

    if(EV===false){
        DIV1.style.backgroundColor="red";
        DIV1.style.width="auto";
        DIV1.style.color="white";
        DIV1.style.borderRadius="5px";
        DIV1.style.textAlign="center";
        DIV1.innerHTML="Give a valid email address";
        return false;
    }

    if(isNaN(Phone)){
        DIV1.style.backgroundColor="red";
        DIV1.style.width="auto";
        DIV1.style.color="white";
        DIV1.style.borderRadius="5px";
        DIV1.style.textAlign="center";
        DIV1.innerHTML="Give a valid phone number";
        return false;
    }

    if(national.lenght !=11){
        DIV1.style.backgroundColor="red";
        DIV1.style.width="auto";
        DIV1.style.color="white";
        DIV1.style.borderRadius="5px";
        DIV1.style.textAlign="center";
        DIV1.innerHTML="Give a valid National ID number";
        return false;
    }

    if(DN==="None"|| CN==="None"){
        DIV1.style.backgroundColor="red";
        DIV1.style.width="auto";
        DIV1.style.color="white";
        DIV1.style.borderRadius="5px";
        DIV1.style.textAlign="center";
        DIV1.innerHTML="Give a valid phone number";
        return false;
    }

    if(id===""){
        DIV1.style.backgroundColor="red";
        DIV1.style.width="auto";
        DIV1.style.color="white";
        DIV1.style.borderRadius="5px";
        DIV1.style.textAlign="center";
        DIV1.innerHTML="Give a valid student ID";
        return false;
    }

    DIV1.innerHTML="Successful"
    DIV1.style.backgroundColor="lightgreen";
    DIV2.innerHTML=`
    <fieldset id="FIS4" class="FF">
                        <legend>Registared Name Information</legend>
                        <b>Name: <span style="color: lime;">${name}</span></b><br>
                        <b>UserName: <span style="color: lime;">${username}</span></b><br>
                    </fieldset>
    `;
    DIV3.innerHTML=`
    <fieldset id="FIS5" class="FF">
                        <legend>Registared Personal Information</legend>
                        <b>Address: <span style="color: lime;">${address}</span></b><br>
                        <b>Phone Number: <span style="color: lime;">${Phone}</span></b><br>
                        <b>Email Id: <span style="color: lime;">${email}</span></b><br>
                        <b>National Id: <span style="color: lime;">${national}</span></b><br>
                        <b>Date of Birth: <span style="color: lime;">${DOB}</span></b><br>
                    </fieldset>
    `;
    DIV4.innerHTML=`
    <fieldset id="FIS6" class="FF">
                        <legend>Registared Course Information</legend>
                        <b>Student Name: <span style="color: lime;">${name}</span></b><br>
                        <b>Student ID: <span style="color: lime;">${id}</span></b><br>
                        <b>Departmant Name: <span style="color: lime;">${DN}</span></b><br>
                        <b>Course Name: <span style="color: lime;">${CN}</span></b><br>
                        <b>Course ID:</b><br>
                        <b>Selected Section:</b><br>
                    </fieldset>
    `;
    return false;

}