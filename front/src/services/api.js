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

export default getDestinations;
