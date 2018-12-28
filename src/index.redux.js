export function counter(state=0, action){
	switch(action.type){
		case '加':
			return state + 1
		case '减':
			return state - 1
		default:
			return 10
	}
}

export function add(){
	return {type: '加'} 
}

export function minus(){
	return {type: '减'}
}

export function AsyncAdd(){
	return dispatch=>{
		setTimeout(()=>{
			dispatch(add())
		}, 1000)
	}
}

