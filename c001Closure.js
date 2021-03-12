//What Is Closure?

//A closure is an inner function that has access to the outer (enclosing) function’s variables — scope chain.


// ***************************point1***************************
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    // this inner function has access to the outer function's     //variables, including the parameter
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
console.log(showName("Michael", "Jackson")); // Your name is Michael Jackson



// ***************************point2**************************
// Closures have access to the outer function’s variable even after the outer function returns

function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's               //variables, including the parameter
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName("Michael"); // At this juncture, the  //celebrityName outer function has returned.

// The closure (lastName) is called hereafter the outer function //has returned above
// Yet, the closure still has access to the outer function's //variables and parameter
console.log(mjName("Jackson")); // This celebrity is Michael Jackson


// ****************************point3****************
// Closures store references to the outer function’s variables

function celebrityID() {
    var celebrityID = 999;
    //We are returning an object with some inner functions
    //All the inner functions have access to the outer function's //variables
    return {
        getID: function () {
            //This inner function will return the UPDATED celebrityID variable
            //It will return the current value of celebrityID, even after the //changeTheID function changes it
            return celebrityID;
        },
        setID: function (theNewID) {
            //This inner function willchange outer function's variable anytime
            celebrityID = theNewID;
        }
    }
}

var mjID = celebrityID(); // At this juncture, the celebrityID //outer function has returned.
console.log(
    mjID.getID(), // 999
    mjID.setID(567), // Changes the outer function's variable
    mjID.getID() // 567: It returns the updated celebrityId variable
)


// ref:https://betterprogramming.pub/understand-javascript-closures-with-ease-aa1c808a929c





// function apiConnect(apiKey) {
//     function get(route) {
//         return fetch(`${route}?key=${apiKey}`);
//     }
//     return get;
// }

// const api = apiConnect('my-secret-key');

// // No need to include the apiKey anymore
// api.get('http://www.example.com/get-endpoint');
// api.post('http://www.example.com/post-endpoint', { name: 'Joe' });