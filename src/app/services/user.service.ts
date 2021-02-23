export class UserService {

  users = [{
      name: "Appartement",
      owner: "Timothée",
      address: "34 rue des canards",
      price: "564000"
    },

    {
      name: "Maison",
      owner: "Paul",
      address: "58 rue des soeurs",
      price: "254000"
    },

    {
      name: "Appartement",
      owner: "François",
      address: "24 rue des tuiles",
      price: "124000"
    },
  ]

  checkName() {
        this.users.name
  }

  checkOwner() {
        this.users.owner
    }
  }

  checkAddress() {
        this.user.address 
  }

  checkPrice() {
        this.user.price
  }

  checkOneName(i : number) {
   for (let user of this.users) {
    user.name[i];
    user.owner[i];
    user.address[i];
    user.price[i];
   }
  }
  

}
