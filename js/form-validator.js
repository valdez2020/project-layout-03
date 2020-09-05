'use strict'

$(document).ready(function(){

    $('form input[name="birthday"]').datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        lang: 'en',
        errorMessagePosition: 'top',
        scroolToTopOnError: true
    });

    });