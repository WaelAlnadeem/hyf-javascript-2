let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];
// step a //
let tasks = monday.concat(tuesday);

var task_names = tasks.map((worthOfTasks) => {

    return worthOfTasks;
});
console.log(task_names);


// step B//
tasks.forEach(function (task) {
   task.duration = task.duration / 60;
    console.log(task.duration);

});

// step C //

for (var data in tasks) {

    tasks = tasks.filter(data => {
        return data.duration < 2
    });   
}
console.log(tasks);


// step D //
var preHour = 15;
var theTasks = monday.concat(tuesday);
var rateForBilling = theTasks.filter(theTasks => {
    return theTasks.earningPerHour = theTasks.duration * preHour   
})
console.log(rateForBilling);

var total = theTasks.reduce((sum , task) => {
    
    return sum + task.earningPerHour;
},0);
console.log(total);

// step F//

function toCurrency(amount) {
    return "€" + amount.toFixed(2);
}
Number.prototype.toCurrency = function () {
    return toCurrency(this);
};
console.log((total).toCurrency());
