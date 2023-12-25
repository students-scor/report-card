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

//                 classA

// jame kol score classA

let classAScore = school.classes.classA[1].score;
let jamekolClassA = 0;

// start jame score classA
for (let i = 0; i < classAScore.length; i++) {
    if (typeof classAScore[i] === "number") {
        jamekolClassA += classAScore[i];
    }
    
}

console.log("jame kol scors classA =>", jamekolClassA)

// larger and smaller score classA

// let larger = school.classes.classA[1].score;
// let smaller = school.classes.classA[1].score;
let larger = school.classes.classA[1].score[0];
let smaller = school.classes.classA[1].score[0];


// start larger and smaller score classA
// start larger
for (let i = 0; i < classAScore.length; i++) {
    if ( classAScore[i] > larger ) {
        larger = classAScore[i]
    }
    // and smaller
   else if ( classAScore[i] < smaller ){
        smaller = classAScore[i]
    }
    else{"w;elfwjefwjeip"}
}
console.log("larger score in classA =>", larger)
console.log("smaller score in classA =>", smaller)

//                      classB

// start jame score classB

let classBScore = school.classes.classB[1].score;
let jamekolClassB = 0;

for (let i = 0; i < classBScore.length; i++) {
    if (typeof classBScore[i] === "number") {
        jamekolClassB += classBScore[i];
    }
}
console.log("jame kol scors classB =>", jamekolClassB)

let largerB = school.classes.classB[1].score[0];
let smallerB = school.classes.classB[1].score[0];


// start larger and smaller score classB
// start larger
for (let i = 0; i < classBScore.length; i++) {
    if ( classBScore[i] > largerB ) {
        largerB = classBScore[i]
    }
    // and smaller 
   else if ( classBScore[i] < smallerB ){
        smallerB = classBScore[i]
    }
    else{"w;elfwjefwjeip"}
}
console.log("larger score in classB =>", largerB)
console.log("smaller score in classB =>", smallerB)