var student01 = {
    name:"li",
    grade:"大三",
    id:"1603255",
    "class":"计算机1班",
    "house":"17#104",
    total: 70
}

var student02 = {
    name:"zhao",
    grade:"大三",
    id:"1603277",
    "class":"计算机2班",
    "house":"17#105",
    total: 80
}

var student03 = {
    name:"zhang",
    grade:"大三",
    id:"1603266",
    "class":"计算机3班",
    "house":"17#105",
    total: 88
}
var arrayTemp = [student01,student02,student03]

for(i=0;i<arrayTemp.length-1;i++){
    var maxName;
    var maxId;
if(arrayTemp[i].total>arrayTemp[i+1].total)
{
    maxName=arrayTemp[i].name;
    maxId=arrayTemp[i].id;
}else {
    maxName=arrayTemp[i+1].name;
    maxId=arrayTemp[i+1].id;
    }
}
console.info("ID:"+maxId,"姓名:"+maxName);
// 1.对象的属性，也可以是对象 2.对象的属性，也可以是函数（方法）