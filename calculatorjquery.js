$(".calc-btn").on('click',function(){//selectexi elementul cu calc button ca si clasa
  if($(this).attr('data-role')!='operator'){//daca elementul selectat nu are rlul de operator, atunci =>>
    $(".display").val($(".display").val()+$(this).val());//atunci displayul afiseaza valoarea displayului concatenat cu valoarea butonului 
    //toata chestia asta selecteaza un buton, verifica daca nu e un operator, iar daca nu e, concateneaza valoarea afisata pe display cu valoarea butonului apasat
  }
  else{
    if($(".display").val()!=''){//verifica daca displayul e sau nu gol/ daca are sau nu o valoare
      //daca displayul nu e gol, atunci
      $(".display").val($(".display").val()+$(this).val());// face aceeasi chestie ca sus, adica displayul afiseaza valoarea displayului concatenat cu valoarea butonului
    }
  }
});

$(".clear-btn").on('click',function(){
  $(".display").val('');//clears the display if the clear-btn is clicked(ii da valoareao/goala/il goleste)
});

$(".calculate-btn").on('click',function(){//daca butonul calculate e pasat, atunci
  var expression = $(".display").val();
  $(".display").val(eval(expression));
});
//expresssion gets the value of display, then it displays the eval value of expression
//ATENTIE, AFISEAZA SI OPERATORUL, ADICA POATE SA EVALUEZE ATUNCI EXPRESIA
//GENIAL I FIGURED IT OUT ALONE OMG
 
  

const val = +$(".display").val();
 if([69 , 420].includes(val)) {  
    $(".display").css('background,red');
}