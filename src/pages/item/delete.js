import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../utils/useAuth";



const DeleteItem = () => {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [email, setEmail] = useState("");
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		document.title = "アイテム削除ページ";

		const getSingleItem = async () => {
			const response = await fetch(`http://localhost:5000/item/${params.id}`);
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			setTitle(jsonResponse.singleItem.title);
			setPrice(jsonResponse.singleItem.price);
			setImage(jsonResponse.singleItem.image);
			setDescription(jsonResponse.singleItem.description);
			setEmail(jsonResponse.singleItem.email);
		};
		getSingleItem();
	}, [params.id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:5000/item/delete/${params.id}`, {
				method: "DELETE",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"authorization": `Bearer ${localStorage.getItem("token")}`
				}
			});
			const jsonResponse = await response.json();
			alert(jsonResponse.message);
			navigate("/");
		} catch (err) {
			alert("アイテム削除失敗");
		}
	};

	const loginUser = useAuth();

	if (loginUser === email) {
		return (
			<div className="delete-page">
				<h1 className="page-title">アイテム削除</h1>
				<form onSubmit={handleSubmit}>
					<h2>{title}</h2>
					{image && <img src={require(`../../images${image}`)} alt="item" />}
					<h3>¥{price}</h3>
					<p>{description}</p>
					<button>削除</button>
				</form>
			</div>
		);
	} else {
		return (
			<h1>権限がありません</h1>
		);
	}

};

export default DeleteItem;
