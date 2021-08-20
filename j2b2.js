// js bài 1
function changetemF() {
    let temc;
    temc = document.getElementById("inputC").value;
    let c = parseInt(temc);
    let changef = c * 9 / 5 + 32;
    let temf;
    temf = document.getElementById("inputF").value;
    let f = parseInt(temf);
    let changec = (f - 32) * 5 / 9;

    if (temc !== "" && temf === "") {
        document.getElementById("result").innerText = "Result: " + changef + "F";
    } else if (temf !== "" && temc === "") {
        document.getElementById("result").innerText = "Result: " + changec + "C";
    } else {
        document.getElementById("result").innerText = "Nhập lại số liệu";
    }
}


// js bài tập 2

function changelength() {
    let unitm;
    unitm = document.getElementById("inputm").value;
    let m = parseFloat(unitm);
    let changefe = m * 3.2808;
    let feet = changefe.toFixed(4)
    let unitfe;
    unitfe = document.getElementById("inputfe").value;
    let fe = parseFloat(unitfe);
    let changem = fe / 3.2808;
    let met = changem.toFixed(4)

    if (unitm !== "" && unitfe === "") {
        document.getElementById("result").innerText = "Result: " + feet + "Feet";
    } else if (unitfe !== "" && unitm === "") {
        document.getElementById("result").innerText = "Result: " + met + "M";
    } else {
        document.getElementById("result").innerText = "Nhập lại số liệu";
    }
}

// js bài 3

function mathsquare() {
    let inputa;
    inputa = document.getElementById("sidesquare").value;
    let a = parseInt(inputa);
    let square = a ** 2;

    if (a <= 9) {
        document.getElementById("result").innerText = "không tồn tại hình vuông"
    } else
        document.getElementById("result").innerText = "Diện tích hình vuông = " + square;
}

// js bài 4

function mathrectangular() {
    let inputa;
    inputa = document.getElementById("inputside1").value;
    let side1 = parseFloat(inputa);
    let inputb;
    inputb = document.getElementById("inputside2").value;
    let side2 = parseFloat(inputb);
    let srec = side1 * side2;

    if (side1 > 0 && side2 > 0) {
        document.getElementById("result").innerText = "Diện tích hình chữ nhật = " + srec + "m2";
    } else {
        document.getElementById("result").innerText = "Số đo các cạnh hình chữ nhật không chính xác";
    }
}

// js bài 5
function mathrighttriangle() {
    let inputa;
    inputa = document.getElementById("inputside1").value;
    let side1 = parseFloat(inputa);
    let inputb;
    inputb = document.getElementById("inputside2").value;
    let side2 = parseFloat(inputb);
    let srec = side1 * side2 / 2;

    if (side1 > 0 && side2 > 0) {
        document.getElementById("result").innerText = "Diện tích hình tam giác = " + srec + "m2";
    } else {
        document.getElementById("result").innerText = "Số đo các cạnh hình tam giác không chính xác";
    }
}

// js bài 6
function mathx() {
    let inputa;
    inputa = document.getElementById("inputa").value;
    let a = parseInt(inputa);
    let inputb;
    inputb = document.getElementById("inputb").value;
    let b = parseInt(inputb);
    let x = -b / a;

    if (a === 0 && b === 0) {
        document.getElementById("result").innerText = "Phương trình có vô số nghiệm";
    } else if (b === 0) {
        document.getElementById("result").innerText = "Phương trình có 1 nghiệm x =0";
    } else if (a === 0) {
        document.getElementById("result").innerText = "PHương trinhhf vô nghiệm";
    } else {
        document.getElementById("result").innerText = "Phương trình có 1 nghiệm  x = " + x;
    }
}

