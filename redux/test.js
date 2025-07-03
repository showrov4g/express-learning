const employee = { 
    name: "Mir", 
    address: { country: "Bangladesh", city: "Jhenaidah" },

 }


 const employee2 = {
    ...employee,
    name: "Showrov ghosh",
    address: {...employee.address, city: "Faridpur"}
 }
 employee2.name = "Showrov ghosh"
 
 console.log(employee);
 console.log(employee2)