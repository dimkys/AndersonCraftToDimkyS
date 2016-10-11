var resours=document.getElementById("resources");
var worktop=document.getElementById("worktop");
var selectRecipt=document.getElementById("selectRecipt");
document.getElementById('buttonCraft').addEventListener('click', craft);

add_resurses();
function add_resurses()
{
	var b=0;
	while(resurse.length>b)
	{
		var res=document.createElement('input');
		res.type="button";
		res.id=resurse[b].name;
		res.draggable="true";
		res.ondragstart=drag;
		res.ondrop=drop;
		res.onclick=onclick;
		resources.appendChild(res);
		res.value=res.id;
		console.log("Добавленно:"+b);
		b++;
	}
}
function onclickrecipt(event) {

	var resou = resours.querySelectorAll('input');
	colorReset(resou);
	var work= worktop.querySelectorAll('input');
	colorReset(work);
	for (var i = 0 ; i < recipes.length; i++)//роемся в рецептах
	{
		if(recipes[i].output===event.currentTarget.out)//нашли рецепт которые доет нужный обьект
		{
			for (var recInp= 0 ; recInp < recipes[i].input.length; recInp++)//роемся в ингредиентах для данног рецепта
			{
				var recc=recipes[i].input[recInp];
				for(var itm=0;itm< resou.length;itm++) {//убираем подсветку
					if (resou[itm].value===recc){
						resou[itm].style.backgroundColor="#FF0000";
						}
				}
				for(var itm=0;itm< work.length;itm++) {//убираем подсветку
					if (work[itm].value===recc){
						work[itm].style.backgroundColor="#FF0000";
					}
				}
			}
		}
	}
};

function craft() {
	var selectedItems = worktop.querySelectorAll('input');
	var arrSI=getArraySelectResurs(selectedItems);
	var ValidRecipt=[];
	var selItemLeng=selectedItems.length;
	if(selItemLeng) {
		for(var recP=0;recP<recipes.length;recP++) {//выбираем рецепты где колличество рессурсов равно тому что положили
			if(selItemLeng==recipes[recP].input.length){
				ValidRecipt.push(recipes[recP]);
			}
		}
		for(var ValRecP=0;ValRecP<ValidRecipt.length;ValRecP++) {//поиск нужного рецепта
				if(equalsArr(ValidRecipt[ValRecP].input,arrSI)){
					resurse+=[recipes[ValRecP].output];
					resources.appendChild(add_resurs(recipes[ValRecP].output,true,drag,onclick));//добовляем новый элемент/рессурс
					selectRecipt.style.display="none";
					colorReset(resours.querySelectorAll('input'));//убираем подсветку
					colorReset(selectedItems);//убираем подсветку
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
		alert("Умный что ли, из воздуха крафтим?");
	}
};






function onclick (event) {//вывод рецептов для выбранного элемента
	removeChildren(selectRecipt);
	var str="";
	for (var i = 0 ; i < recipes.length; i++)
	{
		for (var j = 0 ; j < recipes[i].input.length; j++)
		{
			if(recipes[i].input[j]===event.currentTarget.id){
				for (var k = 0 ; k < recipes[i].input.length;k++)
				{
					if(k==recipes[i].input.length-1) {
						str += recipes[i].input[k]+"=";
					}else{
						str += recipes[i].input[k] + "+";
					}
				}
				str+=recipes[i].output+"";
				selectRecipt.appendChild(add_resurs(str,false,undefined,onclickrecipt,recipes[i].output));//добовляем новый рецепт в подсказку
				str='';
				break;
			}
		}
	}
	selectRecipt.style.display="block ";
};