// js bài 7
function degreeequation() {
    let inputA;
    inputA = document.getElementById("inputa").value;
    let a = parseInt(inputA);
    let inputB;
    inputB = document.getElementById("inputb").value;
    let b = parseInt(inputB);
    let inputC;
    inputC = document.getElementById("inputc").value;
    let c = parseInt(inputC);
    let d = b ** 2 - (4 * a * c);
    let x1 = -b / (2 * a)
    let x2 = (-b - d ^ 1 / 2) / (2 * a)
    let x3 = (-b + d ^ 1 / 2) / (2 * a)

    if (a === 0 && b === 0 && c === 0) {
        document.getElementById('result').innerText = "Phương trình có vô số nghiệm";
    } else if (a === 0) {
        document.getElementById("result").innerText = "Phương trình vô nghiệm";
    } else if (d < 0) {
        document.getElementById("result").innerText = "Phương trình vô nghiệm";
    } else if (d === 0) {
        document.getElementById("result").innerText = "Phương trình có 1 nghiệm x =" + x1;
    } else {
        document.getElementById("result").innerText = "Phương trính có 2 nghiệm phân biệt là:" + x2 + " và " + x3;
    }
}

// js bài 8:

function checktriangle() {
    let inputA;
    inputA = document.getElementById("inputA").value;
    let a = parseInt(inputA);
    let inputB;
    inputB = document.getElementById("inputB").value;
    let b = parseInt(inputB);
    let inputC;
    inputC = document.getElementById("inputC").value;
    let c = parseInt(inputC);
    let x1 = a + b - c;
    let x2 = a + c - b;
    let x3 = b + c - a;

    if (x1 > 0 && x2 > 0 && x3 > 0) {
        document.getElementById("result").innerText = "result: là số đo 3 cạnh của 1 tam giác";
    } else {
        document.getElementById("result").innerText = "result: không phải là số đo 3 cạnh của 1 tam giác";
    }
}

// js bài tập 9

function checkage() {
    let inputA;
    inputA = document.getElementById("inputAge").value;
    let a = parseInt(inputA);

    if (a < 1) {
        document.getElementById("result").innerText = "Không phải số tuổi của một người";
    } else if (a < 120) {
        document.getElementById("result").innerText = "Đây là số tuổi của một người";
    } else {
        document.getElementById("result").innerText = "Không phải là số tuổi của một người";
    }
}

// js bài 10:

function checkmoneye() {
    let inputE;
    inputE = document.getElementById("inputnume").value;
    let e = parseInt(inputE);
    let e1 = e * 20000;
    let e2 = 100 * 20000 + (e - 100) * 25000;
    let e3 = 100 * 20000 + 100 * 25000 + (e - 100) * 30000;


}

// js bài 11:
function checktax() {
    let inputTax;
    inputTax = document.getElementById("inputnumtax").value;
    let t = parseInt(inputTax);
    let t1 = t * 10 / 100;
    let t2 = t * 15 / 100;
    let t3 = t * 20 / 100;

    if (t < 0) {
        document.getElementById("result").innerText = "Nhập lại đi! Bạn nhập sai rồi đó";
    } else if (t < 10000000) {
        document.getElementById("result").innerText = "Tiền thuế bạn phải đóng là: " + t1 + "VND";
    } else if (t < 20000000) {
        document.getElementById("result").innerText = "Tiền thuế bạn phải đóng là: " + t2 + "VND";
    } else {
        document.getElementById("result").innerText = "Tiền thuế bạn phải đóng là: " + t3 + "VND";
    }
}

// js bài 12:

function checkinterest() {
    let inputMoney;
    inputMoney = document.getElementById("inputmoney").value;
    let inputMonth;
    inputMonth = document.getElementById("inputmonth").value;
    let month = parseInt(inputMonth)
    let m  = parseInt(inputMoney);
    let m1 = m + m * 8 / 100;
    let m2 = m1 + m1 * 8.1 / 100;
    let m3 = m2 + m2 * 8.2 /100;
    let m4 = m3 + m3 * 8.3 / 100;
    let m5 = m4 + m4 * 8.3 / 100;

    switch(month) {
        case 1:
            document.getElementById("result").innerText = "Số tiền phải trả là: " + m1;
            break;
        case 2:
            document.getElementById("result").innerText = "Số tiền phải trả là: " + m2;
            break;
        case 3:
            document.getElementById("result").innerText = "Số tiền phải trả là: " + m3;
            break;
        case 4:
            document.getElementById("result").innerText = "Số tiền phải trả là: " + m4;
            break;
        case 5:
            document.getElementById("result").innerText = "Số tiền phải trả là: " + m2;
            break;
        default:
            document.getElementById("result").innerText = "bạn quá hạn nhiều quá liên hệ ngân hàng đi";
    }
}