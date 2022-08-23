const employees = [
    {
        "firstName": "Arabela",
        "lastName": "Fockes",
        "email": "afockes0@wired.com",
        "salary": "$6.18",
        "isEngineer": true,
        "gender": "Female"
    },
    {
        "firstName": "Bryant",
        "lastName": "Marchi",
        "email": "bmarchi1@theatlantic.com",
        "salary": "$8.05",
        "isEngineer": false,
        "gender": "Male"
    },
    {
        "firstName": "Batholomew",
        "lastName": "Eim",
        "email": "beim2@goodreads.com",
        "salary": "$7.26",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Ritchie",
        "lastName": "Ferreira",
        "email": "rferreira3@booking.com",
        "salary": "$4.07",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Kaylyn",
        "lastName": "Ivain",
        "email": "kivain4@gmpg.org",
        "salary": "$5.89",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Wilhelmina",
        "lastName": "Portigall",
        "email": "wportigall5@plala.or.jp",
        "salary": "$2.06",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Rouvin",
        "lastName": "Gillcrist",
        "email": "rgillcrist6@aol.com",
        "salary": "$7.29",
        "isEngineer": true,
        "gender": "Male"
    },
    {
        "firstName": "Flemming",
        "lastName": "Scroggins",
        "email": "fscroggins7@msu.edu",
        "salary": "$7.54",
        "isEngineer": false,
        "gender": "Male"
    },
    {
        "firstName": "Flemming",
        "lastName": "Scroggins",
        "email": "sschlagh8@reuters.com",
        "salary": "$2.24",
        "isEngineer": false,
        "gender": "Female"
    },
    {
        "firstName": "Roxine",
        "lastName": "Bedo",
        "email": "rbedo9@whitehouse.gov",
        "salary": "$6.47",
        "isEngineer": false,
        "gender": "Female"
    }
]


/**
 * 1 comma-separated full names
 */
function fullNames() {
    let fullName = []
    for (let i = 0; i < employees.length; i++) {
        fullName.push(` ${employees[i].firstName} ${employees[i].lastName}`)
    }
    return fullName.toString()

}


fullNames()

/**
 * 2. Create a function that is receiving a collection of employees
 */
function collectionOfEmployees() {
    let result = []

    for (let i = 0; i < employees.length; i++) {
        result.push(`${employees[i].email} ${':'} ${employees[i].salary} `)
    }
    return result.toString()

}

collectionOfEmployees()

/**
 * 3. custom Array.prototype.myToString
 */

Array.prototype.myToString = function () {
    let result = ''

    for (let i = 0; i < this.length; i++) {

        result += `${this[i]}${i < this.length - 1 ? ',' : ''}`

    }
    return result

};
employees.myToString()


/**
 * 4. collection of employees and returns a string containing emails
 */


function stringContainingEmails() {
    let result = []

    for (let i = 0; i < employees.length; i++) {
        result.push(`${employees[i].email}`)
    }
    return result.join('//')

}

stringContainingEmails()


/**
 * 5. function that is receiving a collection of employees and returns a string with comma-separated email: salary
 */

function receivingEmailSalary() {
    let result = []

    for (let i = 0; i < employees.length; i++) {
        result.push(`${employees[i].email}':'${employees[i].salary}`)
    }

    return result.join(',')
}

receivingEmailSalary()


/**
 * 6. custom Array.prototype.myJoin should work similarly to Array.prototype.join
 */


Array.prototype.myJoin = function (operators) {
    let result = ''

    for (let i = 0; i < this.length; i++) {

        result += `${this[i]}${i < this.length - 1 ? operators : ''}`

    }
    return result
};

employees.myJoin('//')


/**
 * 7.function that is receiving an array and returns reversed one using pop()
 *
 */


function returnsReversed(arr) {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr.pop())
    }

    return result
}


returnsReversed([1, 2, 5, 4])


/**
 * 8 function that is receiving a sting argument and checks if it is a palindrome using pop()
 *
 */


function checkPalindrom(str) {
    let result = str
    let arrReverse = []
    let strToArr = str.split("")

    for (let i = strToArr.length - 1; i >= 0; i--) {
        arrReverse.push(strToArr.pop())

    }
    return result === arrReverse.join('')
}

