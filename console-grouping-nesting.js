
function updateStock(item , newQuantity){
	item.quantity+= newQuantity;
    console.group("updateStock()");
	console.log("%c STOCK UPDATE" , 'font-size: 24px;background: red; color: white;');
	console.groupCollapsed("Details");


        console.count("updated stock:" + item.name + " by quantity: " + newQuantity);
        if(item.quantity < 0){
            console.error("Item quantity can not be smaller than 0");
        }
        if(item.quantity > 0){
            console.info("Item's stock is > 0");
        }
        if(item.quantity === 0){
            console.warn("Item's stock is 0");
        }

	console.groupEnd();
	console.groupEnd();
	

};

var items = [
    {name:"Item1", quantity : 0},
    {name:"Item2", quantity : 0},
    {name:"Item3", quantity : 0},
    {name:"Item4", quantity : 0},
    {name:"Item5", quantity : 0},

];

updateStock(items[0],0);
updateStock(items[0],10);
updateStock(items[0],-20);
