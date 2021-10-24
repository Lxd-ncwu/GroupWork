
    var eName = document.getElementById("name");
    var eAge = document.getElementById("age");
    var eWeight = document.getElementById("weight");
    var ePassword = document.getElementById("password");
    var eConfirmPassword = document.getElementById("confirmPassword");

    eName.onblur = checkName;
    eAge.onblur = checkAge;
    eWeight.onblur = checkWeight;
    ePassword.onblur = checkPassword;
    eConfirmPassword.onblur = checkConfirmPassword;

    document.getElementById("submitBtn").onclick = function () {
        if (checkName()&&checkAge()&&checkWeight()&&checkPassword()&&checkConfirmPassword()){
            return true
        }
        return false
    }

    function checkName() {
        if (eName.value == "") {
            eName.style.borderColor = "red"
            document.getElementById("alertName").innerHTML = "<font color='red'>用户名不能为空！</font>";
            return false
        }
        eName.style.borderColor = "green"
        document.getElementById("alertName").innerHTML = ""
        return true
    }

    function checkAge() {
        if (eAge.value < 17) {
            if (eAge.value == "") {
                eAge.style.borderColor = "red"
                document.getElementById("alertAge").innerHTML = "<font color='red'>年龄不得为空！</font>"
            } else {
                eAge.style.borderColor = "red"
                document.getElementById("alertAge").innerHTML = "<font color='red'>年龄不得小于17岁！</font>"
            }
            return false
        }
        eAge.style.borderColor = "green"
        document.getElementById("alertAge").innerHTML = ""
        return true
    }

    function checkWeight() {
        if (eWeight.value < 30 || eWeight.value > 150) {
            if (eWeight.value == "") {
                eWeight.style.borderColor = "red"
                document.getElementById("alertWeight").innerHTML = "<font color='red'>体重不得为空！</font>"
            } else {
                eWeight.style.borderColor = "red"
                document.getElementById("alertWeight").innerHTML = "<font color='red'>体重在30-150公斤以内！</font>"
            }
            return false
        }
        eWeight.style.borderColor = "green"
        document.getElementById("alertWeight").innerHTML = ""
        return true
    }

    function checkPassword() {
        if (ePassword.value.length < 8) {
            if (ePassword.value == "") {
                ePassword.style.borderColor = "red"
                document.getElementById("alertPassword").innerHTML = "<font color='red'>密码不能为空！</font>"
            } else {
                ePassword.style.borderColor = "red"
                document.getElementById("alertPassword").innerHTML = "<font color='red'>密码长度不能小于8位！</font>"
            }
            return false
        }
        ePassword.style.borderColor = "green"
        document.getElementById("alertPassword").innerHTML = ""
        return true
    }

    function checkConfirmPassword() {
        if (eConfirmPassword.value != document.getElementById("password").value) {
            eConfirmPassword.style.borderColor = "red"
            document.getElementById("alertConfirmPassword").innerHTML = "<font color='red'>两次密码不匹配！</font>"
            return false
        }
        eConfirmPassword.style.borderColor = "green"
        document.getElementById("alertConfirmPassword").innerHTML = ""
        return true
    }
