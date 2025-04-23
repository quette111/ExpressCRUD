const synchHandle = async (func) => {
try{

await func

}catch(error){

console.error(`Error: `, error)
}
}

module.exports = {synchHandle}