function openInput (evt, tabname)
{
    //declare all variables
    var i, tabcontent, tablinks;


    //Get all elements with class="tabcontent" and hide them

    tabcontent=document.getElementsByClassName("tabcontant");
    for(i=0; i<tabcontent.length;i++)
    {
    tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablinks");
    for(i=0;i<tabcontent.length;i++)
    {
    tablinks[i].className=tablinks[i].ClassName.replace(" active", "");
    }
    document.getElementById(tabname).style.display="block";
    evt.currentTarget.ClassName+="active";


}
document.getElementById("defaultOpen").click;