// Bài 1:
// Bước 1: Nhập vào ngày tháng năm
// Bước 2: ngày trước thì trừ đi ngày sau thì cộng thêm
// Bước 3: xuất kết quả

document.getElementById("btnCheckTomorrow").onclick = function () {
  var ngay = +document.getElementById("ngay").value;
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;

  var ketQua;

  if (ngay === 31 && thang === 12) {
    ngay = 1;
    thang = 1;
    nam += 1;
  } else if (
    (ngay === 31 && thang === 1) ||
    (ngay === 31 && thang === 3) ||
    (ngay === 31 && thang === 5) ||
    (ngay === 31 && thang === 7) ||
    (ngay === 31 && thang === 8) ||
    (ngay === 31 && thang === 10)
  ) {
    ngay = 1;
    thang += 1;
  } else if (ngay === 28 && thang === 2) {
    ngay = 1;
    thang += 1;
  } else if (
    (ngay === 30 && thang === 4) ||
    (ngay === 30 && thang === 6) ||
    (ngay === 30 && thang === 9) ||
    (ngay === 30 && thang === 11)
  ) {
    ngay = 1;
    thang += 1;
  } else {
    ngay += 1;
  }

  document.getElementById("ketQua").innerHTML =
    "Ngày mai: " + ngay + " Tháng: " + thang + " Năm: " + nam;
};

document.getElementById("btnCheckYesterday").onclick = function () {
  var ngay = +document.getElementById("ngay").value;
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;

  var ketQua;

  if (ngay === 1 && thang === 1) {
    ngay = 31;
    thang = 12;
    nam -= 1;
  } else if (
    (ngay === 1 && thang === 1) ||
    (ngay === 1 && thang === 5) ||
    (ngay === 1 && thang === 7) ||
    (ngay === 1 && thang === 8) ||
    (ngay === 1 && thang === 10) ||
    (ngay === 1 && thang === 12)
  ) {
    ngay = 30;
    thang -= 1;
  } else if (ngay === 1 && thang === 3) {
    ngay = 28;
    thang -= 1;
  } else if (
    (ngay === 1 && thang === 4) ||
    (ngay === 1 && thang === 6) ||
    (ngay === 30 && thang === 9) ||
    (ngay === 30 && thang === 11)
  ) {
    ngay = 31;
    thang -= 1;
  } else {
    ngay -= 1;
  }

  document.getElementById("ketQua1").innerHTML =
    "Hôm qua: " + ngay + " Tháng: " + thang + " Năm: " + nam;
};

//Bài2:
// Bước 1: Nhập vào tháng năm
// Bước 2: Sử dụng if else để xác định tháng nào 30, và 31, xác định năm nhuận
// Bước 3: xuất kết quả
document.getElementById("btnCheck").onclick = function () {
  var thang = +document.getElementById("thang1").value;
  var nam = +document.getElementById("nam1").value;
  var ketQua2;

  if ((thang === 2) & (nam % 4 === 0) || (thang === 2) & (nam % 400 === 0)) {
    ngay = 29;
  } else if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    ngay = 31;
  } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
    ngay = 30;
  } else {
    ngay = 28;
  }

  document.getElementById("ketQua2").innerHTML =
    "Tháng " + thang + " có " + ngay + " ngày";
};

