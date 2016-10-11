
var Resurse=(function () {
    var _resurse =[
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
    function getResurse(ind){
        if(ind){
            return _resurse[ind];
        }else{
            return _resurse;
        }
    };

    function setResurse(resurse,ind){
        if(ind){
            this._resurse[ind]=resurse[ind];
        }else{
            this._resurse=resurse;
        }
    };
    return{
        getResurse:getResurse,
        setResurse:setResurse
    }
})();



