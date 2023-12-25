// Project Name: Report

// Project description: adding numbers and showing the smallest and largest number and the average number

// Start date: Thursday, December 21

// End date: Sunday, December 25

// Email: robotgoodrobot@gmail.com

// Names of front end developers: 
// mobin
// Shayan

// Github developer :
// @shayanUNK
// @mobiiiin

// create school object                                       
//object 
const school = {
    //object.this is object Because there are several other information in it that must be categorized. This object has a series of features
    classes: {
        // into our school have two classes
        //array| Because have 4 students and many teachers
        classA: [
            //index[0]|into a array this item in index[0]
            info = {
                totalStudent: 4,
                teacherName: 'mr khateri',
                className: 'web devoloper'
            },
            //index[1]||into a array this item in index[1]
            students = {
                name: ['rahele', 'mobin', 'milad', 'nima'],
                score: [20, 10, 12, 18],
                id: ['0021783738', '733829282', '383738373383', '874747484849']
            }

        ],
        //array| Because have 4 students and many teachers
        classB: [
            //index[0]|into a array this item in index[0]
            info = {
                totalStudent: 4,
                teacherName: 'mr khateri',
                className: 'javascript'
            },
            //index[1]||into a array this item in index[1]
            students = {
                name: ['rahele', 'mobin', 'fatemeh', 'nima'],
                score: [2, 10, 12, 18],
                id: ['0076898786', '0076756567', '39938373383', '874747664849']
            }

        ]
    }
};
console.log(school)






//                 classA

//         jame kol score and average classA

let classAScore = school.classes.classA[1].score;
let jamekolClassA = 0;
let sum = 0;
let c = 0;

for (let i = 0; i < classAScore.length; i++) {
    // jame kol score classA
    sum += classAScore[i]
    // tedad students
    c++;
    // c = c + 1
}
console.log("scores sum =>", sum);
console.log("average =>", sum / c);

//      larger and smaller score classA

let larger = school.classes.classA[1].score[0];
let smaller = school.classes.classA[1].score[0];

//        start larger and smaller score classA
//              start larger

for (let i = 0; i < classAScore.length; i++) {
    if (classAScore[i] > larger) {
        larger = classAScore[i]
    }
    //          and smaller
    else if (classAScore[i] < smaller) {
        smaller = classAScore[i]
    }
    else { "its not a number" }
}
console.log("larger score in classA =>", larger)
console.log("smaller score in classA =>", smaller)






//                 classB

//         jame kol score and average classB

let classBScore = school.classes.classA[1].score;
let jamekolClassB = 0;


for (let i = 0; i < classBScore.length; i++) {
    // jame kol score classB
    sum += classBScore[i]
    // tedad students
    c++;
    // c = c + 1
}
console.log("scores sum =>", sum);
console.log("average =>", sum / c);

let largerB = school.classes.classB[1].score[0];
let smallerB = school.classes.classB[1].score[0];

//      start larger and smaller score classB
//              start larger

for (let i = 0; i < classBScore.length; i++) {
    if (classBScore[i] > largerB) {
        largerB = classBScore[i]
    }
    //           and smaller 

    else if (classBScore[i] < smallerB) {
        smallerB = classBScore[i]
    }
    else { "its not a number" }
}
console.log("larger score in classB =>", largerB)
console.log("smaller score in classB =>", smallerB)