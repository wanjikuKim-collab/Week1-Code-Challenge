//monthly PAYE 

const generatedGrade = document.querySelector('li');
const form = document.querySelector('form');
const input = document.getElementById('basicSalary');
const allowance = document.getElementById('benefits');
const htmlNssf = document.getElementById('nssf')
const htmlNhif = document.querySelector('p#nhif')
const payee = document.getElementById('payee')
const htmlNet = document.getElementById('net')

form.addEventListener('submit', e=>{
    //The event listener has a default of sending content to the browser
    //to prevent this we use preventDefault
    e.preventDefault();
    calcNetSalary(input)});

// this function calculates the user's net salary

//Net salary is what an employee takes home after adding allowances and 
//subtracting the required deductions.
function calcNetSalary(input){
    const nssf = nssfDeduction(input);
    const nhif = nhifDeduction(input);
    const payeTax = checkPayee(input);
    const grossSalary = input + allowance;
    const netSalary = grossSalary - payeTax -nssf -nhif;
    console.log(netSalary);

    /*Outputs*/

}



//remember input is gross input
function checkPayee(input){
    if(input>=0 && input <= 24000){ 
        let payeeValue = 0.1*input       
        return payee.textContent = `PAYE: ${payeeValue}`
    }else if(input>24000 && input<= 32333){ 
        let payeeValue = 0.25*input       
        return payee.textContent = `PAYE: ${payeeValue}`
    }else if(input > 32333){ 
        let payeeValue = 0.30*input       
        return payee.textContent= `PAYE: ${payeeValue}`
    }
}



function nhifDeduction(input){
    if(input>0 && input<=5,999){
        return htmlNhif.textContent=150
    }else if(input>=6,000 && input<=7,999){
        return htmlNhif.textContent=300
    }else if(input>=8,000 && input<=11,999){
        return htmlNhif.textContent=400
    }else if(input>=12,000 && input<=14,999){
        return htmlNhif.textContent=500
    }else if(input>=15,000 && input<=19,999){
        return htmlNhif.textContent=600
    }else if(input>=20,000 && input<=24,999){
        return htmlNhif.textContent=750
    }else if(input>=25,000 && input<=29,999){
        return htmlNhif.textContent=850
    }else if(input>=30,000 && input<=34,999){
        return htmlNhif.textContent=900
    }else if(input>=35,000 && input<=39,999){
        return htmlNhif.textContent=950
    }else if(input>=40,000 && input<=44,999){
        return htmlNhif.textContent=1,000
    }else if(input>=45,000 && input<=49,999){
        return htmlNhif.textContent=1,100
    }else if(input>=50,000 && input<=59,999){
        return htmlNhif.textContent=1,200
    }else if(input>=60,000 && input<=69,999){
        return htmlNhif.textContent=1,300
    }else if(input>=70,000 && input<=79,999){
        return htmlNhif.textContent=1,400
    }else if(input>=80,000 && input<=89,999){
        return htmlNhif.textContent=1,500
    }else if(input>=90,000 && input<=99,999){
        return htmlNhif.textContent=1,600
    }else if(input>=100,000){
        return htmlNhif.textContent=1,700
    }
}



function nssfDeduction(input){
    return htmlNssf.textContent *=input * 0.06
}
