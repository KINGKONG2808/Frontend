function submit() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    var flag = true;

    if (user == "" || user == null) {
        document.getElementById('errorUser').innerHTML = "Don't skip username filed !";
        flag = false;
    } else {
        document.getElementById('errorUser').innerHTML = "";
        var reg = /[A-Z0-9\._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        var result = reg.test(user);
        if (!result) {
            document.getElementById('errorUser').innerHTML = "Email not verify !";
            document.getElementById('user').select();
            flag = false;
        } else {
            document.getElementById('errorUser').innerHTML = "";
        }
    }

    if (password == "" || password == null) {
        document.getElementById('errorPassword').innerHTML = "Don't skip password filed !";
        flag = false;
    } else {
        document.getElementById('errorPassword').innerHTML = "";
        var reg = /^[A-Za-z][A-Za-z0-9]{7,32}$/;
        var result = reg.test(password);
        if (result) {
            document.getElementById('errorPassword').innerHTML = "";
        } else {
            document.getElementById('errorPassword').innerHTML = "Password not verify !";
            document.getElementById('password').select();
            flag = false;
        }
    }

    if (flag) alert("OK bitch");
}