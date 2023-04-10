import { useNavigate } from "react-router-dom";
import useAuth from "../../utils/useAuth";



const Logout = () => {

	const navigate = useNavigate();
	const loginUser = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:5000/user/logout/${loginUser}`);
			const jsonResponse = await response.json();
			alert(jsonResponse.message);
			navigate("/");
		} catch (err) {
			alert("ログアウト失敗");
		}

	};

	return (
		<div>
			<h1 className="page-title">ログアウト</h1>
			<form onSubmit={handleSubmit}>
				<button>ログアウト</button>
			</form>
		</div>
	);
};

export default Logout;
