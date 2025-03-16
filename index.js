 refresh();
 var NumberToFind=0;
 var attemps=0;
 function refresh(){
   NumberToFind parseInt(Math.random()*100);
   console.log(NumberToFind);
 }
 function verifyNumber(){
   var bet=document.getElementById('bet').value;
   if(bet < 100 || bet < 1)
   {
     alert('aposta invalida');
     return;
   }
   if(bet > NumberToFind)
   {
     attemps++;
     alert('o numero para ser encontrado é MENOR ');
   }
   else if(bet < NumberToFind)
   {
     alert('o numero para ser encontrado é MAIOR');
   }
   else
   {
     alert('Parabens voce acertou!! com '+attemps+' erros');
     refresh(attemps=0);
   }
 }