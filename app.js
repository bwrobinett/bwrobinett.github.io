(function (global, $) {
    $(document).on('click', '[hello]', function () {
        alert('Merry Christmas! ' + this.innerHTML);
    });
})(this, jQuery);