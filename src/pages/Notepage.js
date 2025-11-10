import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import notes from "../assets/data";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import API_URL from "../config";

const NotePage = () => {
	let { id } = useParams();
	let navigate = useNavigate();
	let [note, setNote] = useState(null);

	useEffect(() => {
		if (id === "new") {
			setNote({ body: "" });
			return;
		}

		let getNote = async () => {
			let res = await fetch(`${API_URL}/notes/${id}`);
			let data = await res.json();
			setNote(data);
		};
		getNote();
	}, [id]);

	let createNote = async () => {
		try {
			const response = await fetch(`${API_URL}/notes`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...note, updated: new Date() }),
			});
			if (!response.ok) {
				throw new Error("Failed to create note");
			}
			return await response.json();
		} catch (error) {
			console.error("Error creating note:", error);
			throw error;
		}
	};

	let updateNote = async () => {
		try {
			const response = await fetch(`${API_URL}/notes/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...note, updated: new Date() }),
			});
			if (!response.ok) {
				throw new Error("Failed to update note");
			}
			return await response.json();
		} catch (error) {
			console.error("Error updating note:", error);
			throw error;
		}
	};

	let deleteNote = async () => {
		await fetch(`${API_URL}/notes/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
		navigate("/");
	};

	let handleSubmit = async () => {
		try {
			if (id !== "new" && !note?.body?.trim()) {
				await deleteNote();
			} else if (id !== "new") {
				await updateNote();
				navigate("/");
			} else if (id === "new") {
				// Create note even if body is empty (allow empty notes)
				if (note?.body?.trim() || note?.body === "") {
					await createNote();
				}
				navigate("/");
			} else {
				navigate("/");
			}
		} catch (error) {
			console.error("Error in handleSubmit:", error);
			alert("Failed to save note. Please check console for details.");
		}
	};

	return (
		<div className="note">
			<div className="note-header">
				<h3>
					<Link to="/">
						<ArrowLeft onClick={handleSubmit} />
					</Link>
				</h3>
				{id !== "new" ? (
					<button onClick={deleteNote}>Delete</button>
				) : (
					<button onClick={handleSubmit}>Done</button>
				)}
			</div>
			<textarea
				onChange={(e) => {
					setNote({ ...(note || {}), body: e.target.value });
				}}
				value={note?.body || ""}></textarea>
		</div>
	);
};

export default NotePage;
