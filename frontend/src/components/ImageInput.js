import React,{ useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase";
import "./addproduct.css"
 

const ImageInput = ({ name, value, type, handleInputState, ...rest }) => {
	const inputRef = useRef();
	const [progress, setProgress] = useState(0);
	const [progressShow, setProgressShow] = useState(false);

	const handleUpload = () => {
		setProgressShow(true);
		const fileName = new Date().getTime() + value.name;
		const storageRef = ref(
			storage,
			`/images/${fileName}`
		);
		const uploadTask = uploadBytesResumable(storageRef, value);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploaded = Math.floor(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(uploaded);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					handleInputState(name, url);
				});
			}
		);
	};

	return (
		<div className="contain">
          
            <label><b>Select an image</b></label><br></br>
			<input
				type="file"
				ref={inputRef}
				onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
				vlaue={value}
				className="inputimage"

			/>
			
			{type === "image" && value && (
				<img
					src={typeof value === "string" ? value : URL.createObjectURL(value)}
					alt="file"
					className="preview_img"
				/>
			)}
			
			{value !== null && !progressShow && typeof value !== "string" && (
				<button onClick={handleUpload} className="button">
					Upload
				</button>
			)}
			
		</div>
	);
};

export default ImageInput;