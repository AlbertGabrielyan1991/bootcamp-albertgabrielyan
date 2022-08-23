
/**
 * 1 Find the value that is not being repeated inside the given array
 */

function notBeingRepeated (arr) {

    let  newArr = []
    arr.forEach((element, index) => {
        if (arr.indexOf(element) !== index) {
            newArr.push(element)
        }

    });

    let  result = arr.filter(function(obj) { return newArr.indexOf(obj) == -1; });
    return result
}


notBeingRepeated(['a', 'b', 'c', 'd','c' ])


/**
 * 2 Find the smallest and the largest number from the supplied numeric array. Return an array containing these numbers։
 */


function maxMinItms (arr) {
    let result = []
    result.push(Math.max(...arr))
    result.push(Math.min(...arr))

   return result

}
maxMinItms([14, 28, 3, 8, 2])



/**
 * 3  From the given array of numbers create two arrays one containing only odd and the other only even numbers.
 */

function  oddAndEven (arr){
    let  evenNumber= []
    let  OddNumber= []
    arr.forEach((item)=>{
        if ( item % 2 == 0) {
            evenNumber.push(item)
            console.log('Even Number', item);
        }else{
            OddNumber.push(item)
        }
    })

    return evenNumber, OddNumber

}

oddAndEven ([1, 2, 3, 4,5,6,7,8,9,10])



/**
 * 4 Write a function to return only unique values of the given array.
 */


function notBeingRepeated (arr) {

    let  newArr = []
    arr.forEach((element, index) => {
        if (arr.indexOf(element) !== index) {
            newArr.push(element)
        }

    });

    let  result = arr.filter(function(obj) { return newArr.indexOf(obj) == -1; });
    return result
}


notBeingRepeated(['tarzan', 'tarzan', 'pupsik', 'd','pupsik' ])



/**
 * 5 Create a function that accepts 2 arrays of words and returns the common words from each.
 */


function commonWords (arr1,arr2){
    let arr = arr1.concat(arr2);
    let  result = []
    arr.forEach((element, index) => {
        if (arr.indexOf(element) !== index) {
            result.push(element)
        }

    });



    return result

}



commonWords (["dog", "cat", "parrot"],["lizard", "rat", "cat"] )


/**
 * 6 Write a function that accepts 2 array arguments and returns a boolean value - Does the first array contain all elements represented in the second array.
 */


function  repiditwords (arr1,arr2) {
    let  result = []
    let arr =  arr1.length >= arr2.length ? arr1 : arr2
     arr.forEach((element, index) => {

      return result.push(arr2.includes(element))
    });

     return result
}


repiditwords (["dog", "cat", "parrot","lizard"],["lizard", "rat", "cat"])


/**
 * 7 From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.
 */


function scatterTwoArr(arr) {
    let arr1 = []
    let arr2 = []
    arr.forEach((item)=>{
        if(typeof item === "number"){

            arr1.push(item)

        }else if(typeof item === "string"){
            arr2.push(item)
        }

    })


        return arr1 ,arr2
}


scatterTwoArr(["dog", "cat", 1,"parrot","lizard",2,5,6])



/**
 * 8 Create a function that will reverse the given string.
 */


function reverseString(str) {
    let arr = [...str.toString()].reverse()
    let result = ''
    arr.forEach((item)=>{
        result += item

    })

    return result

}

reverseString('qdwqwwqd')

const payments = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe", // Name of the student
        payedAmount: 1600, // Amount payed with this transaction
        year: 2020, // The payment year
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1500,
        year: 2021
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1400,
        year: 2022
    },
    {
        studentId: 1, // Unique for each student
        studentName: "John Doe",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1500,
        year: 2020
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1400,
        year: 2021
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1300,
        year: 2023
    },
    {
        studentId: 2, // Unique for each student
        studentName: "Lu Kang",
        payedAmount: 1200,
        year: 2023
    }
];

/**
 * 9 Find the max payment
 */

function  maxPayedAmount(arr){

    return Math.max(...arr.map(itm=> itm.payedAmount))

}


maxPayedAmount(payments)

/**
 * 10 Calculate the sum of all payments
 */

function paymentsSum(arr){
    let result = 0
    arr.map((item)=>{
        result += item.payedAmount

    })
  return result

}


paymentsSum(payments)


/**
 * 11 Find the count of all payments that are more than 1500
 */

function  countPayments (arr){
    let result = 0
    arr.map((item)=>{
       if(item.payedAmount >1500){

           result = result + 1
       }
    })

    return result
}

countPayments (payments)


/**
 * 12  F Calculate the average of all payments
 */


function averagePayments (arr){
    let result = []
    arr.map((item)=>{
       result.push(item.payedAmount / 2)
    })

    return result
}


averagePayments (payments)


/**
 *13 Calculate the total sum of payment amounts made by each student. We need to return an array that contains a list of information about students, including the total paid amount by the student.
 */

/**
 *13 es harc chhaskaca
 */



function calculateSumPayment(arr) {
    let total = 0
    arr.map((item)=>{
        total += item.payedAmount

    })

    arr.push({total :total})
    return arr

}


calculateSumPayment(payments)



const evaluations = [
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 70
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 60
    },
    {
        studentId: 1, // Unique identifier for each student
        studentName: "John Doe",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 60
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 50
    },
    {
        studentId: 2, // Unique identifier for each student
        studentName: "Tom Colins",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 40
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 1, // Unique identifier for each course
        courseName: "JS Bootcamp",
        score: 45
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 2, // Unique identifier for each course
        courseName: "JS Level 0",
        score: 35
    },
    {
        studentId: 3, // Unique identifier for each student
        studentName: "Sarah Conor",
        courseId: 3, // Unique identifier for each course
        courseName: "JS Level 1",
        score: 25
    }
];





/**
 *14.  Return  the evaluation record with the lowest evaluation score,
 */


function lowestScore(arr){

    return Math.min(...arr.map(itm=> itm.score))
}


lowestScore(evaluations)


/**
 *15.  Return the name of the student who has the lowest evaluation score․
 */


function  minScoreStudent (arr) {
        let result
   arr.map((student)=>{
       if (Math.min(...arr.map(itm=> itm.score)) === student.score){
           result = student

       }
   })

  return result

}

minScoreStudent (evaluations)


/**
 *  16.  Return array of students that have any evaluation more than 60․
 *
 */


function evaluationCheck (arr ,score) {

    const result = arr.filter(word => {

            return word.score > score

    });

    return result

}

evaluationCheck (evaluations,60)


/**
 *  17.  Return array of students for whom the average evaluation is less than 40
 *
 */



function evaluationCheck (arr ,score) {

    const result = arr.filter(word => {

        return word.score / 2 < 40

    });
    return result

}

evaluationCheck (evaluations,40)


/**
 *  18. Return array of courses including average evaluation for each course,
 *
 */

 function  averageEvaluationCourse (arr) {
     let result = []
    arr.forEach((item)=>{
        result.push({ courseName: item.courseName, averageEvaluation:item.score / 2 })
    })

    return result
}

averageEvaluationCourse (evaluations)