export const virtualTableStateSvelte = $state({
	columns: [],
	buildCols
})


export function getTableStateByKey(key){
	if(!virtualTableStateSvelte[key]) throw new Error("err")
	return virtualTableStateSvelte[key]
}
function buildCols(data){
	let keys = Object.keys(data[0]);
	virtualTableStateSvelte.columns = keys.map((item,index) => (({
		index,
		name:item,
		hidden:false,
		frozen:index === 0,
		width: "auto"
	})))

}