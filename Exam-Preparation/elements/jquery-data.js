function renderElements() {
    let main = $('#elementsContainer');
    let heading = $('<h1>');
    heading.text('Choose Your Destiny');
    main.append(heading);

    let containers = $('<div>');
    containers.addClass('containers');
    let elementDiv = $('<div>');
    elementDiv.attr('id', 'air');
    elementDiv.addClass('first clickable');
    containers.append(elementDiv);

    elementDiv = $('<div>');
    elementDiv.attr('id', 'fire');
    elementDiv.addClass('second clickable');
    containers.append(elementDiv);

    let container = $('div.container');
    container.append(containers);

    containers = $('<div>');
    containers.addClass('containers');
    elementDiv = $('<div>');
    elementDiv.attr('id', 'water');
    elementDiv.addClass('third clickable');
    containers.append(elementDiv);

    elementDiv = $('<div>');
    elementDiv.attr('id', 'earth');
    elementDiv.addClass('fourth clickable');
    containers.append(elementDiv);

    container.append(containers);

}

function renderElementInfo() {
    let li = $('<li>');

    let input = $('<input>');
    input.addClass('radio-button checked');
    input.attr('name', 'selector');
    input.attr('type', 'radio');
    input.attr('value', 'Archangel');
    li.append(input);

    let label = $('<label>');
    label.text('Archangel');
    li.append(label);
    li.append('<br>');
    li.append('<br>');
    li.append('<br>');

    input = $('<input>');
    input.addClass('radio-button checked');
    input.attr('name', 'selector');
    input.attr('type', 'radio');
    input.attr('value', 'Elemental');
    li.append(input);

    label = $('<label>');
    label.text('Elemental');
    li.append(label);

    let creatures = $('ul.creatures');
    creatures.append(li);

    let img = $('<img>');
    img.attr('id', 'creature-image');
    img.attr('src', 'images/archangel.jpg');
    img.attr('alt', 'archangel');

    let centerAfterClick = $('.center-after-click');
    centerAfterClick.append(img);

    let rightAfterClick = $('#right-after-click');

    let p = $('<p>');
    p.attr('creature-name');
    p.text('Archangel');
    rightAfterClick.append(p);

    p = $('<p>');
    p.attr('creature-power');
    p.text('Power:2000');
    rightAfterClick.append(p);

    p = $('<p>');
    p.attr('creature-ultimate');
    p.text('Ultimate: Wind Justice');
    rightAfterClick.append(p);

    p = $('<p>');
    p.attr('creature-region');
    p.text('Region: Heaven’s Kingdom');
    rightAfterClick.append(p);

}

function addEvents() {
    $('#air').on('click', function (){
        hideElements('Air');
    });
    $('#fire').on('click', function () {
        hideElements('Fire');
    });
    $('#water').on('click', function() {
        hideElements('Water');
    });
    $('#earth').on('click', function() {
        hideElements('Earth');
    });

}

function hideElements(element) {
   $('div.container').css('display', 'none');
   $('#elementsContainer h1').css('display', 'none');
   $('#elementInfoTitle').text(element);
    renderElementInfo();
}

renderElements();

addEvents();