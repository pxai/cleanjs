const objectPropertiesBad = () => {
  const customer = {
    customerName: "John",
    customerAge: 12,
    customerAddress: "Evergreen Terrace 12"
    customDevice: ["iPhone", "iPad"]
  }
}

const objectProperties = () => {
  const customer = {
    name: "John",
    age: 12,
    address: "Evergreen Terrace 12"
    devices: ["iPhone", "iPad"]
  }
}

const defaultObjectsBad = () => {
  let bad = {
     id: null,
     name: "",
     address: "Nowhere",
     isVip: false
   };

   function init (bad) {
     const customer = {};
     customer.id = bad.id || 1;
     customer.name = bad.name || "Default';
     customer.address = bad.address || "Unknown";
     customer.isVip = bad.isVip || false;
   }

   init(bad);
}

const defaultObjects = () => {
  let bad = {
     id: null,
     name: "",
     address: "Nowhere",
     isVip: false
   };

   function init (bad) {
    let customer = Object.assign({
        id: 1,
        name: "Default",
        address: "Unknown",
        isVip: false
      }, bad);
   }

   init(bad);
}
