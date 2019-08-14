var calc = function(num1, num2, calcType) {
    if(calcType === "add") {
        return num1 + num2;
    } else if(calcType == "sub") {
        return num1 - num2;
    }
}

//If you go by the above approach and if you ae building a library then every possible action needs to be implemented inside the if else condition
// So what we can do is have the operations as functions and pass them as callbacks

var add = function(a, b) {
    return a+b;

}


var multiply = function(a, b) {
    return a*b;

}

var calc = function(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 3, add))

//Real use of callback functions
// To sort an array of objects

var myArr = [{
    "num" : 1,
    "name": "cabbage"
},
{
    "num" : 3,
    "name": "apple"
},
{
    "num" : 2,
    "name": "banana"
}];

myArr.sort(function(a, b) {
    if(a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);

//Jquery kind of ajax callbacks

var success = function(data) {
    console.log("In success function");
}

var failure = function(data) {
    console.log("In failure function");
}

var get = function(url, data, successCallback, failureCallback) {
    if(data.success) {
        setTimeout(function(){ 
            return successCallback();
        }, 3000);
    } else {
        setTimeout(function(){ 
            return failureCallback();
        }, 3000);
    }
}

var sampledata = {
    "success": true
}

get("abc.com", sampledata, success, failure);