//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = '<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+ pURL +'"><img src="'+img[0].src+'" title="'+ removeHtmlTag(div.innerHTML,summ) + '"/></a></span>';
summ = posts_thumb_sum;
}

else {
imgtag = '<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+ pURL +'" title="'+ pTITLE+'"><img src="https://3.bp.blogspot.com/-v5j1NydwENs/VTTH9fkxEcI/AAAAAAAAAk8/hjV_9fneW7o/s1600/seocips-griddroid.png" style="margin-top: -30px;" /></a></span>';
summ = posts_thumb_sum;
}


var summary = imgtag + '<a href="'+ pURL +'"><div class="post-summary-text">' + removeHtmlTag(div.innerHTML,summ) + '</div></a>';
div.innerHTML = summary;
}

//]]>
