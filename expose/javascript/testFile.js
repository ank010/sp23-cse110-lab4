let student = {
    name: 'Sarah',
    major: 'computer science',
    'Grad Year' : '2022',
    greeting: function() { console.log('Hello'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    ourseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

student.greeting.call();