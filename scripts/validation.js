function validateForm()
{
var form= document.forms["surveyForm"];
var name=form["name"].value;
var email=form["email"].value;
var age=form["age"].value;
var gender=form["gender"].value;
var comment=form["comment"].value;

if (name ==="" || email ==="" || age ==="" || gender ==="" || comment ==="")
{
    alert("Fields are still empty. Please fill the form.");
}
else{
    alert("Thank you for filling this survey form!");
}

}