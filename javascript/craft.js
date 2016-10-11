var resours=document.getElementById("resources");
var worktop=document.getElementById("worktop");
var selectRecipt=document.getElementById("selectRecipt");
var idRes=0;
var b=0;
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
		res.onclick=onclick;
		resources.appendChild(res);
		res.value=resurse[b].name;
		b++;
	}
    return console.log("Добавленно:"+b+" Элементов");
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
				for(var itm=0;itm< resou.length;itm++) {//добавляем подсвет
					if (resou[itm].value===recc){
						resou[itm].style.backgroundColor="#FF0000";
						}
				}
				for(var itm=0;itm< work.length;itm++) {//добавляем подсвет
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
	    if(selItemLeng==1){
	        if(confirm("Клонировать предмет?"))
            {
                resources.appendChild(add_resurs(selectedItems[0].value,true,drag,onclick));
                ResetChildrenNoDel(worktop,resours);

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

					resources.appendChild(add_resurs(ValidRecipt[ValRecP].output,true,drag,onclick));//добовляем новый элемент/рессурс

					selectRecipt.style.display="none";
					colorReset(resours.querySelectorAll('input'));//убираем подсветку
					colorReset(selectedItems);//убираем подсветку
                    ResetChildrenAndDel(worktop,resours);
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
            resources.appendChild(add_resurs("Воздух",true,drag,onclick));
            colorReset(resours.querySelectorAll('input'));//убираем подсветку
            colorReset(selectedItems);//убираем подсветку
            selectRecipt.style.display="none";
        }
	}
};






function onclick (event) {//вывод рецептов для выбранного элемента
	removeChildren(selectRecipt);
	var str="";
	for (var i = 0 ; i < recipes.length; i++)
	{
		for (var j = 0 ; j < recipes[i].input.length; j++)
		{
			if(recipes[i].input[j]===event.currentTarget.value){
				for (var k = 0 ; k < recipes[i].input.length;k++)
				{
					if(k==recipes[i].input.length-1) {
						str += recipes[i].input[k]+"=";
					}else{
						str += recipes[i].input[k] + "+";
					}
				}
				str+=recipes[i].output+"";
				selectRecipt.appendChild(
				    add_resurs(str,false,undefined,onclickrecipt,recipes[i].output));//добовляем новый рецепт в подсказку
				str='';
                selectRecipt.style.display="block ";
				break;
			}
		}
	}

};
