const getDestinations = async () => {
	// configurer la requête HTTP
	const requestInfos = new Request("http://localhost:3000/destination", {
		method: "get",
	});

	// exucuter la requete HTTP
	const request = await fetch(requestInfos);

	// recupere la requete HTTP
	const response = await request.json();

	// renvoyer la reponse
	return response;
};

const getAllDestinations = async () => {
	// configurer la requête HTTP
	const requestInfos = new Request("http://localhost:3000/destination/all", {
		method: "get",
	});

	// exucuter la requete HTTP
	const request = await fetch(requestInfos);

	// recupere la requete HTTP
	const response = await request.json();

	// renvoyer la reponse
	return response;
};
const getOffresByDestinations = async (id) => {
	// configurer la requête HTTP
	const requestInfos = new Request(
		`http://localhost:3000/offres/destination/${id}`,
		{
			method: "get",
		},
	);

	// exucuter la requete HTTP
	const request = await fetch(requestInfos);

	// recupere la requete HTTP
	const response = await request.json();

	// renvoyer la reponse
	return response;
};

const createUser = async (values) => {
	const requestInfos = new Request("http://localhost:3000/client/register", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

const createDestination = async (values) => {
	console.log(values);
	const requestInfos = new Request("http://localhost:3000/destination/create", {
		method: "post",
		// headers: {
		// 	"Content-Type": "application/json",
		// },
		// body: JSON.stringify(values),
		body: values,
	});
	console.log(requestInfos);
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

const checkClient = async (values) => {
	const requestInfos = new Request("http://localhost:3000/client/login", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(values),
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

const updateDestination = async (values) => {
	const requestInfos = new Request("http://localhost:3000/destination/update", {
		method: "put",
		// headers: {
		// 	"Content-Type": "application/json",
		// },
		// body: JSON.stringify(values),
		body: values,
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

const deleteDestination = async (id) => {
	const requestInfos = new Request(`http://localhost:3000/destination/delete/${id}`, {
		method: "delete",
	});
	const request = await fetch(requestInfos);
	const response = await request.json();
	return response;
};

export {
	getDestinations,
	checkClient,
	createUser,
	getOffresByDestinations,
	createDestination,
	getAllDestinations,
	deleteDestination,
	updateDestination,
};
