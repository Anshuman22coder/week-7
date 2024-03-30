/* eslint-disable react/prop-types */
import React from "react";
import styles from "./backGchanger.module.css";
import { atomColor } from "./atom";
import { useRecoilState } from "recoil";

const colors = ["red", "yellow", "pink", "purple", "brown", "green", "white"];

function BackGchanger() {
	return (
		<div className={styles.colorContainer}>
			{colors.map((color) => {
				return <ColorButton key={color} color={color} />;
			})}
		</div>
	);
}

export default BackGchanger;

function ColorButton({ color }) {
	const [bgColor, setBgColor] = useRecoilState(atomColor);
	React.useEffect(() => {
		document.body.style.backgroundColor = bgColor;
	}, [bgColor]);

	return (
		<button
			type="button"
			style={{
				backgroundColor: color,
				textDecoration: bgColor === color ? "underline" : "",
			}}
			onClick={() => setBgColor(color)}
			className={styles.buttonColor}
		>
			{color === "white" ? "default" : color}
		</button>
	);
}
