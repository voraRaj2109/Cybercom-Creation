console.log("Hello Every one")

var john , mike,winner, both; 
// john = [89,120,103];
// mike = [116,94,123];

john = [1,1,1];
mike = [1,1,3];

var johnAvg ,i;
johnAvg=0;

for(i=0;i<john.length;i++) {
    johnAvg += john[i]; 
}
var JohnPlay = john.length;
// console.log(JohnPlay);

var JohnTotalAvg = johnAvg/JohnPlay;
console.log(JohnTotalAvg);

var mikeAvg=0;
// mikeAvg=0;

for(i=0;i<mike.length;i++) {
    mikeAvg += mike[i]; 
}
var mikePlay = mike.length;
// console.log(mikePlay);
var mikeTotalAvg = mikeAvg/mikePlay;
console.log(mikeTotalAvg);

winner = JohnTotalAvg > mikeTotalAvg;
both = (JohnTotalAvg == mikeTotalAvg);
console.log(both)

// console.log(winner)
if (winner) {
    console.log("Winning Team  is John Team and Avg Score is "+ JohnTotalAvg);
}else if (both) {
    console.log("Both Team is Same Score "+ JohnTotalAvg);
} else {
    console.log("Winning Team  is Mike Team and Avg Score is "+ mikeTotalAvg);
}


