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
jQuery("#Signup").submit(function(e) {
    jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="checkbox"]').each(function() {
        jQuery(this).val($.trim(jQuery(this).val()));
    })

    function valid_contact() {
        var name = document.querySelector('#Signup #name');
        var tel = document.querySelector('#Signup #contact_no');
        var email = document.querySelector('#Signup #email');

        if (name.value == '') {
            document.querySelector('#Signup #error_data1').innerHTML = '* Please Enter Name.';
            name.style.borderColor = "red";
            name.focus();
            return false;
        } else {
            name.style.borderColor = ""
        }
        var digit = name.value;
        var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!alpha.test(digit)) {
            document.querySelector('#Signup #error_data1').innerHTML = '* Invalid Name: ' + name.value;
            name.style.borderColor = "red";
            name.value = '';
            name.focus();
            return false;
        }

        if (tel.value == '') {
            document.querySelector('#Signup #error_data1').innerHTML = '* Please Enter Contact No.';
            tel.style.borderColor = "red";
            tel.focus();
            return false;
        } else {
            tel.style.borderColor = ""
        }
        var c_mobile = tel.value.replace(/\+/g, '');
        var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
        if (!c_pattern.test(c_mobile)) {
            document.querySelector('#Signup #error_data1').innerHTML = '* Invalid Contact No.: ' + tel.value;
            tel.style.borderColor = "red";
            tel.value = '';
            tel.focus();
            return false;
        } else {
            tel.style.borderColor = ""
        }

        if (email.value == '') {
            document.querySelector('#Signup #error_data1').innerHTML = '* Please Enter Email ID.';
            email.style.borderColor = "red";
            email.focus();
            return false;
        } else {
            email.style.borderColor = ""
        }
        var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var c_address = email.value;
        if (c_reg.test(c_address) == false) {
            document.querySelector('#Signup #error_data1').innerHTML = '* Invalid Email ID: ' + email.value;
            email.style.borderColor = "red";
            email.value = '';
            email.focus();
            return false;
        } else {
            email.style.borderColor = ""
        }

        document.querySelector('#Signup #error_data1').innerHTML = '';
        return true;

    }
    if (valid_contact() == true) {
        document.querySelector('#Signup #form_process1').style.visibility = "visible";
        jQuery(this).find('[type="submit"]').prop('disabled', true); //.fadeOut('slow');
        var form_url = jQuery("#Signup").attr('action'); // the script where you handle the form input.	
        $.ajax({
            type: "POST",
            url: form_url,
            data: jQuery("#Signup").serialize(), // serializes the form's elements.
            success: function(data) {
                jQuery("#Signup").empty();
                jQuery("#Signup").html(data); // show response from the php script.
            },
            error: function(data) {
                jQuery("#Signup").empty();
                jQuery("#Signup").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
            }
        });

        e.preventDefault();
    } else {
        e.preventDefault();
    }
});