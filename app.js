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
        for (i = 0; i < squares.length; i++) {
            squares[i].addEventListener('mouseover', showId);
        };
        for (i = 0; i < squares.length; i++) {
            squares[i].addEventListener('mouseout', removeId);
        };
        for (i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', randomColor);
        };
        for (i = 0; i < squares.length; i++) {
            squares[i].addEventListener('dblclick', removeSquare);
        };
    };
    
    function showId(event) {
        let idNum = event.target.id;
        let idText = document.createTextNode(idNum);
        event.target.appendChild(idText);
    };

    function removeId(event) {
        event.target.removeChild(event.target.firstChild);
    };

    
    function randomColor(event) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ' )';
    };

    function removeSquare(event) {
        let squares = document.getElementsByClassName('squares');
        let idArray = [];
        for (i = 0; i < squares.length; i++) {
            idArray.push(squares[i].getAttribute('id'));
        };
        if(event.target.id % 2 == 0) {
            if(idArray.indexOf(event.target.id) == idArray.length - 1) {
                alert('There are no squares after the selected square!');
            } else {
                let removeTargetEven = (squares[idArray.indexOf(event.target.id) + 1]);
                removeTargetEven.remove();
            }
        } else if (event.target.id % 2 == 1) {
            if(idArray.indexOf(event.target.id) == 0) {
                alert('There are no squares before the selected square!');
            } else {
                let removeTargetOdd = (squares[idArray.indexOf(event.target.id) - 1]);
                removeTargetOdd.remove();
            }
        }
    };
});