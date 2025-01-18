function validateForm(){
     var name = document.forms["surveyForm"]["name"].value;
     var email = document.forms["surveyForm"]["email"].value;
     var age = document.forms["surveyForm"]["age"].value;
     var gender = document.forms["surveyForm"]["gender"].value;
     var watchtype = document.forms["surveyForm"]["watchtype"].value;
     var comment = document.forms["surveyForm"]["comment"].value;

//get all checkboxes of media
var media= document.forms["surveyForm"]["media"];
var mediaChecked= false;

//check if any of the checkboxes are checked
for(var i=0; i<media.length; i++){
    if (media[i].checked){
       mediaChecked = true;
        break;
   }
}

//validate fields
if (name === "" || email === "" || age === "" || gender ==="" || watchtype === "" || !mediaChecked || comment ==="")
{
    alert("Fields are still empty. Please fill the form."); //prevents from form submission
    return false;
}
//email validation
var emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    //comment length validation
    if (comment.length < 10) {
        alert("Comment must be at least 10 characters long.");
        return false;
    }
else{
    alert("Thank you for filling this survey form!"); //allows the form submissions
    return true;
}

}