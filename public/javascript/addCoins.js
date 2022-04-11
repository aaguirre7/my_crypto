$(function () {

    // Start counting from the first row
    var counter = 1;

    $("#insertRow").on("click", function (event) {
        event.preventDefault();

        var newRow = $("<tr>");
        var cols = '';

        // Table columns
        cols += '<th scrope="row">' + counter + '</th>';
        cols += '<td><input class="form-control rounded-0" type="text" name="symbol" placeholder="Symbol"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="name" placeholder="Name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="amount" placeholder="Amount"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="price" placeholder="Price"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="value" placeholder="Value"></td>';
        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        $("table").append(newRow);

        // Increase counter after each row insertion
        counter++;
    });

    // Remove row when delete btn is clicked
    $("table").on("click", "#deleteRow", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });
});