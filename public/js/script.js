window.onload = function windowLoad() {
    $.get(
        "/students",
        function(data) {
            alert('page content: ' + data);
        }
    );
};