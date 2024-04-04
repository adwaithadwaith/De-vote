const addPostWithCandidates = async (account, contract, postName, candidateNames) => {
    console.log("Adding post with candidates...");
  
    try {
      await contract.methods
        .addPostWithCandidates(postName, candidateNames)
        .send({
          from: account,
          gas: 3000000,
        })
        .then((result) => {
          console.log("Post with candidates added successfully:", result);
          // Handle successful post addition (e.g., display confirmation message)
        })
        .catch((error) => {
          console.error("Error adding post with candidates:", error);
          // Handle error adding post (e.g., display error message)
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  export default addPostWithCandidates;