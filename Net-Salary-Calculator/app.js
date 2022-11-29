Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@wanjikuKim-collab 
wanjikuKim-collab
/
Week1-Code-Challenge
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Week1-Code-Challenge/Net-Salary-Calculator/index.js /
@wanjikuKim-collab
wanjikuKim-collab payee
Latest commit 9e456f4 2 hours ago
 History
 1 contributor
101 lines (81 sloc)  3.17 KB

//monthly PAYE 

const form = document.querySelector('form');
const input = document.getElementById('basicSalary');
const allowance = document.getElementById('benefits');
const htmlNssf = document.getElementById('nssf')
const htmlNhif = document.querySelector('p#nhif')
const payee = document.getElementById('payee')
const htmlNet = document.getElementById('net')

const basic = input.value;




form.addEventListener('submit', e=>{
    //The event listener has a default of sending content to the browser
    //to prevent this we use preventDefault
    e.preventDefault();
    calcNetSalary(input)});

// this function calculates the user's net salary

//Net salary is what an employee takes home after adding allowances and 
//subtracting the required deductions.
function calcNetSalary(input){
    const nssf = parseInt(nssfDeduction(input));
    const nhif = nhifDeduction(input);
    const payeTax = checkPayee(input);
    const grossSalary = input + allowance.value;
    const netSalary = grossSalary - payeTax -nssf -nhif;
    return netSalary;

}



//remember input is gross input
//recall basic = input.value
function checkPayee(input){
    
    if(basic>=0 && basic <= 24000){ 
        const payeeValue = 0.1*input.value     
        return payee.textContent = `PAYE: ${payeeValue}`
    }else if(basic>24000 && basic <= 32333){ 
        const payeeValue = 0.25*input.value       
        return payee.textContent = `PAYE: ${payeeValue}`
    }else if(basic > 32333){ 
        const payeeValue = 0.30*input.value       
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
    const deduction = input.value *0.06;
    console.log(deduction) 
    return htmlNssf.textContent = `NSSF: ${deduction}` 
}
