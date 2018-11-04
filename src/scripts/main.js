fetch("http://localhost:8088/customer")
  .then(data => data.json())
  .then(contacts => {
    let emailArray = [];
    contacts.forEach(person => {
      person.contacts.email.forEach(email => {
        emailArray.push(email);
      })
    })
    console.log(emailArray)
  })