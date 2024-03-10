var information=[];

function test() {
    /*var fname=document.getElementById("fname")
    var lname=document.getElementById("lname")
    var department=document.getElementById("department")*/

    var fname = $('#fname')[0].value;
    var lname = $('#lname')[0].value;
    var gender = $('input[name=gender]:checked', '#myform').val();
    var age = $('#age')[0].value;
    var rnumber = $('#rnumber')[0].value;
    var department = $('#department')[0].value;
    var birthday = $('#birthday')[0].value;

    var student={
        fname: fname,
        lname: lname,
        gender: gender,
        age: age,
        department: department,
        rnumber: rnumber,
        birthday: birthday
    };

    information.push(student);

    //$('input').css('background-color', 'grey')

    //greetMe(fname.value + " " + lname.value); 
        //when using this with jquery, we get undefined
    /*greetMe(fname[0].value + " " + lname[0].value + " "+ gender + " " + age[0].value + " "+ 
    + " " + rnumber[0].value + " "+ birthday[0].value);*/
        //why is it iterable

   alert(`Hello ${fname} ${lname} (${department}, ${rnumber}), age ${age}, ${gender}, ${birthday}`);//backtick
};

function store(){
    var rnumber = $('#rnumber')[0].value;
    alert(`Get ${rnumber}`);

    var studentinfo=information.find(function (s) { //anonymous function
        return s.student.rnumber==rnumber;
    });

    alert(`${studentinfo}`);

    /*if(studentinfo){
        alert(`${studentinfo}`);
    }
    else
    {
        alert('Student not found');
    }*/
}