import { useState } from "react";



const ReadAll = () => {

	const [allItems, setAllItems] = useState("");

	const getAllItems = async () => {
		const response = await fetch("http://localhost:5000");
		const jsonResponse = await response.json();
		setAllItems(jsonResponse);
	};

	return (
		<div>
			<h1>すべてのアイテムデータ</h1>
			{allItems && allItems.allItems.map(item =>
				<div key={item._id}>
					<img src={require(`../../images${item.image}`)} alt="item" />
					<h2>{item.price}</h2>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
			)}
			<button onClick={getAllItems}>全データ取得</button>
		</div>

	);
};

export default ReadAll;