// Bài 3:
// Bước 1: Nhập vào số nguyên 3 chữ số
// Bước 2: lấy từng số ra rồi gán cách đọc
// Bước 3: xuất kết quả
document.getElementById("btnDoc").onclick = function () {
  var num = +document.getElementById("so").value;

  var so1 = +String(num).charAt(0);
  var so2 = +String(num).charAt(1);
  var so3 = +String(num).charAt(2);

  var chu1, chu2, chu3;

  var ketQua;

  switch (so1) {
    case 0:
      var chu1 = "Không";
      break;
    case 1:
      var chu1 = "một";
      break;
    case 2:
      var chu1 = "hai";
      break;
    case 3:
      var chu1 = "ba";
      break;
    case 4:
      var chu1 = "bốn";
      break;
    case 5:
      var chu1 = "năm";
      break;
    case 6:
      var chu1 = "sáu";
      break;
    case 7:
      var chu1 = "bảy";
      break;
    case 8:
      var chu1 = "tám";
      break;
    case 9:
      var chu1 = "chín";
      break;
  }

  switch (so2) {
    case 0:
      var chu2 = "Không";
      break;
    case 1:
      var chu2 = "một";
      break;
    case 2:
      var chu2 = "hai";
      break;
    case 3:
      var chu2 = "ba";
      break;
    case 4:
      var chu2 = "bốn";
      break;
    case 5:
      var chu2 = "năm";
      break;
    case 6:
      var chu2 = "sáu";
      break;
    case 7:
      var chu2 = "bảy";
      break;
    case 8:
      var chu2 = "tám";
      break;
    case 9:
      var chu2 = "chín";
      break;
  }

  switch (so3) {
    case 0:
      var chu3 = "Không";
      break;
    case 1:
      var chu3 = "một";
      break;
    case 2:
      var chu3 = "hai";
      break;
    case 3:
      var chu3 = "ba";
      break;
    case 4:
      var chu3 = "bốn";
      break;
    case 5:
      var chu3 = "năm";
      break;
    case 6:
      var chu3 = "sáu";
      break;
    case 7:
      var chu3 = "bảy";
      break;
    case 8:
      var chu3 = "tám";
      break;
    case 9:
      var chu3 = "chín";
      break;
  }

  if (num < 10) {
    ketQua = chu1;
  } else if (num == 10) {
    ketQua = " mười";
  } else if (
    num == 20 ||
    num == 30 ||
    num == 40 ||
    num == 50 ||
    num == 60 ||
    num == 70 ||
    num == 80 ||
    num == 90
  ) {
    ketQua = chu1 + " mươi";
  } else if (num <= 99) {
    if (so1 === 1) {
      ketQua = "mười " + chu2;
    } else {
      ketQua = chu1 + " " + chu2;
    }
  } else if (num <= 999) {
    if (so1 === 1 && so2 === 1) {
      ketQua = chu1 + " trăm mười " + chu3;
    } else {
      ketQua = chu1 + " trăm " + " " + chu2 + " " + chu3;
    }
  }
  document.getElementById("ketQua3").innerHTML = ketQua;
};

// Bài 4:
// Bước 1: Nhập vào tên và tọa độ
// Bước 2: Tính khoảng cách giữa hai điểm dựa vào công thức tính d trong toán
// Bước 3: Xuất kết quả
document.getElementById("btnTinh1").onclick = function () {
  x1 = document.getElementById("x1").value;
  y1 = document.getElementById("y1").value;

  x2 = document.getElementById("x2").value;
  y2 = document.getElementById("y2").value;

  x3 = document.getElementById("x3").value;
  y3 = document.getElementById("y3").value;

  x4 = document.getElementById("x4").value;
  y4 = document.getElementById("y4").value;

  var longDistance1 = x1 - x4;
  var longDistance2 = y1 - y4;

  var ketQua1 = Math.sqrt(
    longDistance1 * longDistance1 + longDistance2 * longDistance2
  );

  var lanDistance1 = x2 - x4;
  var lanDistance2 = y2 - y4;

  var ketQua2 = Math.sqrt(
    lanDistance1 * lanDistance1 + lanDistance2 * lanDistance2
  );

  var phungDistance1 = x3 - x4;
  var phungDistance2 = y3 - y4;

  var ketQua3 = Math.sqrt(
    phungDistance1 * phungDistance1 + phungDistance2 * phungDistance2
  );

  var ketQua4;

  if (ketQua1 > ketQua2 && ketQua1 > ketQua3) {
    ketQua4 = "Long xa trường nhất";
  } else if (ketQua2 > ketQua1 && ketQua2 > ketQua3) {
    ketQua4 = "Lân xa trường nhất";
  } else if (ketQua3 > ketQua1 && ketQua3 > ketQua2) {
    ketQua4 = "Phụng xa trường nhất";
  } else {
    ketQua4 = "đoạn đường tới trường cả ba bằng nhau";
  }

  document.getElementById("ketQua4").innerHTML = ketQua4;
};
