/**
 * Created by Arthur on 4/23/2015.
 */$(document).ready(function(){
    $("#toLearn").submit(function () {
        addToLearn();
        $("#inputToLearn").val("");
        return false;
    });

    if ($("#list tr").length == 1){

    }

    $("#Learned").submit(function () {
        addLearned();
        $("#inputLearned").val("");
        return false;
    });

    $(document).on("click", "#btnRemove", function(){
        $(this).parent().parent().fadeOut("fast", function(){
            $(this).remove();
        });
    });


    $(document).on("click", "#btnLearn", function(){
        $(this).fadeOut("fast", function(){
            $(this).parent().parent().css("background-color", "rgba(144, 255, 191, 0.42)");
            $(this).remove();
        });
    });


});

function addToLearn(){
    var topic = $("#inputToLearn").val();

    if (topic != "") {
        $("#topics").append(
            "<tr class='tolearn' style='background: #ffc0b4;'>" +
            "<td>" + topic + "</td>" +
            "<td>" + '<button id="btnRemove" class="btn btn-small btn-danger">Remover</button>' +
            "    " +
            '<button id="btnLearn" class="btn btn-small btn-warning">Aprendi!</button>' +
            "</tr>");
        $("#inputToLearn").val("");
    }
}

function addLearned(){
    var topic = $("#inputLearned").val();

    if (topic != "") {
        $("#topics").append(
            "<tr class='learned' style='background: rgba(144, 255, 191, 0.42)'>" +
            "<td>" + topic + "</td>" +
            "<td>" + '<button id="btnRemove" class="btn btn-small btn-danger">Remover</button>' +
            "</td>" +
            "</tr>");
        $("#inputLearned").val("");
    }
}
