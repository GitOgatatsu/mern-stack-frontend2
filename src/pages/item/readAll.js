import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const ReadAll = () => {

	const [allItems, setAllItems] = useState("");

	useEffect(() => {
		document.title = "MERN Market";

		const getAllItems = async () => {
			const response = await fetch("http://localhost:5000");
			const jsonResponse = await response.json();
			setAllItems(jsonResponse);
		};
		getAllItems();
	}, []);

	return (
		<div className="grid-conatinser-in">>
			{allItems && allItems.allItems.map(item =>
				<Link to={`/item/${item._id}`} key={item._id}>
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
