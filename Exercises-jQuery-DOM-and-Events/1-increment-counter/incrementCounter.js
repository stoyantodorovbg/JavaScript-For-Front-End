function increment() {
    $('#wrapper').append('' +
        '<textarea class="counter">0</textarea>' +
        '<button class="btn" id="incrementBtn">Increment</button>' +
        '<button class="btn" id="addBtn">Add</button>' +
        '<ul class="results"></ul>');
    let value = $('.counter').val();

    $('#incrementBtn').click(function () {
        value++;
        $('.counter').val(value);
    });

    $('#addBtn').click(function () {
        $('.results').append(`<li>${value}</li>`)
    });
}
