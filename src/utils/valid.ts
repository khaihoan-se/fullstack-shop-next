
const valid = (name: any, email: any, password: any, cf_password: any) => {
    if(!name || !email || !password || !cf_password){
        return 'All fields are required'
    }

    if(!validateEmail(email)){
        return 'Email is not valid'
    }

    if(password.length < 6){
        return 'Password must be at least 6 characters'
    }

    if(password !== cf_password){
        return 'Password and confirm password must be the same'
    }
    
}

function validateEmail(email: any){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default valid;