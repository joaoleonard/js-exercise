var house = {
    rooms: 2,
    residents: 0,
    freeToilets: 1,
    occupiedToilet: false
  };
  
  console.log(house);
  
  house.newResident = function(getinIn) {
    house.residents = house.residents + getinIn;
    var plural = house.residents == 1 ? ['mora', 'pessoa'] : ['moram', 'pessoas'];
    return `Agora ${plural[0]} ${house.residents} ${plural[1]} na casa`;
  };
  
  console.log(house.newResident(3));
  
  console.log(house);
  
  house.takeToilet = function(gitInTheToilets) {
    if (house.freeToilets <= 0) {
      return "Os banheiros estão ocupados"
    } else if (gitInTheToilets > house.freeToilets) {
      var plural = house.freeToilets == 1 ? ["cabe", "pessoa"] : ["cabem", "pessoas"];
      return `Só ${plural[0]} ${house.freeToilets} ${plural[1]} no banheiro.`
    } else {
      house.freeToilets = house.freeToilets - gitInTheToilets;
      house.occupiedsToilets = house.freeToilets == 0 ? true : false;
      return 'O banheiro foi ocupado';
    } 
  };
  
  console.log(house.takeToilet(1));
  
  console.log(house);
  
  house.expenses = {
    rent: 800,
    energyBill: 200,
    waterBill: 300,
    cableBill: 150,
    internetBill: 220,
    marketBill: 400
  }
  
  var {rent, energyBill, waterBill, cableBill, internetBill, marketBill} = house.expenses;
  
  house.expensesDivider = function() {
    var totalExpenses = 
      rent + 
      energyBill + 
      waterBill + 
      cableBill + 
      internetBill + 
      marketBill
    return `O total de gastos da casa ficam em ${totalExpenses / house.residents} reais para cada`;
  }
  
  house.expensesDivider();