fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((jsonResult) => {
    console.log(jsonResult);
    let result = {
      applicant: "Elias",
    };

    let users = [];

    jsonResult.forEach((user) => {
      users.push({
        /* add other properties here */
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ")[1],
        companyName: user.company.name,
        companyFullAddress: user.address.street + user.address.suite,
        website: user.website,
        phone: user.phone,
      });
    });
    const successMessage = {
      Success: true,
      message: `thank you ${result.applicant} for your application`,
    };
    result.users = users;
    console.log(result);

    fetch("https://scheduler.luminarycxm.com/api/v1/cleaned/data/test/1", {
      method: "post",
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(),
    })
      .then((result) => {
        console.log(result);
        if (result.ok) console.log(successMessage);
      })
      .catch((err) => console.log("Request Failed", err));
  });
