import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const ReadAll = () => {

	const [allItems, setAllItems] = useState("");

	useEffect(() => {
		console.log("TEST");
		const getAllItems = async () => {
			const response = await fetch("http://localhost:5000");
			const jsonResponse = await response.json();
			setAllItems(jsonResponse);
		};
		getAllItems();
	}, []);

	return (
		<div>
			<h1>すべてのアイテムデータ</h1>
			{allItems && allItems.allItems.map(item =>
				<Link to="" key={item._id}>
					<img src={require(`../../images${item.image}`)} alt="item" />
					<h2>{item.price}</h2>
					<h3>{item.title}</h3>
					<p>{item.description.substring( 0, 80 )}</p>
				</Link>
			)}
		</div>

	);
};

export default ReadAll;
