
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

   document.addEventListener('DOMContentLoaded', function() {
    let createAccountRadio = document.getElementById('createAccountRadio');
    let existingUserRadio = document.getElementById('existingUserRadio');
    let doNotCreateAccountRadio = document.getElementById('doNotCreateAccountRadio');

    let createAccountSection = document.getElementById('createAccountSection');
    let existingUserSection = document.getElementById('existingUserSection');

    function toggleSections() {
        if (createAccountRadio.checked) {
            createAccountSection.classList.add('show');
            existingUserSection.classList.remove('show');
        } else if (existingUserRadio.checked) {
            existingUserSection.classList.add('show');
            createAccountSection.classList.remove('show');
        } else if (doNotCreateAccountRadio.checked) {
            createAccountSection.classList.remove('show');
            existingUserSection.classList.remove('show');
        }
    }

    createAccountRadio.addEventListener('change', toggleSections);
    existingUserRadio.addEventListener('change', toggleSections);
    doNotCreateAccountRadio.addEventListener('change', toggleSections);
});
document.getElementById('uploadFileArea').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    let files = this.files;
    let fileNames = [];

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
        }
        document.getElementById('fileName').textContent = `Selected file(s): ${fileNames.join(', ')}`;
    } else {
        document.getElementById('fileName').textContent = "No file selected";
    }
});

