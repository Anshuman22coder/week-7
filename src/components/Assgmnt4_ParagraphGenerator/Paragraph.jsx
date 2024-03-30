import { useRecoilValue, useRecoilState } from "recoil";
import styles from "./paragraph.module.css";
import { atomNumber, derivedState } from "./atom";

function Paragraph() {
	const [number, setNumber] = useRecoilState(atomNumber);
	const paragraph = useRecoilValue(derivedState);
	return (
		<div className={styles.paragraphContainer}>
			<h3>Para Generator</h3>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button>Generate</button>

			<section>{paragraph}</section>
		</div>
	);
}

export default Paragraph;
