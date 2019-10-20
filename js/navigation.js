
// first
$(function() { // short cut
    $('button').on('click', function() {
        var user = $('#user').val();
        var pass = $('#pass').val();
        // console.log(user + pass);
        if(user != "") {
            $('#user').addClass('border-success');
            $('#user').removeClass('border-danger');
        }else {
            $('#user').addClass('border-danger');
            $('#user').removeClass('border-success');
        }
        if(pass != "") {
            $('#pass').addClass('border-success');
            $('#pass').removeClass('border-danger');
        }else{
            $('#pass').addClass('border-danger');
            $('#pass').removeClass('border-success');
        }
    });
});

// second
// bongroum code
$(function() {
    $('button').on('click', function() {
        var user = $('#user').val();
        var pass = $('#pass').val();
        // console.log(user + pass);
        if(user != "") {
            setSuccess('user');
        }else {
            setError('user');
        }

        if(pass != "") {
           setSuccess('pass');
        }else{
            setError('pass');
        }
    });
});
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('border-success');
}

// Third
$(function() {
    $('button').on('click', function() {
        var user = $('#user').val();
        var pass = $('#pass').val();
        // console.log(user + pass);
        (user != "")? setSuccess('user'): setError('user');
        (pass != "")? setSuccess('pass'): setError('pass');
    });
});
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('border-success');
}

// last
$(function() {
    $('button').on('click', function() {
        var user = $('#user').val();
        var pass = $('#pass').val();
        isUser(user);
        isPass(pass);
    });
});
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('border-success');
}
function isUser(u) {
    (u != "")? setSuccess('user'): setError('user');
}
function isPass(p) {
    (p != "")? setSuccess('pass'): setError('pass');
}