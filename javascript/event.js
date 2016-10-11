resources.ondrop=drop;
resources.ondragover=allowDrop;
worktop.ondrop=drop;
worktop.ondragover=allowDrop;

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.attributes.id.value==='resources'||ev.target.attributes.id.value==='worktop')
    {
        ev.target.appendChild(document.getElementById(data));
    }
}
function allowDrop(ev) {
    ev.preventDefault();
}
/**
 * Created by DimkySik on 11.10.2016.
 */
