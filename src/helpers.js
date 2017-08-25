  export const tasks = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];
  export const BACKEND = "https://todobackendapp.herokuapp.com"
  export function formatArrayOfHash(data){
  	let formatedData = data.reduce(function(map, obj){
  		obj["edit"] = false;
  		map[`task${obj.id}`] = obj;
  		return map;
  	}, {})
  	return formatedData;
  }

export const getNumberFromText = (text) => { return text.match(/\d+$/)[0]; }