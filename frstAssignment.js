
    function calculateMoney (ticketsale) {

        if(typeof ticketsale !== "number" || ticketsale < 0) {
            return "Enter positive and valid numbers"
        }
    const ticketPrice = 120;
    const darwan = 500;
    const perLunch = 50;
    const totalDarwan = 8;
    
    const totalIncome = ticketsale * ticketPrice;
    const totalExpense = (darwan) + (perLunch * totalDarwan)
    
    const totalMoney = totalIncome - totalExpense;
    return totalMoney;

    }

   


    function checkName(name) {
        if(typeof name !== "string"){
            return "invalid"
        }
        const lastcr = name.slice(-1).toLowerCase();
        const myChar = 'a,y,e,i,o,u,w';
    
        if (myChar.includes(lastcr)) {
          return "Good Name";
        } else {
           return"Bad Name";
        }
    }
    
  
    
   
    function deleteInvalids(array) {
       
        let result = [];
    
        for (let i = 0; i < array.length; i++) {
            var item = array[i];
    
            if (typeof item === 'number' && !isNaN(item)) {
                result.push(item);
            }
        }
    
        return result;
    }
   
    
   
    // function password() {

    //     const details = {
    //         name: "Kolim Uddin",
    //         birthYear : 1999,
    //         siteName : "Google"
    //     }
    // }