
export function getRedirectPath({type, avatar}){
	let url = (type === 'hunter')?'/hunter':'/recruiter'
	if(!avatar){
		url += 'info'
	}
	return url
}

export function getChatID(userID, targetID){
	return [userID, targetID].sort().join('_')
}