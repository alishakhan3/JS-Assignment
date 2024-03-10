/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import './work.css';\r\n\r\nvar information=[];\r\n\r\nfunction test() {\r\n    /*var fname=document.getElementById(\"fname\")\r\n    var lname=document.getElementById(\"lname\")\r\n    var department=document.getElementById(\"department\")*/\r\n\r\n    var fname = $('#fname')[0].value;\r\n    var lname = $('#lname')[0].value;\r\n    var gender = $('input[name=gender]:checked', '#myform').val();\r\n    var age = $('#age')[0].value;\r\n    var rnumber = $('#rnumber')[0].value;\r\n    var department = $('#department')[0].value;\r\n    var birthday = $('#birthday')[0].value;\r\n\r\n    var student={\r\n        fname: fname,\r\n        lname: lname,\r\n        gender: gender,\r\n        age: age,\r\n        department: department,\r\n        rnumber: rnumber,\r\n        birthday: birthday\r\n    };\r\n\r\n    information.push(student);\r\n\r\n    //$('input').css('background-color', 'grey')\r\n\r\n    //greetMe(fname.value + \" \" + lname.value); \r\n        //when using this with jquery, we get undefined\r\n    /*greetMe(fname[0].value + \" \" + lname[0].value + \" \"+ gender + \" \" + age[0].value + \" \"+ \r\n    + \" \" + rnumber[0].value + \" \"+ birthday[0].value);*/\r\n        //why is it iterable\r\n\r\n   alert(`Hello ${fname} ${lname} (${department}, ${rnumber}, age: ${age}, ${gender}, ${birthday}`);//backtick\r\n};\r\n\r\nfunction store(){\r\n    var rnumber = $('#rnumber')[0].value;\r\n    alert(`Get ${rnumber}`);\r\n\r\n    var studentinfo=information.find(function (s) { //anonymous function\r\n        return s.student.rnumber==rnumber;\r\n    });\r\n\r\n    alert(`${studentinfo}`);\r\n\r\n    /*if(studentinfo){\r\n        alert(`${studentinfo}`);\r\n    }\r\n    else\r\n    {\r\n        alert('Student not found');\r\n    }*/\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;