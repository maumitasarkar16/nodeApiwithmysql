const sql = require ('./db.js');

const Customer= function(customer)
{
   this.email = customer.email;
   this.name = customer.name;
   this.active = customer.active;
}

Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created customer: ", { id: res.insertId, ...newCustomer });
      result(null, { id: res.insertId, ...newCustomer });
    });
  };

  module.exports=Customer;