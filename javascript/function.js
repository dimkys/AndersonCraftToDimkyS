function colorReset (r) {
    for(var i=0;i< r.length;i++) {
        r[i].style.backgroundColor = "#000000";
    }
};

function removeChildren(elem) {
    for (var k = elem.childNodes.length-1; k >=0; k--) {
        try{
            elem.removeChild(elem.childNodes[k]);
        }catch (e){
            console.log(e);
        }
    }
};

function equalsArr(arr, arr2){

    if(arr.length != arr2.length) return false
    var on = 0;
    for( var i = 0; i < arr.length; i++ ){
        for( var j = 0; j < arr2.length; j++ ){
            if(arr[i] === arr2[j]){
                console.log(arr[i]+"  "+arr2[j]);

                on++;
                break;
            }
        }
    }
    //console.log(on+"  "+arr.length);
    if(on==arr.length){
         return true;
    }else{
         return false;
    }
};

function add_resurs(id,draggable,ondragstart,onClickEvFun,output)
{
        var res=document.createElement('input');
        res.type="button";
        res.id=id;
        res.draggable=draggable;
        res.ondragstart=ondragstart;
        res.ondrop=drop;
        res.onclick=onClickEvFun;
        res.value=res.id;
        res.out=output;
        return res;
};

function getArraySelectResurs(SelectItm)
{
    var arr=[];
    for(var i=0;i<SelectItm.length;i++){
        arr.push(SelectItm[i].value)
    }
    return arr;
};
