
    // function calculateMoney (ticketsale) {

    //     if(typeof ticketsale !== "number" || ticketsale < 0) {
    //         return "Enter positive and valid numbers"
    //     }
    // const ticketPrice = 120;
    // const darwan = 500;
    // const perLunch = 50;
    // const totalDarwan = 8;
    
    // const totalIncome = ticketsale * ticketPrice;
    // const totalExpense = (darwan) + (perLunch * totalDarwan)
    
    // const totalMoney = totalIncome - totalExpense;
    // return totalMoney;

    // }

   


    // function checkName(name) {
    //     if(typeof name !== "string"){
    //         return "invalid"
    //     }
    //     const lastcr = name.slice(-1).toLowerCase();
    //     const myChar = 'a,y,e,i,o,u,w';
    
    //     if (myChar.includes(lastcr)) {
    //       return "Good Name";
    //     } else {
    //        return"Bad Name";
    //     }
    // }
    
  
    
   
    // function deleteInvalids(array) {
       
    //     let result = [];
    
    //     for (let i = 0; i < array.length; i++) {
    //         var item = array[i];
    
    //         if (typeof item === 'number' && !isNaN(item)) {
    //             result.push(item);
    //         }
    //     }
    
    //     return result;
    // }
   
    
   

           


            //  function password(obj) {
            //     if (typeof obj === 'object' && obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')) {
            //       const siteNameFirstChar = obj['siteName'].charAt(0).toUpperCase();
            //       const nameLower = obj['name'].toLowerCase();
            //       const birthYearValue = obj['birthYear'];
            //       const passwordString = siteNameFirstChar + '#' + nameLower + '@' + birthYearValue;
            //       return passwordString;
            //     } else {
            //       return 'Invalid input object';
            //     }
            //   }
              

            function monthlySavings(allPayments, livingCost) {
              
              if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
                  return "invalid input";
              }         
              var totalIncome = 0;
              for (var i = 0; i < allPayments.length; i++) {
                  if (typeof allPayments[i] !== 'number') {
                      return "invalid input";
                  }
                  totalIncome = totalIncome + allPayments[i];
              }        
              var bankTax;
              if (totalIncome > 3000) {
                  bankTax = 0.2 * (totalIncome - 3000);
              } else {
                  bankTax = 0;
              }     
              var netIncome = totalIncome - bankTax;
              var savings = netIncome - livingCost;
              if (savings >= 0) {
                  return savings; 
              } else {
                  return "earn more"; 
              }
          }
          
       