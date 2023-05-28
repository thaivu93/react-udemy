import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchImages }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();
		searchImages(searchTerm);
		setSearchTerm("");
	};

	const handleChange = (evt) => {
		setSearchTerm(evt.target.value);
	};

	return (
		<div className="search-bar">
			<form
				action=""
				onSubmit={handleFormSubmit}
			>
				<label htmlFor="">Enter Search Term</label>
				<input
					type="text"
					onChange={handleChange}
					value={searchTerm}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
