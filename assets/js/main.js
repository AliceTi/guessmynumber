$(function(){
    $("#msg div").hide();
    var number = 0;
    var compteurClic = 0;
    function randomNumber(max){
        return Math.floor(Math.random()*max) ;
    }
    $("#buttonNumber").click(
        function numberDef(){
            number = randomNumber(100) ;
            alert('Le nombre a bien été généré, sauras-tu le deviner ?');
            compteurClic=0;
        }  
    );
    $("#buttonGuess").click(
        function userGuess(){
            var userGuess =$("#userValue").val();
            if (userGuess == ""){
                alert("Aller, sois pas timide, entre un nombre !");
            }
            else {
                if (userGuess == number){
                    $("#msgCorrect").show();
                    $("#msgCount").show();
                    $("#msgMore").hide();
                    $("#msgLess").hide();};
                if (userGuess < number){
                    $("#msgCorrect").hide();
                    $("#msgCount").hide();
                    $("#msgMore").show();
                    $("#msgLess").hide();};
                if (userGuess > number){
                    $("#msgCorrect").hide();
                    $("#msgCount").hide();
                    $("#msgMore").hide();
                    $("#msgLess").show();};
            }
        }
    )
    $(".compte-plus").on('click',function() {
        compteurClic++;
        $("#compteur").text(compteurClic);
    });
})
