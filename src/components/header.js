import { Link } from "react-router-dom";
import headerSVG from "../images/header.svg";



const Header = () => {
	return (
		<header>
			<div>
				<Link to="/">
					<img src={headerSVG} alt="header" />
				</Link>
				<nav>
					<ul>
						<li><Link to="/user/register">ユーザ登録</Link></li>
						<li><Link to="/user/login">ログイン</Link></li>
						<li><Link to="/user/logout">ログアウト</Link></li>
						<li><Link to="/item/create">アイテム作成</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	);

};

export default Header;
