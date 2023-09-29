const getDestinations = async () => {
	// configurer la requête HTTP
	const requestInfos = new Request("http://localhost:3000/destinations", {
		method: "get",
	});

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

const checkUser = async (values) => {
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


const getOffresByDestinations = async (id) => {
	// configurer la requête HTTP
	const requestInfos = new Request(`http://localhost:3000/offres/destination/${id}`, {
		method: "get",
	});

	// exucuter la requete HTTP
	const request = await fetch(requestInfos);

	// recupere la requete HTTP
	const response = await request.json();

	// renvoyer la reponse
	return response;
};


export {getDestinations, checkUser, createUser, getOffresByDestinations};
