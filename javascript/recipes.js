function Resurse() {
    var resurse = [
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
    return resurse;
}

global.Resurse=Resurse;