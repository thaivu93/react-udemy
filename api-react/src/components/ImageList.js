import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
	const renderedImages = images.map((image) => {
		return (
			<ImageShow
				image={image}
				key={image.id} //important to make adjustment to items in map list
			/>
		);
	});

	return <div className="image-list">{renderedImages}</div>;
};
export default ImageList;
