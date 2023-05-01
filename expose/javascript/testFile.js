let student = {
    name: 'Sarah',
    major: 'computer science',
    'Grad Year' : '2022',
    greeting: function() { console.log('Hello'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
console.log(student.name);
console.log(student["Grad Year"]);
student.greeting.call();
console.log(student["Favorite Teacher"].name);
console.log(student.courseLoad[0]);


/*
function sumValues(num1, num2, add) {
    if(add) {
        const result = 0;
        result = num1 + num2;

        //console.log('values added: ', result);
    }else return;

    console.log('final result: ', result);
}

sumValues(10,10,true);
*/
/*
function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;

    const length = prices.length
    for(let i= 0; i < length; i++){
        const discountedPrice = prices[i]*(1-discount);
        //finalPrice = Math.round(discountedPrice * 100)/100;
        discounted.push(discountedPrice);
    }

    //console.log(i);
    console.log(length);
    //console.log(finalPrice);
    console.log(discounted);
    return discounted;
}

discountPrices([100,200,300], 0.5);
*/
