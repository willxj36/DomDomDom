document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square');
    document.body.appendChild(button);
    button.appendChild(buttonText);

    let clickNum = [];
    button.addEventListener('click', addDiv);

    function addDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.className = 'squares';
        clickNum.push(1);
        div.id = clickNum.length;
        let squares = document.getElementsByClassName('squares');
        for (i = 0; i < clickNum.length; i++) {
            squares[i].addEventListener('mouseover', showId);
        };
        for (i = 0; i < clickNum.length; i++) {
            squares[i].addEventListener('mouseout', function() {
                event.target.removeChild(event.target.firstChild);
            }); //creates identical errors repeatedly (number of errors returned in console is equal to [last square #] - [# of square mouse is moved off of]), but functionally does exactly what is called for...
        }    
    }
    
    function showId() {
        let idNum = event.target.id;
        var idText = document.createTextNode(idNum);
        event.target.appendChild(idText);
    }
})