checkPalindrom('xax')


/**
 * 9  custom Array.prototype.myPop should work similarly to Array.prototype.pop
 *
 */


Array.prototype.myPop = function () {
    let result = this[this.length - 1]
    this.splice(this.length - 1, 1)
    return result
};
let arr = [1, 2, 5, 4]

arr.myPop()


/**
 * 10  Create a function that is receiving a number and returns an array which is containing all even digits. Use push method
 *
 */


function evenDigits(arr) {
    const result = [];

    arr.forEach(number => {
        if (number % 2 === 0) {
            result.push(number);
        }
    });
    return result;
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

evenDigits(myArr)


/**
 * 11  Create a function that is receiving a number and returns an array which is containing all even digits. Use push method ?????
 *
 */


/**
 * 12 Create a custom Array.prototype.myPush should work similarly to Array.prototype.push
 *
 */


Array.prototype.myPush = function (...str) {
    this.splice(this.length, 0, ...str);

    return this.length
};
let myArrForPush = [1, 2, 5, 4]

myArrForPush.myPush(1, 'weewew', 15)


/**
 * 13 Create a custom Array.prototype.myShift should work similarly to Array.prototype.shift
 *
 */


Array.prototype.myShift = function () {
    let result = `${this.splice(0, 1)}`
    return result
};
let myArrForShift = [1, 2, 5, 4]

myArrForShift.myShift()


/**
 * 14 Create a custom Array.prototype.myUnshift should work similarly to Array.prototype.unshift
 *
 */


Array.prototype.myUnshift = function (...str) {

    return this.splice(0, 0, ...str);
};

let myArrForMyUnshift = [1, 2, 5, 4]

myArrForMyUnshift.myUnshift("Lemon", "Pineapple")

/**
 * 15. Using concat compute the union of two arrays and then remove all duplicated items if they exist
 *
 */


function unionTwoArrays(arr1, arr2) {
    const array3 = arr1.concat(arr2)
    let filteredArr = array3.filter(function (item, index) {
        if (array3.indexOf(item) == index) {
            return item;
        }

    });
    return filteredArr
}

let arr_one = [1, 2, 3, 'x']
let arr_two = [1, 2, 3, 4]

unionTwoArrays(arr_one, arr_two)


/**
 * 16. Using concat compute the union of two arrays and then remove all duplicated items if they exist
 *
 */


Array.prototype.myConcat = function (...arr) {
    let newArr = arr.flat()
    for (let i = 0; i < newArr.length; i++) {
        this.push(newArr[i])
    }
    return this
};
let myArrForMyConcat = [1, 2, 5, 4]
let myArrForMyConcat_two = [1, 2, 3, 4, 5]
myArrForMyConcat.myConcat(myArrForMyConcat_two)


/**
 * 17. UUsing the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive.
 *
 */



function getMissing(array) {

    for (var i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] != 1) {
            array.splice(i, 0, array[i] - 1)
            getMissing(array)
            return array
        }
    }


}

getMissing([1, 4, 6, 15])


/**
 * 18. Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers
 *
 */


function removingDuplicated(arr) {


    let uniqueChars = [];
    arr.forEach((element, i) => {
        if (!uniqueChars.includes(element)) {
            uniqueChars.splice(i, 0, element)
        }
    });

    return uniqueChars

}


removingDuplicated([2, 1, 2, 3, 3, 3, 4, 5, 6, 6])


/**
 * 19.  Create a custom Array.prototype.mySplice should work similarly to Array.prototype.splice
 *
 *  ESMEK PINELEM
 */


Array.prototype.mySplice = function (startNumber, numberCount, ...arr) {
    let newArr = []
    let result
    let start = startNumber

    if (startNumber === 0 && numberCount === 0) {
        console.log(1)
        newArr.push(arr)
        result = newArr.flat()
        for (let i = 0; i < this.length; i++) {
            result.push(this[i])

        }
    }
    if (startNumber !== 0 && arr.length > 0) {
        console.log(2)
        for (let i = 0; i < start; i++) {
            newArr.push(this[i])
            if (start === i + 1) {
                newArr.push(arr)
            }
        }
        for (let i = newArr.length - 1; i < this.length; i++) {
            newArr.push(this[i])
        }
        result = newArr.flat()
    }


    if (startNumber && numberCount) {
        let i
        for (i = 0; i < start; i++) {

            newArr.push(this[i])

        }
        i = i + numberCount

        for (i; i < this.length; i++) {
            newArr.push(this[i])
        }

        result = newArr
    }

    this.length = 0
    for (let i = 0; i < result.length; i++) {
        this.push(result[i])
    }

    return this
};
let myArrForMySplice = [1, 2, 5, 6, 4]

