
    //Write your code here
function getFormvalue() {
    // Get the form element using its ID
    const form = document.getElementById("form1");

    // Get the values of the first and last name from the form elements
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Combine the first and last name into a single string
    const fullName = firstName + " " + lastName;

    // Display the full name using an alert
    alert(fullName);

    // Prevent the form from submitting to avoid refreshing the page
    return false;

}
