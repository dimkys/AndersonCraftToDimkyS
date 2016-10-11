var divRresours=document.getElementById("resources");
var divWorktop=document.getElementById("worktop");
var divSelectRecipt=document.getElementById("selectRecipt");

divRresours.addEventListener('click', onclick);
divWorktop.addEventListener('click', onclick);
divSelectRecipt.addEventListener('click', onclickrecipt);

var idRes=0;
var b=0;
var resurse=Resurse.getResurse();
var recipes=Recipes.getRecipt();
document.getElementById('buttonCraft').addEventListener('click', craft);

add_resurses();
function add_resurses()
{
	while(resurse.length>b)
	{
		var res=document.createElement('input');
		res.type="button";
		res.id=idRes++;
		res.draggable="true";
		res.ondragstart=drag;
		res.ondrop=drop;
		divRresours.appendChild(res);
		res.value=resurse[b].name;
		b++;
	}
    return console.log("Добавленно:"+b+" Элементов");
}
function onclickrecipt(event) {
	var querySelResou = divRresours.querySelectorAll('input');
	var querySelWork= divWorktop.querySelectorAll('input');

	if(event.target.nodeName!=="INPUT"){return;}
	colorReset(querySelResou);
	colorReset(querySelWork);
	for (var i = 0 ; i < recipes.length; i++)//роемся в рецептах
	{

		if(recipes[i].output===event.target.out)//нашли рецепт которые доет нужный обьект
		{

			for (var recInp= 0 ; recInp < recipes[i].input.length; recInp++)//роемся в ингредиентах для данног рецепта
			{
				var recc=recipes[i].input[recInp];
				for(var itm=0;itm< querySelResou.length;itm++) {//добавляем подсвет
					if (querySelResou[itm].value===recc){
						querySelResou[itm].style.backgroundColor="#FF0000";
						}
				}
				for(var itm=0;itm< querySelWork.length;itm++) {//добавляем подсвет
					if (querySelWork[itm].value===recc){
						querySelWork[itm].style.backgroundColor="#FF0000";
					}
				}
			}
		}
	}
};

function craft() {
	var querySelWork= divWorktop.querySelectorAll('input');
	var arrSI=getArraySelectResurs(querySelWork);
	var ValidRecipt=[];
	var selItemLeng=querySelWork.length;

	if(selItemLeng) {
	    if(selItemLeng==1){
	        if(confirm("Клонировать предмет?"))
            {
				divRresours.appendChild(add_resurs(querySelWork[0].value,true,drag));
                ResetChildrenNoDel(divWorktop,divRresours);
            }
	    }
		for(var recP=0;recP<recipes.length;recP++) {//выбираем рецепты где колличество рессурсов равно тому что положили
			if(selItemLeng==recipes[recP].input.length){
				ValidRecipt.push(recipes[recP]);
			}
		}
		for(var ValRecP=0;ValRecP<ValidRecipt.length;ValRecP++) {//поиск нужного рецепта
				if(equalsArr(ValidRecipt[ValRecP].input,arrSI)){
					resurse+=[ValidRecipt[ValRecP].output];

					divRresours.appendChild(add_resurs(ValidRecipt[ValRecP].output,true,drag));//добовляем новый элемент/рессурс

					divSelectRecipt.style.display="none";
					colorReset(divRresours);//убираем подсветку
					colorReset(divWorktop);//убираем подсветку
                    ResetChildrenAndDel(divWorktop,divRresours);
					return;
				}
		}
		/*for (var i = 0 ; i < selectedItems.length; i++) {
				for(var a=0;a<recipes.length;a++)
				{
					var sum=0;
					if(selectedItems.length==recipes[a].input.length){
						
					 	for(var b=0;b<recipes[a].input.length;b++)
						{
							if(recipes[a].input[b]===selectedItems[b].id)
							{
								sum+=1;
								if(sum==selectedItems.length)
								{
									console.log("Скрафтил");
									resurse+=[recipes[a].output];
									resources.appendChild(add_resurs(recipes[a].output,true,drag,onclick));//добовляем новый элемент/рессурс
									selectRecipt.style.display="none";
									colorReset(resours.querySelectorAll('input'));//убираем подсветку
									colorReset(selectedItems);//убираем подсветку
									return;
								}else{
								}
							}
						}
					 }else{
					 }
				}
		}*/
	}else{
        if(confirm("Умный что ли, из воздуха создавать?"))
        {
			divRresours.appendChild(add_resurs("Воздух",true,drag));
            colorReset(divRresours);//убираем подсветку
            colorReset(divWorktop);//убираем подсветку
            divSelectRecipt.style.display="none";
        }
	}
};






function onclick (event) {//вывод рецептов для выбранного элемента
	if(event.target.nodeName!=="INPUT"){return;}
	removeChildren(divSelectRecipt);
	var str=Recipes.getRecipeString(event.target.value);
	for(var i=0;i<str.length;i++)
	{
		divSelectRecipt.appendChild(add_resurs(str[i][0],false,undefined,str[i][1]));
	}//добовляем новый рецепт в подсказку
	divSelectRecipt.style.display="block ";
};
