resources.ondrop=drop;
resources.ondragover=allowDrop;
worktop.ondrop=drop;
worktop.ondragover=allowDrop;
buttonCraft.ondragover=allowDrop;
buttonCraft.ondrop=drop;
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem=document.getElementById(data);
    if(ev.target.attributes.id.value==='resources'||ev.target.attributes.id.value==='worktop')
    {
        ev.target.appendChild(elem);
    }else{
        if(ev.target.attributes.id.value==='buttonCraft'&& elem.id>5){
            ev.target.appendChild(elem);
            removeChildren(ev.target)    ;
        }
    }
}
function allowDrop(ev) {
    ev.preventDefault();
}
/**
 * Created by DimkySik on 11.10.2016.
 */
