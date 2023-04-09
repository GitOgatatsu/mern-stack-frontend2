import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const UpdateItem = () => {

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const params = useParams();

	useEffect(() => {
		const getSingleItem = async () => {
			const response = await fetch(`http://localhost:5000/item/${params.id}`);
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			setTitle(jsonResponse.singleItem.title);
			setPrice(jsonResponse.singleItem.price);
			setImage(jsonResponse.singleItem.image);
			setDescription(jsonResponse.singleItem.description);
		};
		getSingleItem();
	}, [params.id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:5000/item/update/${params.id}`, {
				method: "PUT",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
					"authorization": `Bearer ${localStorage.getItem("token")}`
				},
				body: JSON.stringify({
					title: title,
					price: price,
					image: image,
					description: description
				})
			});
			const jsonResponse = await response.json();
			alert(jsonResponse.message);
		} catch (err) {
			alert("アイテム編集失敗");
		}
	};

	return (
		<div>
			<h1>アイテム編集</h1>
			<form onSubmit={handleSubmit}>
				<input value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text" name="title" placeholder="アイテム名" required />
				<input value={price}
					onChange={(e) => setPrice(e.target.value)}
					type="text" name="price" placeholder="価格" required />
				<input value={image}
					onChange={(e) => setImage(e.target.value)}
					type="text" name="image" placeholder="画像" required />
				<textarea value={description}
					onChange={(e) => setDescription(e.target.value)}
					type="text" name="description" placeholder="商品説明" required />
				<button>編集</button>
			</form>
		</div>
	);
};

export default UpdateItem;
