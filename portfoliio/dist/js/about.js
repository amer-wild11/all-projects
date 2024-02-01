let emailButton = document.querySelector(".btns button");

function copy(){
     let text = 'amer22wild@gmail.com';

     let tempElement = document.createElement('textarea');
     tempElement.value = text;
     tempElement.style.textTransform = 'lowercase'

     document.body.appendChild(tempElement);

     tempElement.select();
     tempElement.setSelectionRange(0, 99999);

     document.execCommand('copy');

     document.body.removeChild(tempElement);

     emailButton.innerHTML = 'Copied!';

     emailButton.onclick = null;
}