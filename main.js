

//   tasks 

//   task 1 // 


var list1 = [
    { 
        firstName: 'Emily', 
        lastName: 'N.', 
        country: 'Ireland', 
        continent: 'Europe', 
        age: 30, 
        language: 'Ruby' 
    },
    
    { 
        firstName: 'Nor', 
        lastName: 'E.', 
        country: 'Malaysia', 
        continent: 'Asia', 
        age: 20, 
        language: 'Clojure' 
    }
];


let rssult  = list1.reduce((acc , curr , index) => {
    let name = curr.firstName.toLowerCase() ;
    let age = 2020 - curr.age;
    curr.username = name+age;
    return  list1;
} , 0 )

console.log("##########    task - 1  ############");
console.log(rssult);



//   task -2 

var list2 = [
        { 
            firstName: 'Noah', 
            lastName: 'M.', 
            country: 'Switzerland', 
            continent: 'Europe', 
            age: 19, 
            language: 'C', 
            meal: 'vegetarian' 
        },

        { 
            firstName: 'Anna', 
            lastName: 'R.', 
            country: 'Liechtenstein', 
            continent: 'Europe', 
            age: 52, 
            language: 'JavaScript', 
            meal: 'standard' 
        },

        { 
            firstName: 'Ramona', 
            lastName: 'R.', 
            country: 'Paraguay', 
            continent: 'Americas', 
            age: 29, 
            language: 'Ruby', 
            meal: 'vegan' 
        },

        { 
            firstName: 'George', 
            lastName: 'B.',
            country: 'England', 
            continent: 'Europe', 
            age: 81, 
            language: 'C', 
            meal: 'vegetarian' 
        },
    ];


let  data =  list2.reduce((acc , curr , index) => {
    // console.log(acc);
    // console.log(curr);

    acc[curr.meal] = (acc[curr.meal] || 0)+ 1;
    return acc;
    
} ,{} );

console.log("##########    task - 2  ############");
console.log(data);




//  task  -3

var list3 = [
    { 
        firstName: null, 
        lastName: 'I.', 
        country: 'Argentina', 
        continent: 'Americas',
        age: 35, 
        language: 'Java'
    },

    { 
        firstName: 'Lukas', 
        lastName: 'X.', 
        country: 'Croatia', 
        continent: 'Europe', 
        age: 35, 
        language: null 
    },

    { 
        firstName: 'Madison', 
        lastName: 'U.', 
        country: 'United States', 
        continent: 'Americas', 
        age: 32, 
        language: 'Ruby' 
    } 
];


let res3 = list3.reduce((acc , curr  , index ) => {

    let message ;
    curr.message = curr.firstName === null ? 
        "Hi, could you please provide your firstName." :
        curr.language === null ?  
        "Hi, could you please provide your language.": [] 

    console.log(message);
    return  list3
},0);

console.log("##########    task - 3  ############");
console.log(res3);


//task -4 

var list4 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

let res4 = (list4) => {
    const maxAge = Math.max(...list4.map(dev => dev.age));
    return   list4.filter(dev => dev.age === maxAge);
} ;
console.log("##########    task - 4  ############");
console.log(res4(list4));




//  task  5 

var list5 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];


function countLanguages(list) {
    return list.reduce((acc, curr) => {
        acc[curr.language] = (acc[curr.language] || 0) + 1;
    return acc;
    
    }, {} );
}

console.log("##########    task - 5  ############");
console.log(countLanguages(list5));



