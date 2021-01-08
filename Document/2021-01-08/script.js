console.log("Script js File");

var markMass,markHeight,markBmi,johnMass,johnBmi,johnHeight, markJohn;
markHeight = prompt("enter a mark height");
markMass =  prompt("enter a mark mass");

markBmi = markMass/(markHeight * markHeight);
// console.log(markBmi);

johnHeight = prompt("enter a john height");
johnMass = prompt("enter a john mass");

johnBmi = markMass/(johnHeight * johnHeight);
// console.log(johnBmi);

markJohn = markBmi > johnBmi;
if (markJohn) {
    console.log(markBmi+" Is Mark's BMI higher than "+ johnBmi + " John's?"+ markJohn);
} else {
    console.log(markBmi+" Is Mark's BMI higher than " + johnBmi+ " John's?"+ markJohn);
}



