/**
 * Created by JoséCarlosVieiradeMo on 01/03/2017.
 */

$(document).ready(function() {
    // Faz com que um dos retangulos do menu Inicio desapareça.
    /*$(".rectangle-circular-left").mousedown(function() {
        $(this).toggle(1000);
        //$(this).css("background-color","yellow");
    });
    //Quando soltar o botão do mouse em cima de um dos retangulos a cor dele mudará para amarelo.
    $(".rectangle-circular-left").mouseup(function() {
       // $(this).toggle(1000);
        $(this).css("background-color","yellow");
    });
    //Esta opção fará com que todos os retangulos
    // que desapareceram pelas opções anteriores retornem na cor original
    $(".button-center").click(function() {
        $(".rectangle-circular-left").show(1000);
        $(".rectangle-circular-left").css("background-color", "white");
    });*/


    /* Das opções abaixo ela fará com que todos os elementos que estejam presentes
    * desapareçam e apenas o que foi selecionado como target (alvo) do elemento no menu
    * do header (cabeçalho) que permanecerá a vista.*/
    $("#Contatos").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not('#' + $(this).data('target')).hide();
        $("#" + $(this).data("target")).show();
    });
    $("#Inicio").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not("#" + $(this).data("target")).hide();
        $("#" + $(this).data("target")).show();
    });
    $("#Empresa").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not("#" + $(this).data("target")).hide();
        $("#" + $(this).data("target")).show();
    });
    $("#Novidades").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not("#" + $(this).data("target")).hide();
        $("#" + $(this).data("target")).show();
    });
    $("#Servicos").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not("#" + $(this).data("target")).hide();
        $("#" + $(this).data("target")).show();
    });
    $("#Modelos").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not("#" + $(this).data("target")).hide();
        $("#" + $(this).data("target")).show();
    });
    $("#Projetos").mouseover(function() {
        /*var target = '#' + $(this).data('target");*/
        $('.internalcontainer > div').not("#" + $(this).data("target")).hide();
        $("#" + $(this).data("target")).show();
    });
    /* Em todas as opções abaixo ele ativará algumas informações referentes àquele usuário especifico.*/
    $("#userbutton1").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton2").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton3").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton4").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton5").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton6").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton7").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton8").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });

    $("#userbutton9").mousedown(function() {
        $("#" + $(this).data("target")).toggle(1000);
    });
});