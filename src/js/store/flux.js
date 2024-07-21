const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			urlbase : "https://playground.4geeks.com/contact/agendas",
			contacts:[]
		},
		actions: {

			editContact: async (newContact, id)=>{
				try{
					const response = await fetch(`${getStore().urlbase}/joseh/contacts/${id}`,{
						method: 'PUT',
						headers: {'Content-Type': 'application/json'},
						body:JSON.stringify(newContact)
						
					})
					if(response.ok){
						getActions().getAgenda();
						return true;
					}

				}catch(error){
					console.log(error)
				}
			},

			addContact: (newContact) => {
				setStore({contacts: [newContact]});
			},

			crearAgenda: async () => {
				try{
					const response = await fetch(`${getStore().urlbase}/joseh`, {
						method: 'POST'
					})
					if(response.ok){
						return true;
					} else {
						return false;
					}
				}
				catch(error){
					console.log(error);
				}
			},

			postAgenda: async (contacts)=>{
				try{
					const response = await fetch(`${getStore().urlbase}/joseh/contacts`, {
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body:JSON.stringify(contacts)
					})
					if(response.ok){
						getActions().getAgenda();
					}
				} 
				catch (error){
					console.log(error);
				}
			},

			getAgenda: async ()=>{
				try{
					const response = await fetch(`${getStore().urlbase}/joseh`);
					const data = await response.json();
					if(response.ok){
						setStore({contacts: data.contacts})
						return(data.contacts)
					} else {
						getActions().crearAgenda();
					}
				}
				catch(error){
					console.log(error);
				}
			},
			
			deleteContact: async (id) => {
				try{
					const response = await fetch(`${getStore().urlbase}/joseh/contacts/${id}`, {
                        method: 'DELETE'
                    })
                    if(response.ok){
                        getActions().getAgenda();
                    } else {
						return false;
					}
				}
				catch(error){
					console.log(error);
				}

			}

		}
	};
};

export default getState;
