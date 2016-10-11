
var Recipes=(function () {
    var _recipes = [
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
        },
        {
            input: ['Воздух','Человек'],
            output: 'Свист'
        },
        {
            input: ['Воздух','Камень'],
            output: 'Надутый камень?'
        },
        {
            input: ['Надутый камень?','Нож'],
            output: 'Пробитый надутый камень?'
        },
        {
            input: ['Надутый камень?','Меч'],
            output: 'Пробитый надутый камень?'
        },
        {
            input: ['Надутый камень?','Веревка'],
            output: 'Воздушный камешек'
        },
        {
            input: ['Воздушный камешек','Человек'],
            output: 'Человек с воздушным камешком'
        },
        {
            input: ['Рак','Гора'],
            output: 'Рак на горе'
        },
        {
            input: ['Камень','Камень'],
            output: 'Пара камней'
        },
        {
            input: ['Рак на горе','Свист'],
            output: 'Рак на горе свистнул'
        },
        {
            input: ['Пара камней','Пара камней'],
            output: 'Две пары камней'
        },
        {
            input: ['Две пары камней','Две пары камней'],
            output: 'Много камней'
        },
        {
            input: ['Много камней','Много камней'],
            output: 'Гора камней'
        },
        {
            input: ['Гора камней','Гора камней'],
            output: 'Гора'
        }
    ];
    function getRecipt(ind){
        if(ind){
            return _recipes[ind];
        }else{
            return _recipes;
        }
    };

    function setRecipt(recipes,ind){
        if(ind){
            this._recipes[ind]=_recipes[ind];
        }else{
            this._recipes=recipes;
        }
    };
    function getRecipeString (value) {
        var outputRecipes = [];
        for (var i = 0; i < _recipes.length; i++) {
            var index = _recipes[i].input.indexOf(value);
            if ( index >= 0 ) {	// собираем пачку рецептов, где упоминается переданный ингредиент
                outputRecipes.push( [_recipes[i].input.join(' + ') + ' = ' + _recipes[i].output,_recipes[i].output]);
            }
        }
        return outputRecipes;
    }

    return{
        getRecipt:getRecipt,
        setRecipt:setRecipt,
        getRecipeString:getRecipeString
    }
})();