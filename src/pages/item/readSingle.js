import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const ReadSingeItem = () => {

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

	return (
		<div>
			<div>
				{image && <img src={require(`../../images${image}`)} alt="item" />}
			</div>
			<div>
				<h1>{title}</h1>
				<h2>¥{price}</h2>
				<hr />
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ReadSingeItem;
