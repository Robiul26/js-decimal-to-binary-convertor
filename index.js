
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

function convert(e){
    e.preventDefault();
    const num = document.getElementById('number').value;
  

    if(num === '' || num == 0){
        alert('Please enter a number');
    }else if(num < 0){
        alert('Please enter a positive number');
    }else{
        result.style.visibility = 'visible';
    }

    // Converting to binery
    const bineryNum = Number(num).toString(2);
    result.innerText = bineryNum;
}
submitBtn.addEventListener('click', convert);

