import { useRecoilValueLoadable } from "recoil";
import { gitHubInfo } from "../store/atoms/allInOne";

function GitHubInfo() {
  const username = "Rajankannaujiya";
  const loadableInfo = useRecoilValueLoadable(gitHubInfo(username));
  console.log("value is s", loadableInfo);

  return (
    <>
      {
      loadableInfo.state === "hasValue" ?
      <div>
        <img src={loadableInfo.contents.avatar_url} alt="github image url" />
        <h1>gitHub userName: {username}</h1>
        <h2>nickName: {loadableInfo.contents.name}</h2>
        <p>follower: {loadableInfo.contents.followers}</p>
        <p>following: {loadableInfo.contents.following}</p>
        <p>repository: {loadableInfo.contents.public_repos}</p>
      </div>
      : null
  }
    </>
  );
}

export default GitHubInfo;
