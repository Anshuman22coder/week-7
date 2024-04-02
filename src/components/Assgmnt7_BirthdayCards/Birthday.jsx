/* eslint-disable react/prop-types */

import styles from "./birthday.module.css";
import { useRecoilState } from "recoil";
import { nameAtom, showCardAtom } from "./atom";

function Birthday() {
	const [name, setName] = useRecoilState(nameAtom);
	const [show, setShow] = useRecoilState(showCardAtom);
	const content = (
		<>
			<BirthdayCard>
				On your special day, I wish you endless joy, laughter, and love. May
				each moment be filled with happiness and may your heart be filled with
				warmth. Happy Birthday {name}!
			</BirthdayCard>
			<BirthdayCard>
				May each day be an opportunity for growth and may you achieve all that
				you aspire for. Happy Birthday {name}!
			</BirthdayCard>
			<BirthdayCard>
				Hey {name}, it&apos;s time to celebrate! Wishing you a birthday filled
				with laughter, fun, and unforgettable memories. May your day be as
				bright and colorful as you are. Happy Birthday!
			</BirthdayCard>
		</>
	);
	return (
		<div className={styles.mainBackground}>			
			<div className={styles.birthdayContainer}>
				<h3>Enter your Name</h3>
				<input
					type="text"
					name=""
					id=""
					placeholder="Enter your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={() => setShow(true)}>Done</button>

				<br />

				{show && name.length > 2 && content}
			</div>
		</div>
	);
}

export default Birthday;

function BirthdayCard({ children }) {
	return <div className={styles.card}>{children}</div>;
}
