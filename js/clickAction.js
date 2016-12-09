$(function () {
    $(".accu_details").click(function () {
                var buttonId = $(this).prop("id");
                var title = accupointList[buttonId].title;
                var message = accupointList[buttonId].message;
                var picture = accupointList[buttonId].picture;
                BootstrapDialog.show({
                    size: BootstrapDialog.SIZE_WIDE,
                    title: title,
                    message: message
        });
    });
});