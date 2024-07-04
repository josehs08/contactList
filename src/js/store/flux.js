const getState = ({ getStore, getActions, setStore }) => {

	const URLBASE = "https://playground.4geeks.com/contact"
	return {
		store: {
			contacts:[{}]
		},
		actions: {
			getAgenda: async ()=>{
				try{
					const response = await fetch(`${URLBASE}/agendas`);
					const data = await response.json();
					if(response.ok){
						console.log(data);
					}
				}
				catch(error){
					console.log(error)
				}
			}
		}
	};
};

export default getState;
