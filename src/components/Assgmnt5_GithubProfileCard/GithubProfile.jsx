/* eslint-disable react/prop-types */
import styles from "./github.module.css";

import { useRecoilValueLoadable } from "recoil";
import { atomGithubProfile } from "./store/atom";

function GithubProfile() {
	return (
		<div className={styles.githubProfContainer}>
			<GithhubUser username={"hkirat"} />
		</div>
	);
}

export default GithubProfile;

function GithhubUser({ username }) {
	const userContentLoadable = useRecoilValueLoadable(
		atomGithubProfile(username)
	);
	//avatar_url,name(username),followers
	//userContentLoadable has state and contents, state has 3 values..hasValue, loading and hasError
	const { avatar_url, name, followers } = userContentLoadable.contents;

	switch (userContentLoadable.state) {
		case "hasValue":
			return (
				<div className={styles.profile}>
					<img src={avatar_url} alt="profile image" />
					<h5>{name}</h5>
					<p>Followers :{followers}</p>
				</div>
			);
		case "loading":
			return <h3>Loading....</h3>;
		case "hasError":
			throw new Error("Something has happend,kindly check the code once");
	}
}
