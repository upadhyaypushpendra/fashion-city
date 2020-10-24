import users from "./users";

function authenticate(username,password){
    let user = users.find(user=> user.username === username && user.password === password);
    if(Boolean(user)) return {success : true,id : user.id};
    else return {success : false,message:"Invalid Username or Password."};
}
function signIn(id){
    let totalUsers = users.length;
    for(let i=0;i<totalUsers;++i){
        let user = users[i];
        if(user.id === id){
            user.isLoggedIn = true;
            return {success : true};
        }
    }
    return {success : false};
}
function signUp(newUser){
    let user = users.find(user=> user.username === newUser.username);
    if(Boolean(user)) {
        return {success:false,message:"User already Exists."};
    } else {
        newUser.id = users.length+1;
        newUser['isLoggedIn'] = true;
        users.push(newUser);
        return {success: true, id : newUser.id, message : "User created successfully."};
    }
}
function signOut(id){
    let totalUsers = users.length;
    for(let i=0;i<totalUsers;++i){
        let user = users[i];
        if(user.id === id){
            user.isLoggedIn = false;
            return {success:true};
        }
    }
    return {success:false};
}
export default {
    signIn,signOut,authenticate,signUp
};