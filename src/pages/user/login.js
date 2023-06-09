import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/user/login", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					password: password
				})
			});
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			localStorage.setItem("token", jsonResponse.token);
			alert(jsonResponse.message);
			navigate("/");
		} catch (err) {
			alert("ログイン失敗");
		}

	};

	useEffect(() => {
		document.title = "ログインページ";
	}, []);

	return (
		<div>
			<h1 className="page-title">ログイン</h1>
			<form onSubmit={handleSubmit}>
				<input value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					type = "text" name = "email" placeholder = "メールアドレス" required />
				<input value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
					type="text" name="password" placeholder="パスワード" required />
				<button>ログイン</button>
			</form>
		</div>
	);
};

export default Login;
