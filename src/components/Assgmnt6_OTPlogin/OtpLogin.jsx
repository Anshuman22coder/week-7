import React from "react";
import styles from "./otp.module.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { inputAtom } from "./atom";

function OtpLogin() {
	return (
		<div className={styles.loginContainer}>
			<LoginScreen />
		</div>
	);
}

export default OtpLogin;

function LoginScreen() {
	const [inputNumber, setInputNumber] = useRecoilState(inputAtom);

	return (
		<form
			className={styles.loginScreen}
			onSubmit={() => alert("number has been submitted")}
		>
			<h2>Login Via OTP</h2>

			<input
				type="number"
				value={inputNumber}
				onChange={(e) => setInputNumber(e.target.value)}
				required={true}
				name="mobileNumber"
				id="mobileNumber"
				pattern="[0-9]{10}"
				placeholder={"Enter your Mobile Number"}
			/>

			<button type="submit">
				<Link
					to={inputNumber.length === 10 ? "/otp" : "#"}
					disabled={inputNumber.length !== 10}
					style={{ color: inputNumber.length !== 10 ? "red" : "white" }}
					className={styles.link}
				>
					Send OTP
				</Link>
			</button>
		</form>
	);
}

export function OTPINPUTScreen() {
	const [focus, setFocus] = React.useState("otp-1");

	const timerRef = React.useRef(null);
	function handleChange(e) {
		if (timerRef.current) {
			window.clearTimeout(timerRef.current);
		}
		const containerRef = document.getElementById("digitContainer");
		const inputList = containerRef.querySelectorAll("input");

		const arrayInputList = Array.from(inputList);
		const indexTarget = arrayInputList.findIndex(
			(item) => item.id === e.target.id
		);
		if (indexTarget + 1 === arrayInputList.length) return;

		timerRef.current = setTimeout(() => {
			arrayInputList[indexTarget + 1].focus();
		}, 250);
	}
	return (
		<>
			<div className={styles.loginScreen}>
				<h2>Login Via OTP</h2>
				<div className={styles.otpDigitsContainer} id="digitContainer">
					<input
						className={styles.otpDigit}
						name="OTPDigti"
						id="otp-1"
						pattern="[0-9]{1}"
						onKeyDown={handleChange}
					/>
					<input
						onKeyDown={handleChange}
						className={styles.otpDigit}
						name="OTPDigti"
						id="otp-2"
					/>
					<input
						onKeyDown={handleChange}
						className={styles.otpDigit}
						name="OTPDigti"
						id="otp-3"
					/>
					<input
						onKeyDown={handleChange}
						className={styles.otpDigit}
						name="OTPDigti"
						id="otp-4"
					/>
				</div>

				<button type="button">Login</button>
			</div>
		</>
	);
}
