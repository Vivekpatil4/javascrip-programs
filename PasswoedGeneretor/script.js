const inputval = document.querySelector('.inputval');
const genebtn  = document.getElementById('Generator');
const copybtn  = document.getElementById('Copy');

function generatePassword(length = 12) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSTUVWXYZ1234567890!@#$%^&*()'; // Lowercase letters only
  
    let password = '';
    while (password.length < length) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    
   inputval.value = password;
   console.log(password)
   
       copybtn.addEventListener('click',()=>{
           navigator.clipboard.writeText(password);
        })
    
    return password;
}

  