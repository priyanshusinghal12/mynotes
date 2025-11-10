import notesIcon from "../assets/notes-icon.png";

const Header = () => {
	return (
		<div className="app-header">
			<div className="header-title-wrapper">
				<img src={notesIcon} alt="Notes icon" className="notes-icon" />
				<h1> Notes List</h1>
			</div>
		</div>
	);
};

export default Header;
