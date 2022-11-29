//monthly PAYE 

//DOM manipulation: drilling using selector methods
const form = document.querySelector('form');
const salary = document.getElementById('basicSalary');
const allowance = document.getElementById('benefits');
const htmlNssf = document.getElementById('nssf')
const htmlNhif = document.querySelector('p#nhif')
const payee = document.getElementById('payee')
const htmlNet = document.getElementById('net')





//Listening to submit button 
form.addEventListener('submit', e=>{
    //takes the value of the user input on basic salary
    const basic = salary.value;
    // Prevents reloading
    e.preventDefault();
    //passes basic as an argument to the other functions
    calcNetSalary(basic)});

// this function calculates the user's net salary

//Net salary is what an employee takes home after adding allowances and 
//subtracting the required deductions.

//function calcNetSalary passes the value in the basic ariable to all other functions
function calcNetSalary(input){
    const nssf = nssfDeduction(input);
    const nhif = nhifDeduction(input);
    const payeTax = checkPayee(input);
    // we use the parseFloat method to change the string in input and allowance to float
    //without it our values are concatenated
    const grossSalary = parseFloat(input) + parseFloat(allowance.value);
    const netSalary = grossSalary - payeTax -nssf -nhif;
    //innerHTML adds both text and elements to the DOM
    htmlNet.innerHTML = `Net Salary: ${netSalary}`
    // console.log(netSalary, ' netSalary', grossSalary, 'grossSalary')
    // console.log(nssf, 'nssf', nhif ,' nhif', payeTax , 'payeTax')
    return netSalary;

}



//remember input is gross input
//recall basic = input.value
//our input value here is taken as our basic value
function checkPayee(input){   
    if(input>=0 && input <= 24000){ 
        const payeeValue = 0.1*input;   
        payee.textContent = `PAYE: ${payeeValue}`
        return payeeValue;
    }else if( input>24000 && input <= 32333){ 
        const payeeValue = 0.25*input 
        payee.textContent = `PAYE: ${payeeValue}`
        return payeeValue;
    }else if(input > 32333){ 
        const payeeValue = 0.30*input
        payee.textContent= `PAYE: ${payeeValue}`
        return payeeValue;
    }      
        
}



function nhifDeduction(input){
    if(input>0 && input<=5999){
        let nhifValue = 150
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=6000 && input<=7999){
        let nhifValue = 300
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=8000 && input<=11999){
        let nhifValue = 400
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=12000 && input<=14999){
        let nhifValue = 500
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=15000 && input<=19999){
        let nhifValue = 600;
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=20000 && input<=24999){
        let nhifValue = 750
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=25000 && input<=29999){
        let nhifValue = 850
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=30000 && input<=34999){
        let nhifValue = 900
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=35000 && input<=39999){
        let nhifValue = 950
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=40000 && input<=44999){
        let nhifValue = 1000
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=45000 && input<=49999){
        let nhifValue = 1100
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=50000 && input<=59999){
        let nhifValue = 1200
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=60000 && input<=69999){
                let nhifValue = 1300
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=70000 && input<=79999){
        let nhifValue = 1400
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=80000 && input<=89999){
        let nhifValue = 1500
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=90000 && input<=99999){
        let nhifValue = 1600
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;
    }else if(input>=100000){ 
        let nhifValue = 1700
        htmlNhif.textContent = `NHIF:${nhifValue} `
        return nhifValue;       
    }
}
//personal note:
//when writing numbers, avoid using comas
//when returning numbers don't do this: 
    //return htmlNhif.textContent=1700 
//since the return value will be taken as a string


function nssfDeduction(input){    
    const deduction = input*0.06;
    // console.log(deduction);
    htmlNssf.textContent = `NSSF: ${deduction}` 
    return deduction
}
