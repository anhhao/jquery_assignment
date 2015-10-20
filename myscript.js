/**
 * Created by Amaster on 10/20/2015.
 */

$(document).ready(function () {
    //check phone
    var phone = $('#phone');
    phone.keyup(function () {
        var phoneNumber = phone.val();
        if (isValidPhoneNumber(phoneNumber)) {
            swapStyleClass(phone, "green", "invalid");
        } else {
            swapStyleClass(phone, "invalid", "green");
        }
    });

    var button = $("#button");
    button.click(function () {
        //check name
        var name = $('#myName');
        if (name.val().length > 0) {
            swapStyleClass(name, "valid", "invalid");
        } else {
            swapStyleClass(name, "invalid", "valid");
        }

        //reformat phone
        var phoneNumber = phone.val();
        if (isValidPhoneNumber(phoneNumber)) {
            var area = phoneNumber.substring(0, 3);
            var number1 = phoneNumber.substring(3, 6);
            var number2 = phoneNumber.substring(6);
            phone.val("(" + area + ")" + " " + number1 + "-" + number2);
        }

        //check email
        var email = $('#email');
        if(email.val().indexOf('@') != -1){
            swapStyleClass(email, "valid", "invalid");
        } else {
            swapStyleClass(email, "invalid", "valid");
        }
    });
});

function swapStyleClass(element, style1, style2) {
    element.addClass(style1);
    element.removeClass(style2);
}
function isValidPhoneNumber(number) {
    var length = number.length;
    if (length != 10) {
        return false;
    }
    for (var i = 0; i < length; i++) {
        if (number[i] < '0' || number[i] > '9') {
            return false;
        }
    }
    return true;
}
