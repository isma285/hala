import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { createDestination } from "../../services/api.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const AdminDestinationForm = () => {
	// id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	// ville VARCHAR (50) NOT NULL,
	// photo VARCHAR (50) NOT NULL,
	// textdescription VARCHAR (500),
	// tendance BOOLEAN NOT NULL
	const { id } = useParams();
	const {
		formState: { errors },
		handleSubmit,
		register,
		watch,
		reset,
	} = useForm();

	const navigate = useNavigate();

	useEffect(() => {
		const observer = watch((values) => console.log(values));
		// const observer = watch((values) => null);

		return () => observer.unsubscribe();
	}, [watch]);

	// soumission du formulaire
	const onSubmit = async (values) => {
		const formData = new FormData();
		formData.append("id", values.id);
		formData.append("ville", values.ville);
		formData.append("photo", values.photo[0]);
		formData.append("textdescription", values.textdescription);
		formData.append("tendance", values.tendance);

		// appel de la route d'API
		const responseAPI = id
			? // ? await updateDestination(formData)
			  console.log("update")
			: await createDestination(formData);

		if (responseAPI.status === 200) {
			window.sessionStorage.setItem(
				"notice",
				id ? "Destination updated" : "Destination created",
			);
		} else {
			window.sessionStorage.setItem("notice", "Error");
		}
		navigate("/admin/destination");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
			<p>
				<label>Ville :</label>
				<input
					type="text"
					{...register("ville", { required: "Ville is required" })}
				/>
				<small>{errors.ville?.message}</small>
			</p>
			<p>
				<label>Photo :</label>
				<input
					type="file"
					{...register("photo", { required: "Photo is required" })}
				/>
				<small>{errors.photo?.message}</small>
			</p>
			<p>
				<label>Description :</label>
				<textarea
					{...register("textdescription", {
						required: "Description is required",
					})}
				/>
				<small>{errors.textdescription?.message}</small>
			</p>
			<p>
				<label>Tendance : </label>
				{[
					{ id: "0", name: "No" },
					{ id: "1", name: "Yes" },
				].map((el) => (
					<label key={uuid()}>
						<input type="radio" {...register("tendance")} value={el.id} />
						{el.name}
					</label>
				))}
				<small>{errors.tendance?.message}</small>
			</p>
			<p>
				<input type="hidden" {...register("id")} />
				<input type="submit" />
			</p>
		</form>
	);
};

export default AdminDestinationForm;

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import {
// 	createDestination,
// 	getClassrooms,
// 	getStudentsByID,
// 	updateStudent,
// } from "../../services/api.js";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const AdminDestinationForm = () => {
// 	// récupérer l'identifiant de l'étudiant à modifier
// 	const { id } = useParams();

// 	const {
// 		formState: { errors },
// 		handleSubmit,
// 		register,
// 		watch,
// 		reset,
// 	} = useForm();

// 	// importer le hook de redirection
// 	const navigate = useNavigate();

// 	// récupérer les classes
// 	const [classrooms, setClassrooms] = useState([]);

// 	useEffect(() => {
// 		const allPromises = Promise.allSettled([getClassrooms()]);

// 		allPromises.then((results) => {
// 			setClassrooms(results[0].value.data);
// 		});

// 		// préremplir le formulaire avec un élève existant
// 		prefillForm();
// 	}, []);

// 	// préremplir le formulaire avec un élève existant
// 	const prefillForm = async () => {
// 		if (id) {
// 			// console.log(id);
// 			const responseAPI = await getStudentsByID(id);
// 			const student = responseAPI.data;
// 			// console.log(student);
// 			reset({
// 				id: student.id,
// 				firstname: student.firstname,
// 				lastname: student.lastname,
// 				age: student.age,
// 				birthday: new Date(student.birthday).toLocaleDateString("en-CA"),
// 				isExternal: `${student.isExternal}`,
// 				classroom_id: student.classroom_id,
// 			});
// 		}
// 	};

// 	// soumission du formulaire
// 	const onSubmit = async (values) => {
// 		// appel de la route d'API
// 		const responseAPI = id
// 			? await updateStudent(values)
// 			: await createDestination(values);

// 		if (responseAPI.status === 200) {
// 			window.sessionStorage.setItem(
// 				"notice",
// 				id ? "Student updated" : "Student created",
// 			);
// 		} else {
// 			window.sessionStorage.setItem("notice", "Error");
// 		}
// 		navigate("/admin/students");
// 	};

// 	// observateur de la saisie
// 	useEffect(() => {
// 		const observer = watch((values) => console.log(values));
// 		// const observer = watch((values) => null);

// 		return () => observer.unsubscribe();
// 	}, [watch]);

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit(onSubmit)}>
// 				<p>
// 					<label>Firstname : </label>
// 					{/* utiliser les noms des colonnes sql pour le nom des champs */}
// <input
// 	type="text"
// 	{...register("firstname", { required: "Firstname is required" })}
// />
// 					{/* errors.<nom du champ défini dans register>.message */}
// 					<small>{errors.firstname?.message}</small>
// 				</p>
// 				<p>
// 					<label>Lastname : </label>
// 					<input
// 						type="text"
// 						{...register("lastname", { required: "Lastname is required" })}
// 					/>
// 					<small>{errors.lastname?.message}</small>
// 				</p>
// 				<p>
// 					<label>Age : </label>
// 					<input
// 						type="number"
// 						{...register("age", { required: "Age is required" })}
// 					/>
// 					<small>{errors.age?.message}</small>
// 				</p>
// 				<p>
// 					<label>Birthday : </label>
// 					<input
// 						type="date"
// 						{...register("birthday", { required: "Birthday is required" })}
// 					/>
// 					<small>{errors.birthday?.message}</small>
// 				</p>
// 				<p>
// 					<label>Is external : </label>
// 					{[
// 						{ id: "0", name: "No" },
// 						{ id: "1", name: "Yes" },
// 					].map((el) => (
// 						<label key={crypto.randomUUID()}>
// 							<input type="radio" {...register("isExternal")} value={el.id} />
// 							{el.name}
// 						</label>
// 					))}
// 					<small>{errors.isExternal?.message}</small>
// 				</p>
// 				<p>
// 					<select
// 						{...register("classroom_id", { required: "Classroom is required" })}
// 						value={watch().classroom_id}
// 					>
// 						<option value=""> </option>
// 						{classrooms.map((el) => (
// 							<option key={crypto.randomUUID()} value={el.id}>
// 								{el.name}
// 							</option>
// 						))}
// 					</select>
// 					<small>{errors.classroom_id?.message}</small>
// 				</p>
// 				<p>
// 					<input type="hidden" {...register("id")} />
// 					<input type="submit" />
// 				</p>
// 			</form>
// 			<p>
// 				<Link to={"/admin/students"}>Back</Link>
// 			</p>
// 		</>
// 	);
// };

// export default AdminDestinationForm;
