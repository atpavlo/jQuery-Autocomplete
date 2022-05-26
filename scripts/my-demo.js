/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    'use strict';
    var countries = [
        { value: 'Andorra', data: 'AD' },
        { value: 'Zimbabwe', data: 'ZZ' },
        { value: 'Ukraine', data: 'UA' }
    ];

    $('#autocomplete').autocomplete({
        lookup: countries,
        onSelect: function (suggestion) {
            alert('You select: ' + suggestion.value + '' + suggestion.data );
        }
    })
});