myArrForMySplice.mySplice(2, 1)

/**
 * 20.  Using slice, write a JavaScript function to clone an array
 *
 */

function cloneArr(arr) {
    const numberArr = arr
    const clone = numberArr.slice()

    return clone
}

cloneArr([1, 2, 3])

/**
 * 21.  Using slice, Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
 *
 *
 * es Harc lav chem haskace
 */

function cutLastElement(arr) {

    let n = arr.slice(-1)

    return n
}


cutLastElement([1, 2, 3, 4, 5, 6, 7])

/**
 * 22 Using slice, Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
 *
 *
 * esel  het
 */

function cutFirstElement(arr) {

    let n = arr.slice(0, 1)

    return n
}

cutFirstElement([1, 2, 3, 4, 5, 6, 7])


/**
 * 23 Create a custom Array.prototype.mySlice should work similarly to Array.prototype.slice
 *
 */


Array.prototype.mySlice = function (str, end) {
    let newArr = []
    let result

    if (str > 0 && !end) {
        for (let i = str; i < this.length; i++) {
            newArr.push(this[i])
        }
    }

    if (str === 0 || str > 0 && end > 0)
        for (let i = str; i < end; i++) {
            newArr.push(this[i])
        }

    if (str < 0) {

        for (let i = this.length + str; i < this.length; i++) {
            newArr.push(this[i])

        }
    }


    if (str && end < 0) {
        for (let i = str; i < this.length + end; i++) {
            newArr.push(this[i])
        }

    }

    return result
}

let myArrForMySlice = [1, 2, 3, 4, 5, 6, 7]

myArrForMySlice.mySlice(-5)


/**
 * 24 Using sort, Write a JavaScript function to get the max element of an array of numbers
 *
 */


function maxElement(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });

    return arr.pop()
}

maxElement([1, 6, 4, 456, 5, 6, 1111111])


/**
 * 25 Using sort, Write a JavaScript function to get the min element of an array of numbers
 *
 */


function minElement(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });


    return arr.shift()
}

minElement([-1, 0, 1, 6, 4, 456, 5, -2, 6, 1111111])


/**
 * 26 Using sort, Write a JavaScript function to sort the collection of employees by their name
 *
 */


function collectionEmployees(arr) {

    return arr.sort()
}


collectionEmployees(["Poxos", "Martiros", "Antonio", "Toni", "Alexandro", "Bulo"])


/**
 * 27 Create a custom Array.prototype.mySort should work similarly to Array.prototype.sort
 *
 */


Array.prototype.mySort = function (fu) {

    if (typeof fu === "function") {
        let first = this.slice(1, this.length)
        let second = this.slice(0, this.length - 1)
        let sum = []
        let someValidation = []
        let Validation = false
        for (let i = 0; i < first.length; i++) {
            sum.push(fu(first[i], second[i]))
            someValidation.push(second[i] - first[i])
        }
        for (let i = 0; i < sum.length; i++) {
            if (someValidation[i] === sum[i]) {
                Validation = true
            }
            if (sum[i] < 0) {
                for (let i = 0; i < this.length; i++) {
                    for (let j = 0; j < (this.length - i - 1); j++) {
                        if (this[j] > this[j + 1]) {
                            let temp = this[j]
                            this[j] = this[j + 1]
                            this[j + 1] = temp
                        }
                    }
                }
            }
        }

        if (Validation) {
            this.reverse()
        }


    }

    if (this.every(i => (typeof i === "string")) && typeof fu !== "function") {
        let result = [];
        for (let i = 97; i < 123; ++i) {
            for (let j = 0; j < this.length; j++) {
                if (this[j].toLowerCase().charCodeAt() === i) {
                    result.push(this[j])

                }

            }
        }

        this.length = 0
        result.forEach((itm) => {
            this.push(itm)
        })
    }


    if (this.every(i => (typeof i === "number")) && typeof fu !== "function") {
        let temp = 0;
        for (let i = 0; i < this.length; i++) {
            for (let j = i; j < this.length; j++) {
                let arrItemToString = this[i].toString()
                let arrItemToStringSecond = this[j].toString()
                if (arrItemToStringSecond < arrItemToString) {
                    temp = this[j];
                    this[j] = this[i];
                    this[i] = temp;
                }
            }
        }
    }


    return this
};

