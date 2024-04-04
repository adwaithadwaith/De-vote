const creatElection = async (account,contract) => {
    const postNames = ["Chairperson"]
    //,"Magazine Editor","Arts Club Secretary","Department Representative"]; // Array of strings
    const candidateNames = [["Rahul", "Priya", "Vyshnav","Hemanth"]]
    //,["Hemanth", "Dev", "Jyothika"],["Karthik", "Varun", "Amal"],["Devan", "Abhijith", "Arun"]]; // 2D array of strings
    const durationInMinutes = 10;
    console.log("hello1");
     account ? console.log(account) : console.log('not found')
    // await contract.methods.createElection(postNames, candidateNames, durationInMinutes).send({from:'0x5c4b1c4E6B46d397af3bee1E879072396cE6b904'});
    await contract.methods
      .createElection(postNames, candidateNames, durationInMinutes)
      .send({
        from: account,
        gas: 3000000,
      }) // Replace with your actual address
      .then((result) => {
        console.log("Election created successfully:", result);
        // Handle the result or perform additional actions
      })
      .catch((error) => {
        console.error("Error creating election:", error);
        // Handle the error
      });
  };

  export default creatElection;
