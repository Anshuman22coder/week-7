import { atomFamily, selectorFamily } from "recoil";

export const atomGithubProfile = atomFamily({
	key: "github_profile",

	default: selectorFamily({
		key: "selectorFamily_github",
		get: (username) => async () => {
			const response = await fetch(`https://api.github.com/users/${username}`);
			const data = await response.json();
			console.log(data);
			return data;
		},
	}),
});
