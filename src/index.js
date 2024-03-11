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

    alert(`Hello ${fname} ${lname} (${department}, ${rnumber}, age: ${age}, ${gender}, ${birthday})`);//backtick
    alert(`Hobbies: ${hobbiesarray}`);
};

function store() {
    var rnumber = parseInt($('#rnumber').val());

    const studentinfo = information.find(student => student.rnumber == rnumber);

    if(studentinfo){
        alert(`${studentinfo.fname} ${studentinfo.lname}`);
    }
    else
    {
        alert('Student not found');
    }
}
