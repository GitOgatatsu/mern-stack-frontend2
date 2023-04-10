import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const useAuth = () => {

	const [loginUser, setLoginUser] = useState();
	const navigate = useNavigate();


	useEffect(() => {

		const checkLogin = async () => {
			const token = await localStorage.getItem("token");

			if (!token) {
				navigate("/user/login");
			}

			try {
				const decode = jwt_decode(token);
				setLoginUser(decode.email);
				if (loginUser) {
					const response = await fetch(`http://localhost:5000/user/check/${loginUser}`);
					console.log(response.status);
					if (response.status === 400) {
						navigate("/user/login");
					}
				}
			} catch (err) {
				navigate("/user/login");
			}
		};
		checkLogin();

	}, [navigate, loginUser]);

	return loginUser;

};

export default useAuth;