let arrSort = ['a', 'b', 'd', 'c', 'd,', 'ABO', 'bo']
arrSort.mySort()


/**
 * 28 CUsing reverse, write a function that checks if the string is a palindrome
 *
 */

function palindrome(str) {
    return str === str.split('').reverse().join('');
}

palindrome('adam')


/**
 * 29 Using the map, write a function to clone an array
 *
 */


function cloneArrMap(arr) {

    let numbers = arr
    let numbersClone = numbers.map((itm) => itm)
    return numbersClone
}


cloneArrMap([1, 2, 3, 4])


/**
 * 30 Using the map write a function that returns an array containing only firstNames of all  employees
 *
 */

function firstNamesOfEmployees(employees) {

    return employees.map((item) => {
        return item.firstName;
    })

}

firstNamesOfEmployees(employees)


/**
 * 31 Using the filter, write a JavaScript function to clone an array
 *
 */


function cloneArrayFilter(arr) {

    let numbers = arr
    let numbersClone = numbers.filter((itm) => itm)
    return numbersClone

}


cloneArrayFilter([1, 2, 3, 4])


/**
 * 32 Write a function that will return only employees with salary greater than n
 *
 */


function employeesSalary(n) {

    let result = []
    employees.filter((itm) => {
        if (n < itm.salary.replace(/[^0-9,.]/g, ' ')) {
            result.push(itm.firstName)
        }

    })

    return result
}

employeesSalary(5)


/**
 * 33 Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter
 *
 */


Array.prototype.myFilter = function (fu) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
        if (fu(this[i])) {
            filtered.push(this[i]);
        }
    }

    return filtered;

}


const data = [1, 2, 3, 4, 5];

data.myFilter(function (el) {
    return el < 3

})


/**
 * 34 Using reduce write a function that returns the total salary of all employees
 *
 */


function totalSalary(employees) {
    let result = []
    employees.map((item) => {
        result.push(parseFloat(item.salary.replace(/[^0-9,.]/g, ' ')))

    })

    result = result.reduce((total, num) => {

        return total + num
    })

    return result
}


totalSalary(employees)


/**
 * 35 Using reduce create a function that is receiving a collection of employees and returns a string containing emails in the following format
 *
 */


function collectionOfEmployeesRedu(employees) {
    let result = []

    employees.map((item) => {
        result.push(item.email)

    })

    result = result.reduce(function (total, val, index) {
        let comma = total.length ? "//" : "";
        return total + comma + val;
    }, '');

    return result
}


collectionOfEmployeesRedu(employees)


/**
 * 36 Using every() create a function that is checking if all employees have a salary of more than n
 *
 */

function employeesSalaryUsingEvery(employees) {
    let result
    let n = 5


    result = employees.every((sal) => {
        return parseFloat(sal.salary.replace(/[^0-9,.]/g, ' ')) > n;
    })


    return result
}

employeesSalaryUsingEvery(employees)


/**
 * 37 Using every() create a function that is checking if all employees are engineers
 *
 */


function employeesAreEngineers(employees) {
    let result

    result = employees.every((sal) => {
        return sal.isEngineer
    })

    return result

}

employeesAreEngineers(employees)


/**
 * 38 Write a function to check if all employees are Male
 *
 */

function employeesAreMale(employees) {
    let result

    result = employees.every((sal) => {
        return sal.gender === "Male"
    })
    return result

}

employeesAreMale(employees)


/**
 * 39 Write a function that will ensure that there are Females in the list of employees
 *
 */


