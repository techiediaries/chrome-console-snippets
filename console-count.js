
function updateStock(item , newQuantity){
	item.quantity+= newQuantity;
	console.log("%c STOCK UPDATE" , 'font-size: 24px;background: red; color: white;');
	console.count("updated stock:" + item.name + " by quantity: " + newQuantity);
};

var items = [
    {name:"Item1", quantity : 0},
    {name:"Item2", quantity : 0},
    {name:"Item3", quantity : 0},
    {name:"Item4", quantity : 0},
    {name:"Item5", quantity : 0},

];

for( var i = 0; i < items.length; i++){

	updateStock(items[i] , 10);
}
