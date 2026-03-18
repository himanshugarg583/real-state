function contact_num_valid(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var count = (evt.target.value.match(/\+/g) || []).length;
    if (count < 2 && key == '+') {
        evt.target.value = evt.target.value.replace(/\+/g, "");
        evt.target.value = '+' + evt.target.value;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        return false;
    }
    var regex = /[+0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
jQuery("#Newsletter").submit(function(e) {
    jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="checkbox"]').each(function() {
        jQuery(this).val($.trim(jQuery(this).val()));
    })

    function valid_contact() {

        var name = document.querySelector('#Newsletter #name');
        var services = document.querySelector('#Newsletter #services');
        var tel = document.querySelector('#Newsletter #contact_no');
        var email = document.querySelector('#Newsletter #email');
        var message = document.querySelector('#Newsletter #message');
        var checkbox = document.querySelector("#Newsletter #checkbox");

        if (name.value == '') {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Please Enter Name.';
            name.style.borderColor = "red";
            name.focus();
            return false;
        } else {
            name.style.borderColor = ""
        }
        var digit = name.value;
        var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!alpha.test(digit)) {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Invalid Name: ' + name.value;
            name.style.borderColor = "red";
            name.value = '';
            name.focus();
            return false;
        }

        if (services.value == '') {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Please Enter Services ';
            services.style.borderColor = "red";
            services.focus();
            return false;
        } else {
            services.style.borderColor = ""
        }

        if (tel.value == '') {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Please Enter Contact No.';
            tel.style.borderColor = "red";
            tel.focus();
            return false;
        } else {
            tel.style.borderColor = ""
        }
        var c_mobile = tel.value.replace(/\+/g, '');
        var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
        if (!c_pattern.test(c_mobile)) {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Invalid Contact No.: ' + tel.value;
            tel.style.borderColor = "red";
            tel.value = '';
            tel.focus();
            return false;
        } else {
            tel.style.borderColor = ""
        }

        if (email.value == '') {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Please Enter Email ID.';
            email.style.borderColor = "red";
            email.focus();
            return false;
        } else {
            email.style.borderColor = ""
        }
        var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var c_address = email.value;
        if (c_reg.test(c_address) == false) {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Invalid Email ID: ' + email.value;
            email.style.borderColor = "red";
            email.value = '';
            email.focus();
            return false;
        } else {
            email.style.borderColor = ""
        }

        if (message.value == '') {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Please Enter Message ';
            message.style.borderColor = "red";
            message.focus();
            return false;
        } else {
            message.style.borderColor = ""
        }

        if (checkbox.checked == '') {
            document.querySelector('#Newsletter #error_data').innerHTML = '* Please agree to the terms and conditions ';
            checkbox.style.borderColor = "red";
            checkbox.focus();
            return false;
        } else {
            checkbox.style.borderColor = ""
            document.querySelector('#Newsletter #error_data').innerHTML = '';
            return true;
        }

        // 	if (checkbox.checked=='') 
        // {
        // 	document.querySelector('#Newsletter #error_data').innerHTML = '* Please agree to the terms and conditions ';
        // checkbox.style.borderColor="red";
        // checkbox.focus();
        // return false;	
        // } else {checkbox.style.borderColor=""
        // }
        // document.querySelector('#Newsletter #error_data').innerHTML = '';
        // return true; 




    }
    if (valid_contact() == true) {
        document.querySelector('#Newsletter #form_process').style.visibility = "visible";
        jQuery(this).find('[type="submit"]').prop('disabled', true); //.fadeOut('slow');
        var form_url = jQuery("#Newsletter").attr('action'); // the script where you handle the form input.	
        $.ajax({
            type: "POST",
            url: form_url,
            data: jQuery("#Newsletter").serialize(), // serializes the form's elements.
            success: function(data) {
                jQuery("#Newsletter").empty();
                jQuery("#Newsletter").html(data); // show response from the php script.
            },
            error: function(data) {
                jQuery("#Newsletter").empty();
                jQuery("#Newsletter").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
            }
        });

        e.preventDefault();
    } else {
        e.preventDefault();
    }
});