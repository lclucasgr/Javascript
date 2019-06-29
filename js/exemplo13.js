var x = prompt("Informe um numero entre 0 a 99")

try{
   if(x >= 0 && x <=99 && x % 2 == 0)
   {
      throw x+ " - Numero par";
   }
   
   else if(x >= 0 && x <=99 & x % 2 == 1)
   {
     throw x+ " - Numero impar";
   }
   
   else 
   {
      throw "Apenas numeros entre 0 e 99 sao classificados como pares e impares"
   }
   
   alert(x);
}catch(e)
{
   alert(e.toString());
}

