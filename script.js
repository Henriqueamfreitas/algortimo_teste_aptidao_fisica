let gender = process.argv[2]; 
let height = process.argv[3]; 
let barReps = process.argv[4]; 
let barSeconds = process.argv[5]; 
let abs = process.argv[6]; 
let runDistance = process.argv[7];
let runTime = process.argv[8];
let swimDistance = process.argv[9];
let swimTime = process.argv[10];
let diveTime = process.argv[11];

let passed = false;

if(
    (
        (gender==="male" && height>=1.70 && abs>=41) 
        && (barReps>=6 || barSeconds<=15)  
        && ((runDistance>=3000 && runTime<=720) || (runDistance>=5000 && runTime<=1200)) 
        && ((swimDistance>=100 && swimTime<=60) || diveTime<=30) 
    )
){
    passed=true
} else if(
    (
        (gender==="female" && height>=1.60 && abs>=41) 
        && (barReps>=5 || barSeconds<=12)
        && ((runDistance>=4000 && runTime<=900) || (runDistance>=6000 && runTime<=1320))
        && ((swimDistance>=100 && swimTime<=60) || diveTime<=30) 
    )
){
    passed=true;
}

console.log(passed);
