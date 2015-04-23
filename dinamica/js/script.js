/**
 * Created by Arthur on 4/23/2015.
 */
function addDisciplnaNaLista(){
    var assunto = $("#assuntosAprender").val();
    var elemento = $ ("<input>");
    var texto = $("<label></label>");

    elemento.attr("type", "checkbox");
    elemento.attr("class", "caixa movel");
    texto.html(assunto);
    texto.append(elemento);

    $("#listaAssuntosAprender").append(texto);

    $(".caixa").click(function () {
        verificaBotaoRemover();
        verificaBotaoMover();
    });

}

function addDiscplinaNaListaAprendida() {
    var assunto = $("#assuntosAprender").val();
    var elemento = $ ("<input>");
    var texto = $("<label></label>");

    elemento.attr("type", "checkbox");
    elemento.attr("class", "caixa");
    texto.html(assunto);
    texto.append(elemento);

    $("#listaAssuntosAprendidos").append(texto);

    $(".caixa").not(".movel").click(function (){
        verificaBotaoRemover();
    });
}
function verificaBotaoMover() {
    if ($(".movel").is(":checked")) {
        $("#botaoMover").prop("disabled", false);
    } else {
        $("#botaoMover").prop("disabled", true);
    }

}

function verificaBotaoRemover() {
    if ($(".caixa").is(":checked")) {
        $("#botaoRemover").prop("disabled", false);
    }else {
        $("#botaoRemover").prop("disabled", true);

    }
}

function moveDisciplina() {
    var assuntos = $(".movel:checked")
        .prop("checked", false)
        .removeClass("movel")
        .parents("label");
    $("listaAssuntosAprendidos").append(assuntos);

    verificaBotaoMover();
    verificaBotaoRemover();
}

function removeDisciplina() {
    $(".caixa:checked").parents("label").remove();

    verificaBotaoMover();
    verificaBotaoRemover();
}

$(function () {
    $("#formulario").submit(function () {
        addDisciplnaNaLista();
        $("#assuntosAprender").val("");

        return false;
    });

    $("#formularioAprendido").submit(function () {
        addDiscplinaNaListaAprendida()
        $("#assuntosAprendidos").val("");

        return false;
    });
});
