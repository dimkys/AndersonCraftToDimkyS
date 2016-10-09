var resurse=[
	{
		name: 'Человек'
	},
	{
		name: 'Нож'
	},
	{
		name: 'Меч'
	},
	{
		name: 'Камень'
	},
	{
		name: 'Рак'
	},
	{
		name: 'Веревка'
	}
];
var recipes = [
	{
		input: ['Человек','Нож'],
		output: 'Человек-нож'
	},
	{
		input: ['Человек','Меч'],
		output: 'Человек-Меч'
	},
	{
		input: ['Человек-нож','Человек'],
		output: 'Труп'
	},
	{
		input: ['Меч','Камень'],
		output: 'Ну вот тупой меч'
	},
	{
		input: ['Ну вот тупой меч','Камень'],
		output: 'Тебе было недостаточно тупо?'
	},
	{
		input: ['Труп','Человек'],
		output: 'mmm fresh meat!!!'
	},
	{
		input: ['Рак','Человек'],
		output: 'Dota player'
	},
	{
		input: ['Камень','Человек','Веревка'],
		output: 'Утопленник'
	},
	{
		input: ['Нож','Меч'],
		output: 'Ноже-мечь'
	},
	{
		input: ['Нож','Меч','Труп'],
		output: 'Труп с Ноже-мечем в спине'
	}
	,
	{
		input: ['Ноже-мечь','Ноже-мечь'],
		output: 'Обоюдо острый ноже-меченожмече'
	}
];

function colorReset (r) {
	for(var i=0;i< r.length;i++) {
		r[i].style.backgroundColor = "#000000";
	}
}

var resours=document.getElementById("resources");
resources.ondrop=drop;
resources.ondragover=allowDrop;

var worktop=document.getElementById("worktop");
worktop.ondrop=drop;
worktop.ondragover=allowDrop;
var selectRecipt=document.getElementById("selectRecipt");

document.getElementById('buttonCraft').addEventListener('click', craft);


add_resurs();
function add_resurs()
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
						console.log("da");
						resou[itm].style.backgroundColor="#FF0000";
						}
				}
				for(var itm=0;itm< work.length;itm++) {//убираем подсветку
					if (work[itm].value===recc){
						console.log("da");
						work[itm].style.backgroundColor="#FF0000";
					}
				}
			}
		}
	}
}

function onclick (event) {
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
				var res=document.createElement('input');
				res.type="button";
				res.id+=str;
				res.out=recipes[i].output;
				res.onclick=onclickrecipt;
				res.value=res.id;
				selectRecipt.appendChild(res);
				str='';

			}

		}
	//alert(event.currentTarget.id);
	}
	selectRecipt.style.display="block ";
}

function removeChildren(elem) {
	for (var k = elem.childNodes.length-1; k >=0; k--) {
		try{
		elem.removeChild(elem.childNodes[k]);
		}catch (e){
			console.log(e);
		}
	}
}




function craft() {
	var selectedItems = worktop.querySelectorAll('input');
	if(selectedItems.length) {		
		for (var i = 0 ; i < selectedItems.length; i++) {
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
									var res=document.createElement('input');
									res.type="button";
									res.id+=recipes[a].output;
									res.draggable="true";
									res.ondragstart=drag;
									res.ondrop=drop;
									res.onclick=onclick;
									resources.appendChild(res);
									res.value=res.id;
									resurse+=[recipes[a].output];
									console.log("Добавленно:"+b);

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
		}
	}else{
		alert("Умный что ли, из воздуха крафтим?");
	}
}


function drag(ev) {
	console.log("drag");
	ev.dataTransfer.setData("text", ev.target.id);

}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function allowDrop(ev) {
	console.log("allowDrop");
    ev.preventDefault();
}
