// Variáveis para aplicar os resultados do teste. Não as altere.

let gender = process.argv[2]; // Sexo
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**
if(( //Vamos fazer primeiro a restrição do sexo masculino
    (gender==="male" && height>=1.70 && abs>=41) //Homem, pelo menos 1,70m E pelo menos 41 abdominais
    && (barReps>=6 || barSeconds<=15)  //pelo menos 6 repetições na barra OU no máximo 15 segundos
    && ((runDistance>=3000 && runTime<=720) || (runDistance>=5000 && runTime<=1200)) //pelo menos 3000m em no máximo 720s OU pelo menos 5000 metros em no máximo 1200s
    && ((swimDistance>=100 && swimTime<=60) || diveTime<=30) //nadou no mínimo 100 metros em no máximo 60s OU no máximo 30 segundos de mergulho
    )
     || ( //Agora, vamos fazer a restrição do sexo feminino
        (gender==="female" && height>=1.60 && abs>=41) //Mulher, pelo menos 1,60m E pelo menos 41 abdominais 
        && (barReps>=5 || barSeconds<=12) //pelo menos 5 repetições na barra OU no máximo 12 segundos
        && ((runDistance>=4000 && runTime<=900) || (runDistance>=6000 && runTime<=1320)) //pelo menos 4000m em no máximo 900s OU pelo menos 6000 metros em no máximo 1320s
        && ((swimDistance>=100 && swimTime<=60) || diveTime<=30) //nadou no mínimo 100 metros em no máximo 60s OU no máximo 30 segundos de mergulho
        )){
    passed=true;
}else{
    
}

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
