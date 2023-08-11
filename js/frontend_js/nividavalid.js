$ = jQuery.noConflict(), $(document).ready(function() {
    $.validator.addMethod("lettersonly", function(e, r) {
        return this.optional(r) || /^[a-zA-Z ]+$/i.test(e)
    }), $.validator.addMethod("validEmail", function(e, r) {
        return this.optional(r) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(e)
    }), $(".ScheduleMeetingFormValidation").validate({
        rules: {
            name: {
                required: !0,
                lettersonly: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0,
                digits: !0,
                maxlength: 10,
                minlength: 10
            },
            meetingfor: {
                required: !0
            },
            message: {
                required: !0
            }
        },
        messages: {
            name: {
                required: "Enter name",
                lettersonly: "Enter Proper name"
            },
            email: {
                required: "Enter email",
                email: "Enter valid email address"
            },
            phone: {
                required: "Enter mobile number",
                digits: "Enter valid mobile number",
                minlength: "Enter valid 10 number",
                maxlength: "Enter valid 10 number"
            },
            meetingfor: {
                required: "Select Meeting"
            },
            message: {
                required: "Enter Message"
            }
        },
        submitHandler: function(e) {
            e.submit()
        }
    }), $(".contactfrm").validate({
        rules: {
            name: {
                required: !0,
                lettersonly: !0
            },
            email: {
                required: !0,
                email: !0,
                validEmail: !0
            },
            phone: {
                required: !0,
                digits: !0,
                maxlength: 10,
                minlength: 10
            },
            requirement: {
                required: !0,
                maxlength: 500
            },
            message: {
                required: !0,
                maxlength: 500
            }
        },
        messages: {
            name: {
                required: "Enter name",
                lettersonly: "Enter Proper name"
            },
            email: {
                required: "Enter email",
                email: "Enter valid email address"
            },
            phone: {
                required: "Enter mobile number",
                digits: "Enter valid mobile number",
                minlength: "Enter valid 10 number",
                maxlength: "Enter valid 10 number"
            },
            requirement: {
                required: "Enter Requirement"
            },
            message: {
                required: "Enter Message"
            }
        },
        submitHandler: function(e) {
            e.submit()
        }
    }), $(".career_inquiry").validate({
        rules: {
            job_position: {
                required: !0
            },
            prefix: {
                required: !0
            },
            name: {
                required: !0,
                lettersonly: !0
            },
            email: {
                required: !0,
                email: !0,
                validEmail: !0
            },
            phone: {
                required: !0,
                digits: !0,
                maxlength: 10,
                minlength: 10
            },
            requirement: {
                required: !0,
                maxlength: 500
            },
            experience: {
                required: !0,
                maxlength: 500
            },
            address: {
                required: !0
            },
            education: {
                required: !0
            },
            gender: {
                required: !0
            },
            message: {
                required: !0,
                maxlength: 500
            },
            resume: {
                required: !0
            }
        },
        messages: {
            job_position: {
                required: "Enter job position"
            },
            prefix: {
                required: "Please select prefix"
            },
            name: {
                required: "Enter full name",
                lettersonly: "Enter Proper full name"
            },
            email: {
                required: "Enter email",
                email: "Enter valid email address"
            },
            phone: {
                required: "Enter mobile number",
                digits: "Enter valid mobile number",
                minlength: "Enter valid 10 number",
                maxlength: "Enter valid 10 number"
            },
            requirement: {
                required: "Enter Requirement"
            },
            experience: {
                required: "Enter Experience"
            },
            message: {
                required: "Enter Message"
            },
            resume: {
                required: "Upload resume in pdf format"
            }
        },
        submitHandler: function(e) {
            e.submit()
        }
    })
}), $(".requestacallform").validate({
    rules: {
        name: {
            required: !0,
            lettersonly: !0
        },
        requirement: {
            required: !0,
        },
        email: {
            required: !0,
            email: !0,
            validEmail: !0
        },
        phone: {
            required: !0,
            digits: !0,
            maxlength: 10,
            minlength: 10
        },
        comment: {
            required: !0,
            maxlength: 500
        }
    },
    messages: {
        name: {
            required: "Enter name",
            lettersonly: "Enter Proper name"
        },
        email: {
            required: "Enter email",
            email: "Enter valid email address"
        },
        phone: {
            required: "Enter mobile number",
            digits: "Enter valid mobile number",
            minlength: "Enter valid 10 number",
            maxlength: "Enter valid 10 number"
        },
        comment: {
            required: "Enter Message"
        }
    },
    submitHandler: function(e) {
        e.submit()
    }
}), $(".requestacallform1").validate({
    rules: {
        name: {
            required: !0,
            lettersonly: !0
        },
        phone: {
            required: !0,
            digits: !0,
            maxlength: 10,
            minlength: 10
        },
        comment: {
            required: !0
        }
    },
    messages: {
        name: {
            required: "Enter name",
            lettersonly: "Enter Proper name"
        },
        phone: {
            required: "Enter mobile number",
            digits: "Enter valid mobile number",
            minlength: "Enter valid 10 number",
            maxlength: "Enter valid 10 number"
        },
        comment: {
            required: "Enter Message"
        }
    },
    submitHandler: function(e) {
        e.submit()
    }
}), $(".requestacallform2").validate({
    rules: {
        name: {
            required: !0,
            lettersonly: !0
        },
        phone: {
            required: !0,
            digits: !0,
            maxlength: 10,
            minlength: 10
        },
        comment: {
            required: !0
        }
    },
    messages: {
        name: {
            required: "Enter name",
            lettersonly: "Enter Proper name"
        },
        phone: {
            required: "Enter mobile number",
            digits: "Enter valid mobile number",
            minlength: "Enter valid 10 number",
            maxlength: "Enter valid 10 number"
        },
        comment: {
            required: "Enter Message"
        }
    },
    submitHandler: function(e) {
        e.submit()
    }
}), $(".requestacallform3").validate({
    rules: {
        name: {
            required: !0,
            lettersonly: !0
        },
        phone: {
            required: !0,
            digits: !0,
            maxlength: 10,
            minlength: 10
        },
        comment: {
            required: !0
        }
    },
    messages: {
        nam: {
            required: "Enter name",
            lettersonly: "Enter Proper name"
        },
        phon: {
            required: "Enter mobile number",
            digits: "Enter valid mobile number",
            minlength: "Enter valid 10 number",
            maxlength: "Enter valid 10 number"
        },
        commen: {
            required: "Enter Message"
        }
    },
    submitHandler: function(e) {
        e.submit()
    }
}), $(".requestacallform4").validate({
    rules: {
        name: {
            required: !0,
            lettersonly: !0
        },
        phone: {
            required: !0,
            digits: !0,
            maxlength: 10,
            minlength: 10
        },
        comment: {
            required: !0
        }
    },
    messages: {
        name: {
            required: "Enter name",
            lettersonly: "Enter Proper name"
        },
        phone: {
            required: "Enter mobile number",
            digits: "Enter valid mobile number",
            minlength: "Enter valid 10 number",
            maxlength: "Enter valid 10 number"
        },
        comment: {
            required: "Enter Message"
        }
    },
    submitHandler: function(e) {
        e.submit()
    }
}), $(".inquiryfrm").validate({
    rules: {
        name: {
            required: !0,
            lettersonly: !0
        },
        email: {
            required: !0,
            email: !0,
            validEmail: !0
        },
        phone: {
            required: !0,
            digits: !0,
            maxlength: 10,
            minlength: 10
        },
        requirement: {
            required: !0
        },
        message: {
            required: !0,
            maxlength: 500
        }
    },
    messages: {
        name: {
            required: "Enter name",
            lettersonly: "Enter Proper name"
        },
        email: {
            required: "Enter email",
            email: "Enter valid email address"
        },
        phone: {
            required: "Enter mobile number",
            digits: "Enter valid mobile number",
            minlength: "Enter valid 10 number",
            maxlength: "Enter valid 10 number"
        },
        requirement: {
            required: "Select Meeting"
        },
        message: {
            required: "Enter Message"
        }
    },
    submitHandler: function(e) {
        e.submit()
    }
});