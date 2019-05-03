// JavaScript source code
$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    //kiểm tra tên: *, theo mẫu
    function KiemtraMa() {
        var re = /^[a-zA-Z' ]+/;
        if ($("#txtHoTen").val() == "") {
            $("#tbHoTen").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtHoTen").val())) {
            $("#tbHoTen").html("* Họ tên theo mẫu: Hà Tiểu Ly");
            return false;
        }
        $("#tbHoTen").html("*");
        return true;
    }
    $("#txtHoTen").blur(KiemtraMa);
    //$("#txtIsHocSinh").blur(KiemtraMa);
    function KiemtraIsHS() {
        var re = /^[a-zA-Z' ]+/;
        if ($("#txtIsHocSinh").val() == "") {
            $("#tbIsHocSinh").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtIsHocSinh").val())) {
            $("#tbIsHocSinh").html("* Nhập theo mẫu : Học sinh or GV");
            return false;
        }
        $("#tbIsHocSinh").html("*");
        return true;
    }
    $("#txtIsHocSinh").blur(KiemtraIsHS);
    //kiểm tra email: *
    function KiemtraEmail() {
        var em="/^[a-zA-Z0-9]+\@[a-zA-Z]{4,7}+\.[a-zA-Z]{3}/";
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("* bắt buộc nhập");
            return false;
        }
        if (!em.test($("#txtEmail").val())) {
            $("#tbEmail").html("* Email theo mẫu: abc@gmail.com");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KiemtraEmail);

    function KiemtraSDT() {
        var sdt="/^(01\d{9})|(09\d{8})$/"; 
        if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("* bắt buộc nhập");
            return false;
        }
        if (!em.test($("#txtSDT").val())) {
            $("#tbSDT").html("* SDT theo mẫu: 01aaaaaaaa or 09hhhmmmll");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KiemtraSDT);

   
    

});

function TrangChu() {
    let users;
    if (localStorage.getItem('users')){
         users = JSON.parse(localStorage.getItem('users'));
         console.log(users);
    } else {
         users = []
    }
    let info = {}
    info.stt = users.length*1+1;
    info.ten = $("#txtHoTen").val();
    users.push(info);
    localStorage.setItem('users', JSON.stringify(users))
    let current_user = {}
    current_user.stt = info.stt;
    current_user.ten = info.ten
    localStorage.setItem('current_user',JSON.stringify(current_user))
    // console.log(users);
	// $("#dangnhap").submit(function(e){
	// 		var row="<tr><td>"+stt+"</td>";
	// 		row=row+"<td>"+$("#txtHoTen").val()+"</td><tr>";
	// 		$("#tblTopDiemThi").append(row);
	// 		stt++;
	// 		return false;
	// });
    window.location="../HTML/TrangChu.html";
}

