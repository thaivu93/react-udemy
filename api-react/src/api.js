import axios from "axios";

const AccessKey = "tLJbj7IfxmulGg720fsXFrUeCfYZKVQNIWVGniOE3kw";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: `Client-ID ${AccessKey}`,
		},
		params: {
			query: term,
		},
	});
	return response.data.results;
};

export default searchImages;
