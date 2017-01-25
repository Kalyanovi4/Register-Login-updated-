$(document).ready(function() {
// On Click SignIn Button Checks For Valid E-mail And All Fields Should Be Filled
    $("#third").hide();
    $("#forth").hide();
    $("#content").hide();
    $("#save").hide();
    $("#login").on('click', function() {
        if ($("#loginemail").val() == '' || $("#loginpassword").val() == '') {
            alert("Please fill all fields!");
        } else if (($("#loginemail").val() != $("#registeremail").val() || $("#loginpassword").val() != $("#registerpassword").val())){
            alert("Passed email or password doesn't match registered!");
        } else {
            alert("You have successfully Logged in!");
            $('#signUpForm')[0].reset();
            $("#first").hide();
            $("#content").show();
            $("#third").show();
        }
    });

    $("#register").on('click', function() {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var letters = /^[A-Za-z]+$/;
        if ($("#name").val() == '' || $("#registeremail").val() == '' || $("#registerpassword").val() == '' || $("#contact").val() == '') {
            alert("Please fill all fields!");
        } else if (!($("#registeremail").val()).match(email)) {
            alert("Please enter valid Email!");
        } else if (!($("#name").val()).match(letters)) {
            alert("Your name must have alphabet characters only!");
        } else {
            alert("You have successfully Sign Up, Now you can login!");
            $("#second").slideUp("slow", function() {
                $("#first").slideDown("slow");
            });
        }
    });

    //On click hides main page and shows addForm
    $("#add").on('click', function() {
        $("#third").hide("slow", function() {
            $("#forth").show("slow");
        });
    });

    $('#addData').on('click', function() {
        var inputData = '<tr><td>' + $('#firstF').val() + '</td> <td>' + $('#secondF').val() + '</td> <td>' + $('#thirdF').val() + '</td> <td>' + $('#forthF').val() + '</td> <td>' + $('#fifthF').val() + '</td>><td>' + $('#sixF').val() + '</td></tr>';
        $('#myTable tbody').append(inputData);
        $('#addDataForm')[0].reset();
        $('#forth').hide();
        $('#third').show();
        var myTable = $('#myTable').html();
        localStorage.setItem('myTable', myTable);
        return false;
    });

        //Making row highlighted
        $(document).on('click', '#myTable tbody tr', function () {
            $('tr').not('thead tr').removeClass('highlight');
            $(this).not('thead tr').addClass("highlight");
            $('#edit').prop("disabled", false);
            $('#remove').prop("disabled", false);
        });

        $('#edit').on('click', function() {
            $('#edit').hide();
            $('.highlight').find('td').each(function(){
                var html = '<input type="text" value="' + $(this).html() + '" />';
                $(this).html(html);
            });
            $('#save').show();
            var myTable = $('#myTable').html();
            localStorage.setItem('myTable', myTable);
            return false;
        });

        $('#save').on('click', function(){
            $('.highlight').find('td').each(function(){
                $(this).html($(this).find('input').val());
            });
            $('#save').hide();
            $('#edit').show().prop("disabled", true);
            $('tr').not('thead tr').removeClass('highlight');
            $('#remove').prop("disabled", true);
            var myTable = $('#myTable').html();
            localStorage.setItem('myTable', myTable);
            return false;
        });

        $('#remove').on('click', function(){
            $('.highlight').remove();
            $('#edit').prop("disabled", true);
            $('#remove').prop("disabled", true);
            var myTable = $('#myTable').html();
            localStorage.setItem('myTable', myTable);
            return false;
        });


        //SORTING
        function sortTable(f, n) {
            var rows = $('#myTable tbody tr').get();

            rows.sort(function (a, b) {
                var A = getVal(a);
                var B = getVal(b);
                if (A < B) {
                    return -1 * f;
                }
                if (A > B) {
                    return 1 * f;
                }
                return 0;
            });

            function getVal(elm) {
                var v = $(elm).children('td').eq(n).text().toUpperCase();
                if ($.isNumeric(v)) {
                    v = parseInt(v, 10);
                }
                return v;
            }

            $.each(rows, function (index, row) {
                $('#myTable').children('tbody').append(row);
            });
        }

        var f_firstCol = 1, f_secondCol = 1, f_thirdCol = 1, f_forthCol = 1, f_fifthCol = 1, f_sixCol = 1;

        $("#firstCol").on('click', function () {
            f_firstCol *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_firstCol, n);
        });
        $("#secondCol").on('click', function () {
            f_secondCol *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_secondCol, n);
        });
        $("#thirdCol").on('click', function () {
            f_thirdCol *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_thirdCol, n);
        });
        $("#forthCol").on('click', function () {
            f_forthCol *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_forthCol, n);
        });
        $("#fifthCol").on('click', function () {
            f_fifthCol *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_fifthCol, n);
        });
        $("#sixCol").on('click', function () {
            f_sixCol *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_sixCol, n);
        });

// On Click SignUp It Will Hide Login Form and Display Registration Form
    $("#signup").on('click', function() {
        $("#first").slideUp("slow", function() {
            $("#second").slideDown("slow");
        });
    });

// On Click SignIn It Will Hide Registration Form and Display Login Form
    $("#signin").on('click', function() {
        $("#second").slideUp("slow", function() {
            $("#first").slideDown("slow");
        });
    });

    if(localStorage.getItem('myTable')) {
        $('#myTable').html(localStorage.getItem('myTable'));
    }
});

var a = [{test: 1, a: [1,2,3,4]}, {test:2, a: [1,2]}];
localStorage.setItem('a', JSON.stringify(a));
if (localStorage.getItem('a')) {
    var b = JSON.parse(localStorage.getItem('a'));
    console.log(b);
    console.log(typeof b);
    b.forEach(function(val, key){
        console.log(val, '    ', key);
    });
}
