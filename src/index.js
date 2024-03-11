//import './work.css';
var information = [
    {
        fname: "Alisha",
        lname: "Khan",
        gender: "Female",
        age: 23,
        department: "CCE",
        rnumber: 1,
        birthday: "2001-01-28",
        hobbies: ["Reading", "Music"]
    }
];

function test() {
    /*var fname=document.getElementById("fname")
    var lname=document.getElementById("lname")
    var department=document.getElementById("department")*/

    var fname = $('#fname')[0].value;
    var lname = $('#lname')[0].value;
    var gender = $('input[name=gender]:checked', '#myform').val();
    var age = $('#age')[0].value;
    var rnumber = parseInt($('#rnumber').val());
    var department = $('#department')[0].value;
    var birthday = $('#birthday')[0].value;
    var hobbies = $('#hobbies')[0].value;
    hobbiesarray = hobbies.split(', ');

    var student = {
        fname: `${fname}`,
        lname: lname,
        gender: gender,
        age: age,
        department: department,
        rnumber: rnumber,
        birthday: birthday,
        hobbies: hobbiesarray
    };

    information.push(student);

    //$('input').css('background-color', 'grey')

    //greetMe(fname.value + " " + lname.value); 
    //when using this with jquery, we get undefined
    /*greetMe(fname[0].value + " " + lname[0].value + " "+ gender + " " + age[0].value + " "+ 
    + " " + rnumber[0].value + " "+ birthday[0].value);*/
    //why is it iterable

    alert(`Hello ${fname} ${lname} (${department}, ${rnumber}, age: ${age}, ${gender}, ${birthday})`);//backtick
    alert(`Hobbies: ${hobbiesarray}`);
};

/*function showinfo(studentinfo) {
    const result = $('#rsearch');
    result.empty();
    if (studentinfo) {
        for (const [key, value] of Object.entries(studentinfo)) {
            const newDiv = $('<div>').text(`${key} : ${value}`);
            result.append(newDiv);
        }
    } else {
        const newDiv = $('<div>').text(`Invalid Roll Number`);
        result.append(newDiv);
    }
}*/

function store() {
    var rnumber = parseInt($('#rnumber').val());

    const studentinfo = information.find(student => student.rnumber == rnumber);
    //showinfo(studentinfo);
    /*var studentinfo=information.find(function (s) { //anonymous function
        return s.student.rnumber==rnumber;
    });*/

    //alert(`${studentinfo}`);

    if(studentinfo){
        alert(`${studentinfo.fname} ${studentinfo.lname}`);
    }
    else
    {
        alert('Student not found');
    }
}
