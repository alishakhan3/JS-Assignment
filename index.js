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

function test(event) {
    event.preventDefault();
    var fname = $('#fname')[0].value;
    var lname = $('#lname')[0].value;
    var gender = $('input[name=gender]:checked', '#myform').val();
    var age = $('#age')[0].value;
    var rnumber = $('#rnumber').val();
    var department = $('#department')[0].value;
    var birthday = $('#birthday')[0].value;
    var hobbies = $('#hobbies')[0].value;
    var hobbiesarray = hobbies ? hobbies.split(', ') : [];

    var student = {
        fname: fname,
        lname: lname,
        gender: gender,
        age: age,
        department: department,
        rnumber: rnumber,
        birthday: birthday,
        hobbies: hobbiesarray
    };

    information.push(student);

    alert(`Hello ${fname}!`);
    document.getElementById('myform').reset();
}


function store(event) {
    var rnum = $('#rnumber').val();
    var obj = null;
    var index = null;
    var l=information.length;

    for (let x = 0; x < l; x++) {
        obj = information[x];
        var r=obj.rnumber;

        if (r == rnum) 
        {
            index = x;
            break;
        }
    }
    event.preventDefault();
    if (index != null) {
        var infoString = "";
        for (var key in obj) {
            infoString += obj[key] + "\n";
        }
        {
            alert(infoString);
        }
    }
    else {
        alert('Student not found');
    }
    document.getElementById('myform').reset();
}


document.getElementById('submit').addEventListener('click', test);
document.getElementById('get').addEventListener('click', store);

