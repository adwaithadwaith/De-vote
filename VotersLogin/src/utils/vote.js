const castVote = async (account, contract, postIndex, candidateIndex) => {
    console.log("Casting vote...");
    console.log(contract)
    console.log(account)
  
    try {
      await contract.methods
        .vote(postIndex, candidateIndex)
        .send({
          from: account,
          gas: 3000000,
        })
        .then((result) => {
          console.log("Vote cast successfully:", result);
          // Handle successful vote (e.g., display confirmation message)
        })
        .catch((error) => {
          alert("Already voted")
          console.error("Error casting vote:", error);
          // Handle voting error (e.g., display error message)
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export default castVote;