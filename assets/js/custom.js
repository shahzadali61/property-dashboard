
 $("#myTab button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Stop event bubbling
});

// Allow navigation only via jQuery buttons
$("#add-address-btn").click(function (e) {
    e.preventDefault();
    var nextTab = new bootstrap.Tab($("#address-tab"));
    nextTab.show();
});

$("#add-contact-btn").click(function (e) {
    e.preventDefault();
    var nextTab = new bootstrap.Tab($("#contact-tab"));
    nextTab.show();
});

$("#add-guarantor-btn").click(function (e) {
    e.preventDefault();
    var nextTab = new bootstrap.Tab($("#disabled-tab"));
    nextTab.show();
});