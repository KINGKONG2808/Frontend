var exp = '',
    number, decimal, equal, operator;
var textview = document.forms['calculatorForm']['textview'];

function insertNum(num) {
    if (equal) {
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    } else {
        exp = textview.value + num;
        textview.value = exp;
        number = true;
    }
    if (operator) decimal = true;
}

function insertOp(op) {
    textview.value = exp + op;
    operator = true;
    equal = false;
}

function insertDec() {
    if (number && !decimal) {
        textview.value = exp + '.';
        decimal = true;
        operator = false;
    }
}

function equalTo() {
    if (exp) {
        exp = eval(exp);
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
    }
}

function clean() {
    exp = '';
    textview.value = exp;
    decimal = false;
}

function back() {
    exp = textview.value;
    exp = exp.substring(0, exp.length - 1);
    textview.value = exp;
}


//jquey for calculator
$(document).ready(function() {
    //line1
    $('#equalTo').click(function() {
        equalTo();
    })
    $('#delete').click(function() {
        clean();
    })
    $('#zero').click(function() {
        insertNum(0);
    })
    $('#dot').click(function() {
            insertDec();
        })
        //line2
    $('#one').click(function() {
        insertNum(1);
    })
    $('#two').click(function() {
        insertNum(2);
    })
    $('#three').click(function() {
        insertNum(3);
    })
    $('#plus').click(function() {
            insertOp('+');
        })
        //line3
    $('#four').click(function() {
        insertNum(4);
    })
    $('#five').click(function() {
        insertNum(5);
    })
    $('#six').click(function() {
        insertNum(6);
    })
    $('#minus').click(function() {
            insertOp('-');
        })
        //line4
    $('#seven').click(function() {
        insertNum(7);
    })
    $('#eight').click(function() {
        insertNum(8);
    })
    $('#nine').click(function() {
        insertNum(9);
    })
    $('#permit').click(function() {
            insertOp('*');
        })
        //line5
    $('#back').click(function() {
        back();
    })
    $('#division').click(function() {
        insertOp('/');
    })
})