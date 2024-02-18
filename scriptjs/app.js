//button Scrool
const scroolBtn = document.getElementById('scrool-btn');
const targetSection = document.getElementById('target-section');
scroolBtn.addEventListener("click", function(){
    targetSection.classList.add('show');
    targetSection.scrollIntoView({behavior:'smooth'});
});

const seatBtn = document.getElementsByClassName('seat-btn');
let leftSeat = 40;
let selectedSeat = 0;
let selectedCount = 0;
for(let btn of seatBtn){
    btn.addEventListener('click', function(e){
        selectedSeat = selectedSeat+1;
        leftSeat = leftSeat-1;
        setInnerText('selected-seat', selectedSeat);
        setInnerText('left-seat', leftSeat);
        e.target.setAttribute("disabled", true);
        e.target.classList.add('bg-green-400', 'text-white');
        
    })
}

//Set Inner Text By ID
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
