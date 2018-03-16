var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var processEntries = function() {
    "use strict";
    var header, html, required, msg, email, phone, country, contact, terms;
    header = "";
    html = " ";
    requred = "<span>Required fields.</span> ";
    msg = "Please review your entires and complete all fields";
    email = $()
    
};

var resetForms = function() {
     "use strict";
};




window.addEventListener("load", function (){
    "use strict";
    $("register").addEventListener("click", processEntries);
    $("reset_form").addEventListener("click", resetForm);
    $("email_address").focus();
})