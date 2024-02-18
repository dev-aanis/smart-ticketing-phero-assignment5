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
let selectedButton = 0;
let totalCost = 0;
let grandTotalCost = 0;
for(let btn of seatBtn){
    btn.addEventListener('click', function(e){
        selectedSeat = selectedSeat+1;
        leftSeat = leftSeat-1;
        setInnerText('selected-seat', selectedSeat);
        setInnerText('left-seat', leftSeat);
        // e.target.setAttribute("disabled", true);
        // e.target.classList.add('bg-green-500', 'text-white');
        const inputNumber = document.getElementById('number-input');
        if(!this.disabled){
            this.style.backgroundColor = '#1DD100';
            this.style.color = 'white';
            this.disabled=true;
            selectedButton++;
            if(selectedButton === 4){
                const inputField = document.getElementById('input-field');
                inputField.removeAttribute('disabled');
                const couponApply = document.getElementById('coupon-apply');
                couponApply.removeAttribute('disabled')
                // const nextButton = document.getElementById('next-button');
                // nextButton.removeAttribute('disabled')
                for(let i=0; i<seatBtn.length; i++){
                    if(!seatBtn[i].disabled){
                        seatBtn[i].disabled=true;
                    }
                }
            }
            const nextButton = document.getElementById('next-button');
            // nextButton.removeAttribute('disabled');
            if(selectedButton===1){
                nextButton.removeAttribute('disabled');
            }
        }
        const selectedContainer = document.getElementById('selected-container')
        const seatNo = e.target.innerText;
        const li = document.createElement('li');
        li.classList.add("flex", "justify-between")
        const p = document.createElement('p');
        p.innerText=seatNo;
        const p1 = document.createElement('p');
        p1.innerText = 'Economy';
        const p2 = document.createElement('p');
        p2.innerText = 550;
        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);
        selectedContainer.appendChild(li);
        let total = document.getElementById('total-price');
        totalCost += 550;
        total.innerText=totalCost;
        let grandTotal = document.getElementById('grand-total-price');
        grandTotalCost +=550;
        grandTotal.innerText=grandTotalCost;
        // const inputField = document.getElementById('input-field');
        // inputField.removeAttribute('disabled');
    });
}

const applyBtn = document.getElementById('coupon-apply');
applyBtn.addEventListener('click', function(){
    const couponCode = document.getElementById('input-field').value;
    const discountArea = document.getElementById('discount-area');
    const couponArea = document.getElementById('coupon-area');
    let total = document.getElementById('total-price');
    total= totalCost;
    const grandTotal = document.getElementById('grand-total-price');
    if(couponCode === 'NEW15'){
        const discountPrice = document.getElementById('discount-price');
        const discounted =totalCost*15/100;
        discountPrice.innerText=discounted;
        discountArea.classList.remove('hidden')
        couponArea.classList.add('hidden');
        grandTotal.innerText=total-discounted; 
    }else if(couponCode === 'Couple 20'){
        const discountPrice = document.getElementById('discount-price');
        const discounted =totalCost*20/100;
        discountPrice.innerText=discounted;
        discountArea.classList.remove('hidden')
        couponArea.classList.add('hidden');
        grandTotal.innerText=total-discounted;
    }else{
        document.getElementById('input-field').value = "";
        alert('invalid coupon');
    }
});
//continue button scrool
const scroolContinueBtn = document.getElementById('continue-btn');
const targetNavSection = document.getElementById('nav-section');
scroolContinueBtn.addEventListener("click", function(){
targetNavSection.classList.add('show');
targetNavSection.scrollIntoView({behavior:'smooth'});
});
//continue button scrool

//Set Inner Text By ID
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}
