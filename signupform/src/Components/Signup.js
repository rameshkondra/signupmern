import React,{useRef} from 'react'

function Signup() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let mobilenoInputRef = useRef();
    let genderInputRef = useRef();
    let maritalStatusInputRef = useRef();

    let firstNameValidation=()=>{
        var regex=/^[A-Za-z\s+]{2,25}$/;
        let result=regex.test(firstNameInputRef.current.value);
        if (result===true) {
            firstNameInputRef.current.style.border="";
        } else {
            firstNameInputRef.current.style.border="4px solid red";
        }
    }

    let lastNameValidation=()=>{
        var regex=/^[A-Za-z\s+]{2,20}$/;
        let result=regex.test(lastNameInputRef.current.value);
        if (result===true) {
            lastNameInputRef.current.style.border="";
        } else {
            lastNameInputRef.current.style.border="4px solid red";
        }
    }

    let emailValidation=()=>{
        var regex=/^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
        let result=regex.test(emailInputRef.current.value);
        if (result===true) {
            emailInputRef.current.style.border="";
        } else {
            emailInputRef.current.style.border="4px solid red";
        }
    }

    let passwordValidation=()=>{
        var regex=/^(?=.*)(?=.*[a-z])(?=.*[a-z])(?=.*[a-z]).{8,}/
        let result=regex.test(passwordInputRef.current.value);
        if (result===true) {
            passwordInputRef.current.style.border="";
        } else {
            passwordInputRef.current.style.border="4px solid red";
        }
    }

    let mobilenoValidation=()=>{
        var regex=/^[\]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,4}$/im
        let result=regex.test(mobilenoInputRef.current.value);
        if (result==true) {
            mobilenoInputRef.current.style.border="";
        } else {
            mobilenoInputRef.current.style.border="4px solid red";
        }
    }

    let genderValidation=()=>{
        var regex=/^[malefemale]{4,6}$/;
        let result=regex.test(genderInputRef.current.value);
        if (result===true) {
            genderInputRef.current.style.border="";
        } else {
            genderInputRef.current.style.border="4px solid red";
        }
    }

    let maritalStatusValidation=()=>{
        var regex=/^[single,married]{6,7}$/;
        let result=regex.test(maritalStatusInputRef.current.value);
        if (result===true) {
            maritalStatusInputRef.current.style.border="";
        } else {
            maritalStatusInputRef.current.style.border="4px solid red";
        }
    }

    let onSignup= async()=>{

        let dataToSend = new FormData();
        dataToSend.append("firstName",firstNameInputRef.current.value);
        dataToSend.append("lastName",lastNameInputRef.current.value);
        dataToSend.append("email",emailInputRef.current.value);
        dataToSend.append("password",passwordInputRef.current.value);
        dataToSend.append("mobileno",mobilenoInputRef.current.value);
        dataToSend.append("gender",genderInputRef.current.value);
        dataToSend.append("maritalStatus",maritalStatusInputRef.current.value)

        let reqOptions={
            method:"POST",
            body:dataToSend
        }
      let rawData=  await fetch("http://localhost:2345/signUp",reqOptions);
      let convertedData= await rawData.json();
      console.log(convertedData);
      alert("account created successfully")

    }

  return (
    <div>
        <h1>sign up form</h1>
        <form>
            <div>
                <label htmlFor='firstname'>First Name*</label>
                <br></br>
                <input type='text' id='firstname' ref={firstNameInputRef} onChange={()=>{
                    firstNameValidation();
                }}></input>
            </div>
            <div>
                <label htmlFor='lastname'>Last Name*</label>
                <br></br>
                <input type='text' id='lastname' ref={lastNameInputRef} onChange={()=>{
                    lastNameValidation();
                }}></input>
            </div>
            <div>
                <label htmlFor='email'>Email*</label>
                <br></br>
                <input type='email' id='email' ref={emailInputRef} onChange={()=>{
                    emailValidation();
                }}></input>
            </div>
            <div>
                <label htmlFor='password'>Password*</label>
                <br></br>
                <input type='password' id='password' ref={passwordInputRef} onChange={()=>{
                    passwordValidation();
                }}></input>
            </div>
            <div>
                <label htmlFor='mobileno'>Mobile*</label>
                <br></br>
                <input type='tel' id='mobileno' ref={mobilenoInputRef} onChange={()=>{
                    mobilenoValidation();
                }}></input>
            </div>
            <div>
                <label htmlFor='gender'>Gender*</label><label style={{ fontSize:"small" }}>(small letters only)</label>
                <br></br>
                <input type='text' id='gender' ref={genderInputRef} onChange={()=>{
                    genderValidation();
                }}></input>
                </div>
            <div>
                <label htmlFor='maritalStatus'>Marital Status*</label>
                <label style={{ fontSize:"small" }}>(small letters only)</label>
                <br></br>
                <input type='text' id='maritalStatus' ref={maritalStatusInputRef} onChange={()=>{
                    maritalStatusValidation();
                }}></input>
                <br></br>
                <label style={{ fontSize:"small" }}>( Ex : single or married )</label>
            </div>
            <br></br>
            <div>
                <button type="button" onClick={()=>{
                    onSignup();
                }}>sign up</button>
            </div>
            <br></br>
            <a href=''>Login</a>
        </form>
    </div>
  )
}

export default Signup