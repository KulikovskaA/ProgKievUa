/**
 * Created by masya on 9/19/17.
 */
'use strict';
;(function () {

var offerCash = +prompt('How much you can spend?','');


var phoneArr = [

    {'name': 'iPhone5', 'value': 500, 'memory': 32},
    {'name': 'iPhone6', 'value': 1000, 'memory': 64},
    {'name': 'iPhone7', 'value': 1500, 'memory': 128}

];

var resp = true;
var m;

var request = function(model, offerColor) {
    alert('We can offer you ' + phoneArr[model].name
        + ' for ' + phoneArr[model].value + '$ with '
        + phoneArr[model].memory + 'GB of RAM in '
        + offerColor + '.');

}
while (true) {
    if (offerCash > 1249) {
        m = 2;
        var color = prompt('What color you like?','');
        request(m, color);
        break;
    } else if (offerCash > 749) {
        m = 1;
        var color = prompt('What color you like?','');
        request(m, color);
        break;
    } else if (offerCash > 499) {
        m = 0;
        var color = prompt('What color you like?','');
        request(m, color);
        break
    } else if (offerCash == 0 || offerCash == null) {
        resp = false;
        break
    } else {
        alert('Sorry, we do not have such phones');
    }
}









}());