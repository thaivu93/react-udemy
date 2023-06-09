import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
	const [images, setImages] = useState([]);

	const handleSubmit = async (term) => {
		const result = await searchImages(term);
		setImages(result);
	};
	return (
		<div>
			<SearchBar searchImages={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
};

export default App;
