
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
$(document).ready(function () {
    // When "Select All" checkbox is clicked
    $(".all-property-select").click(function () {
        var isChecked = $(this).prop("checked"); // Get the checked status
        $(".property-checkbox").each(function () {
            $(this).prop("checked", isChecked); // Apply the same checked status to all checkboxes
        });
    });
});
$(document).ready(function () {
    // When "Select All" checkbox is clicked
    $(".all-features-select").click(function () {
        var isChecked = $(this).prop("checked"); // Get the checked status
        $(".features-checkbox").each(function () {
            $(this).prop("checked", isChecked); // Apply the same checked status to all checkboxes
        });
    });
});