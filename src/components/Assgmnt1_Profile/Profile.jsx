import React from "react";
import styles from "./profile.module.css";

function Profile() {
	return (
		<div className={styles.profileContainer}>
			<section className={styles.firstHalf}>
				<article className={styles.onlyBackground}></article>
				<article className={styles.profile}>
					<img
						src="https://shorturl.at/nrwOW"
						height={100}
						width={100}
						alt="saka"
					/>
					<p>
						B Saka, <small>22</small>
					</p>
					<p>Arsenal, London</p>
				</article>
			</section>

			<footer className={styles.footerContainer}>
				<article className="articleContent">
					<p>7M</p>
					<p>Followers</p>
				</article>
				<article className="articleContent">
					<p>16M</p>
					<p>Likes</p>
				</article>
				<article className="articleContent">
					<p>2.3k</p>
					<p>Photos</p>
				</article>
			</footer>
		</div>
	);
}

export default Profile;
