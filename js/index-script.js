$(function() {

    /*--------------------------------------------------------------
      PopUp pages
    --------------------------------------------------------------*/
    (function () {
        var popupWeddingCeremony = $('#popup-wedding-ceremony'),
            popupReciptionCeremony = $('#popup-reciption-ceremony'),
            showWeddingCeremony = $('#show-wedding-ceremony'),
            showReciptionCeremony = $('#show-reciption-ceremony'),
            colseBtn = $('.ceremony .close');

        showWeddingCeremony.click(function (e) {
            e.preventDefault();
            popupWeddingCeremony.fadeIn(500);


            colseBtn.click(function () {
                popupWeddingCeremony.fadeOut(500);
            })
        })

        showReciptionCeremony.click(function (e) {
            e.preventDefault();
            popupReciptionCeremony.fadeIn(500);


            colseBtn.click(function () {
                popupReciptionCeremony.fadeOut(500);
            })
        })

    }());


}); // end of document.ready