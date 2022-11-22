
var numinicial=1,numfinal=75;
var pregunta,letra;
do{
    number = Math.round(Math.random()*(numinicial-numfinal)+numfinal);
    /*if(number >=1 && number<=15) letra = "B";
    if(number >=16 && number<=30) letra = "I";
    if(number >=31 && number<=45) letra = "N";
    if(number >=46 && number<=60) letra = "G";
    if(number >=61 && number<=75) letra = "O";
    */
   switch(true)
   {
    case number >=1 && number<=15: 
        letra = "B"
        berak;
    case number >=16 && number<=30:
         letra = "I"
         break;
    case number >=31 && number<=45: 
        letra = "N"
        break;
    case number >=46 && number<=60: 
        letra = "G";
    case number >=61 && number<=70: 
        letra = "O";
   }
    console.log(letra+number)
    pregunta = prompt("Desea sacar otra Balota? S/N")
}while(pregunta=="S" || pregunta=="s")