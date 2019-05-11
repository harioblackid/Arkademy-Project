<script>
function validateForm(){
    var nameRegex = /^[a-z.]+$/;
    var validfirstUsername = document.frm.firstName.value;
    // 
    if(validfirstUsername.match(nameRegex) == null || validfirstUsername.length !== 8){
        alert("Your first name is not valid. Only characters a-z or '.' and length must be 8 characters.");
        document.frm.firstName.focus();
        return false;
    }

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validEmail = document.frm.email.value;
    if(validEmail.match(regEmail)==null || validEmail.length < 4)
    {
    	alert("Your email is not valid");
    	document.frm.email.focus();
    	return false;
    }
}

</script>