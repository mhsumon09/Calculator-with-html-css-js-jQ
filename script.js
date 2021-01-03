function insertNumber (number){
    var existingNumber = $('#result').val();

    $('#result').val(existingNumber + number)
}

function clearResult(){
    $('#result').val('');
}

function calculate(){
    var result = eval($('#result').val())
    $('#result').val(result)
}

function deleteNumber(){
    var persentValue = $('#result').val();
    if(persentValue != ''){
        $('#result').val(persentValue.slice(0,-1));
    }
}