const getVoteCount = async (postIndex, contract) => {
    console.log("Fetching vote count...");
  
    try {
      const votes = await contract.methods.getVoteCount(postIndex).call();
      console.log("Vote count retrieved:", votes);
      // Handle retrieved vote count (e.g., display results in UI)
      return votes;
    } catch (error) {
      console.error("Error fetching vote count:", error);
      // Handle error getting vote count (e.g., display error message)
      return null;
    }
  };

  export default getVoteCount