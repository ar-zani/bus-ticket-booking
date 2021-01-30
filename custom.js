//Event handler for increase and decrease button
function handleSeatChange(check, fieldValue) {
    let firstSeatNum = stringToInt(fieldValue);
    if (check == true) {
        firstSeatNum++;
    }
    else {
        if (firstSeatNum != 0)
            firstSeatNum--;
    }
    document.getElementById(fieldValue).value = firstSeatNum;
    if (fieldValue == 'first-seat') {
        innerTextUpdate('display-first', firstSeatNum);
        innerTextUpdate('display-first-total', firstSeatNum * 150);
    }
    else {
        innerTextUpdate('display-economy', firstSeatNum);
        innerTextUpdate('display-economy-total', firstSeatNum * 100);
    }
    calculation();
}


//Calculation Function
function calculation() {
    const subTotal = (stringToInt('first-seat') * 150) + (stringToInt('economy-seat') * 100);
    innerTextUpdate('sub-total', subTotal);
    innerTextUpdate('display-sub-total', subTotal);
    const vat = subTotal * .1;
    innerTextUpdate('vat', vat);
    innerTextUpdate('display-vat', vat);
    const total = subTotal + vat;
    innerTextUpdate('total', total);
    innerTextUpdate('display-total', total);

}


//innerText Update
function innerTextUpdate(id, value){
    document.getElementById(id).innerText=value;
};


// String to Integer conversion
function stringToInt(id) {
    const stringNum = document.getElementById(id).value;
    if (stringNum == "") {
        return 0;
    }
    else {
        return parseInt(stringNum);
    }
}

function overlay(check) {
    if (check == true) {
        const flag = parseInt(document.getElementById('total').innerText)
        if (flag > 0) {
            document.getElementById('overlay').style.display = 'grid';
            document.getElementById('main').style. visibility = 'hidden';
            const date = document.getElementById('date').value;
            if(date != ""){
                document.getElementById('display-date').innerText = date;
            }
        }
        else {
            alert('You must select a type of Seat');
        }
    }
    else {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('main').style.visibility = 'visible';
    }
}
