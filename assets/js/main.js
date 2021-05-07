$(function(){
    $("#msg div").hide();
    var number = -1;
    var compteurClic = 0;
    function randomNumber(max){
        return Math.floor(Math.random()*max) ;
    }
    $("#buttonNumber").click(
        function numberDef(){
            number = randomNumber(100) ;
            alert('Le nombre a bien été généré, sauras-tu le deviner ?');
            compteurClic=0;
          
        if (number!=-1){
            $("#buttonNumber").css('border' , '1px solid black')
        }
    }
    );            
    $("#buttonGuess").click(
        function userGuess(){
            var userGuess =$("#userValue").val();
            compteurClic++;
            $("#compteur").text(compteurClic)
                if ((compteurClic == 10) || (userGuess != number)){
                    $("#msgMock").show(
                        $("#mockMessage").text(compteurClic + " tentatives ? Ça commence à être vraiment long là... tu veux pas demander de l'aide à un adulte ?")
                    );};
            if (userGuess == ""){
                alert("Aller, ne sois pas timide, entre un nombre !");
            }
            else {
                $("#msg div").hide();
                if (userGuess == number){
                    $("#msgCorrect").show();
                    $("#msgCount").show();}
                else{                
                    if (userGuess < number){
                    $("#msgMore").show();};
                    if (userGuess > number){
                        $("#msgLess").show();};
                    if ((userGuess > 100) || (userGuess < 0)){
                        $("#msgStupid").show(
                            $("#stupidNumber").text(userGuess));};
            }};

            if (number == -1){
                $("#msg div").hide();
                $("#buttonNumber").css('border' , '1px solid red') 
                alert("Il s'agirait de générer un nombre avant de jouer !");
            }
            
        }
    )


    $(document).on('keyup keypress', 'form input[type="number"]', function(e) {
        if(e.which == 13) {
          e.preventDefault();
          return false;
        }
      }); 
})
