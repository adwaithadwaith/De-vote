// SPDX-License-Identifier: MIT
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <0.9.0;

contract MultiPostVoting {
  struct Candidate {
    string name;
    uint256 voteCount;
  }

  struct Post {
    string name;
    uint256[] candidateIndexes;
  }

  Post[] public posts;
  Candidate[] public candidates;
  address public owner;
  mapping(address => bool) public voters;

  uint256 public votingStart;
  uint256 public votingEnd;

  event AlreadyVoted(address indexed voter);
  event CandidateAdded(uint256 indexed candidateIndex, string name);
  event ElectionCreated(uint256 indexed electionId, string[] postNames);
  event VoteCast(address indexed voter, uint256 indexed postIndex, uint256 indexed candidateIndex);

  constructor() public  {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can perform this action");
    _;
  }

  function createElection(string[] memory _postNames, string[][] memory _candidateNames, uint256 _durationInMinutes) public onlyOwner {
    require(_postNames.length == _candidateNames.length, "Invalid input: Post and candidate names lengths mismatch");

    for (uint256 i = 0; i < _postNames.length; i++) {
      string[] memory postCandidates = _candidateNames[i];
      uint256[] memory candidateIndexes = new uint256[](postCandidates.length);

      for (uint256 j = 0; j < postCandidates.length; j++) {
        uint256 candidateIndex = candidates.length;
        candidates.push(Candidate({
          name: postCandidates[j],
          voteCount: 0
        }));
        candidateIndexes[j] = candidateIndex;

        emit CandidateAdded(candidateIndex, postCandidates[j]);
      }

      posts.push(Post({
        name: _postNames[i],
        candidateIndexes: candidateIndexes
      }));
    }

    votingStart = block.timestamp;
    votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);

    emit ElectionCreated(posts.length - 1, _postNames);
  }

  function addCandidate(uint256 _postIndex, string memory _name) public onlyOwner {
    require(_postIndex < posts.length, "Invalid post index");

    uint256 candidateIndex = candidates.length;
    candidates.push(Candidate({
      name: _name,
      voteCount: 0
    }));

    posts[_postIndex].candidateIndexes.push(candidateIndex);

    emit CandidateAdded(candidateIndex, _name);
  }

  function vote(uint256 _postIndex, uint256 _candidateIndex) public {
    require(!voters[msg.sender], "You have already voted.");
    require(_postIndex < posts.length, "Invalid post index");
    require(_candidateIndex < posts[_postIndex].candidateIndexes.length, "Invalid candidate index.");
    require(block.timestamp <= votingEnd, "Voting has ended");

    uint256 candidateIndex = posts[_postIndex].candidateIndexes[_candidateIndex];
    candidates[candidateIndex].voteCount++;
    voters[msg.sender] = true;

    emit AlreadyVoted(msg.sender);
    emit VoteCast(msg.sender, _postIndex, candidateIndex);
  }

  function addPostWithCandidates(string memory _postName, string[] memory _candidateNames) public onlyOwner {
    require(_candidateNames.length > 0, "At least one candidate must be provided");

    uint256[] memory candidateIndexes = new uint256[](_candidateNames.length);

    for (uint256 i = 0; i < _candidateNames.length; i++) {
      uint256 candidateIndex = candidates.length;
      candidates.push(Candidate({
        name: _candidateNames[i],
        voteCount: 0
      }));
      candidateIndexes[i] = candidateIndex;

      emit CandidateAdded(candidateIndex, _candidateNames[i]);
    }

    posts.push(Post({
      name: _postName,
      candidateIndexes: candidateIndexes
    }));
  }

  function getVoteCount(uint256 _postIndex) public view returns (uint256[] memory) {
    require(_postIndex < posts.length, "Invalid post index");

    uint256[] memory votes = new uint256[](posts[_postIndex].candidateIndexes.length);

    for (uint256 i = 0; i < posts[_postIndex].candidateIndexes.length; i++) {
        uint256 candidateIndex = posts[_postIndex].candidateIndexes[i];
        votes[i] = candidates[candidateIndex].voteCount;
    }

    return votes;
  }

}