function femalesEmployees(employees) {
    let result
    let text
    result = employees.some((itm) => {

        return itm.gender === 'Female'
    })

    if (result) {
        text = 'you have Females Females'
    } else if (result) {
        text = 'you don\'t  have Females'
    }

    return text
}

femalesEmployees(employees)


/**
 * 40 Write a function that will ensure that there are engineers in the list of employees
 *
 */


function engineersEmployees(employees) {
    let result
    let text
    result = employees.some((itm) => {
        return itm.isEngineer
    })
    if (result) {
        text = 'you have Females engineers'
    } else if (result) {
        text = 'you don\'t  have engineers'
    }

    return text
}

engineersEmployees(employees)


/**
 * 41 Write a function which is checking if a given element contains inside an array
 *
 */


function checkingElementAnArray(arrayChecking) {
    let result

    if (arrayChecking.indexOf(5) >= 0) {
        result = `yes you have ${arrayChecking[arrayChecking.indexOf(2)]}`
    }

}

let arrayChecking = [2, 5, 9];
checkingElementAnArray(arrayChecking)


/**
 * 42 Create a function that will find the employee by the provided name
 *
 */


function findName(employees) {
    let searchName = 'Arabela'
    let text
    let arr = []
    let result
    employees.find((name) => {
        arr.push(name.firstName === searchName)
        result = arr.some((element)=>element === true)

    })

    if (result){
        text = `you have`

    }else{

        text = 'you don\'t  have '
    }
    return text
}


findName(employees)
/**
 * 43 Create a function that will find the employee by filter.Example
 *
 */


function findEmployee (employees ,nameLastName){
    let result = []

    employees.find((name ,i) => {

        if (name.firstName === nameLastName.firstName && name.lastName === nameLastName.lastName){
            result.push(name)
        }

    })
    return result
}


findEmployee (employees,{firstName: `Flemming`, lastName: `Scroggins`})


/**
 * 44 Using form, write a JavaScript function to clone an array
 *
 */


function cloneFromArr (arr){

    const numberArr = arr
    const clone = Array.from(numberArr)


    return clone
}



cloneFromArr ([1, 2, 3])



/**
 * 45 Using from, and Set create a function that is removing duplicates from an array
 *
 */


function  removingDuplicateFromArr (item){
    let result
    let removingDuplicate =[...new Set(Array.from(item.toString().toLowerCase()))];
    result = removingDuplicate
        if(typeof item !== 'string' ){
            result = removingDuplicate.map(str => {
               return Number(str);
            })
        }

    return result
}

removingDuplicateFromArr(123456999)


/**
 * 46 Using from, turn the string into an array
 *
 */

function fromStringToArray (str){

    const arr = Array.from(str);

   return arr

}

fromStringToArray ('string')


/**
 * 47  Create a custom Array.prototype.myIncludes should work similarly to Array.prototype.includes
 *
 */


Array.prototype.myIncludes = function (data,index) {
        let result



        if(index || index >= 0){
            result = this[index] === data
        }else if(!index){
            result = this.some((itm)=>itm === data )
        }
        this.length = 0
        this.push(result)
        return  this[0]
}


const dataForMyIncludes = [1, 2, 3, 'y','x'];

dataForMyIncludes.myIncludes(1,0)



/**
 * 48  Write a function to check whether an `input` is an array or not. Provide 2 different solutions
 *
 */



function  isArray (arr){
    let text

    if(Array.isArray(arr)){

        text = 'yes it array'

    }else if(arr.constructor === Array ){
        text = 'yes it array'
    }else {
        text = 'no'
    }

    return text
}


isArray ([])

/**
 * 49  Write a function to find the difference of two arrays
 */



function difference (arr1,arr2){

    let difference1 = arr1.filter((itm,i) =>{
        return itm  !==  arr2[i]
    })



    let difference2 = arr2.filter((itm,i) =>{
        return itm !==  arr1[i]
    })

    Array.prototype.push.apply(difference1, difference2)

    return difference1
}

difference ([1,2,3,5],[1,2,3,4])

/**
 * 50 Write a function that will receive the length and the value and will return a pre-filled array
 */

function createArr(length,item) {
    let arr = [...item.toString()]

    return arr
}
createArr(5,12345)
