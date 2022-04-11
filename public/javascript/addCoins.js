$(function () {

    // Id
    var id = 1;

    $("#insertRow").on("click", function (event) {
        event.preventDefault();

        var newRow = $("<tr>");
        var cols = '';

       
        cols += '<th scrope="row">' + id + '</th>';
        cols += '<td><input class="form-control rounded-0" type="text" name="name" placeholder="Name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="symbol" placeholder="Symbol"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="name" placeholder="Name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="amount" placeholder="Amount"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="price" placeholder="Price"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="value" placeholder="Value"></td>';
        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';


        newRow.append(cols);

        $("table").append(newRow);

  
        id++;
    });

    
    $("table").on("click", "#deleteRow", function (event) {
        $(this).closest("tr").remove();
        id -= 1
    });
});