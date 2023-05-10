import {useEffect, useState} from "react";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function MUtiPreviewImage() {
	const [imageFiles, setImageFiles] = useState([]);
	const [images, setImages] = useState([]);

	const changeHandler = (e) => {
		const {files} = e.target;
		const validImageFiles = [];
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (file.type.match(imageTypeRegex)) {
				validImageFiles.push(file);
			}
		}
		if (validImageFiles.length) {
			setImageFiles(validImageFiles);
			return;
		}
		alert("Selected images are not of valid type!");
	};

	useEffect(() => {
		const images = [],
			fileReaders = [];
		let isCancel = false;
		if (imageFiles.length) {
			imageFiles.forEach((file) => {
				const fileReader = new FileReader();
				fileReaders.push(fileReader);
				fileReader.onload = (e) => {
					const {result} = e.target;
					if (result) {
						images.push(result);
					}
					if (images.length === imageFiles.length && !isCancel) {
						setImages(images);
					}
				};
				fileReader.readAsDataURL(file);
			});
		}
		return () => {
			isCancel = true;
			fileReaders.forEach((fileReader) => {
				if (fileReader.readyState === 1) {
					fileReader.abort();
				}
			});
		};
	}, [imageFiles]);
	return (
		<div className="MUtiPreviewImage">
			<form>
				<p>
					<label htmlFor="file">Upload images</label>
					<input
						type="file"
						id="file"
						onChange={changeHandler}
						accept="image/png, image/jpg, image/jpeg"
						multiple
					/>
				</p>
			</form>
			{images.length > 0 ? (
				<div>
					{images.map((image, idx) => {
						return (
							<p key={idx}>
								{" "}
								<img src={image} alt="" />{" "}
							</p>
						);
					})}
				</div>
			) : null}
		</div>
	);
}

export default MUtiPreviewImage;
