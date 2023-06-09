import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Register = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
//	console.log(name);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/user/register", {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password
				})
			});
//			console.log(response);
			const jsonResponse = await response.json();
			alert(jsonResponse.message);
			navigate("/user/login");
		} catch (err) {
			alert("ユーザ登録失敗");
		}
	};

	useEffect(() => {
		document.title = "登録ページ";
	}, []);

	return (
		<div>
			<h1 className="page-title">ユーザ登録ページ</h1>
			<form onSubmit={handleSubmit}>
				<input value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
					type="text" name="name" placeholder="名前" required />
				<input value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
					type="text" name="email" placeholder="メールアドレス" required />
				<input value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
					type="text" name="password" placeholder="パスワード" required />
				<button>登録</button>
			</form>
		</div>
	);
};

export default Register;
