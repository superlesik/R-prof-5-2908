import update from 'react-addons-update';

const storeMsg = {
	chats: [
		{
			id: '1',
			title: 'lorem'
		},
		{
			id: '2',
			title: 'dolor'
		},
		{
			id: '3',
			title: 'ipsum'
		},
	]
}

export default (store = storeMsg, action) => {
	switch(action.type) {
		
		default:
			return store;
	}
}