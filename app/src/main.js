var dataArr  = [],
    colorArr  = [],
    objectArr = [],
    chartName = document.getElementById("name"),
    btn =  document.getElementById("btn"),
    add =  document.getElementById("add"),
    rm =  document.getElementById("rm"),
    myChart = document.querySelector(".myChart"),
    setContainer = document.getElementById("setContainer"),
    type = document.getElementById("type"),
    setChart = document.querySelector(".setChart"), 
    dataSet =  document.querySelector(".dataSet"),
    colorSet =  document.querySelector(".colorSet"),
    objectSet =  document.querySelector(".objectSet"),
    chartContainer = document.querySelector(".chartContainer"),
    canvasContext = myChart.getContext("2d"); 

add.onclick = function(){
    setContainer.appendChild(setChart.cloneNode(true));
};
//---

rm.onclick = function(){
    setContainer.lastChild.remove();
};
//---

btn.onclick =  function(){
        let i;
        if(isNaN(dataSet.value)){
            return alert("data  only number");
        }else{    
            for(i=0;i<setContainer.children.length;i++){  
                objectArr.push(setContainer.children[i].children[0].value);
                dataArr.push(setContainer.children[i].children[1].value);
                colorArr.push(setContainer.children[i].children[2].value);
            }    
        }
    var myStatistic  = new Chart(canvasContext,{ 
        type : type.value, 
        data : { 
            labels: objectArr, 
            datasets: [{
                label: chartName.value, 
                backgroundColor: colorArr, 
                data: dataArr,  
            }]
        },
        option : { 
            responsive : true,
            maintainAspectRatio : true
        }
    }); 
};   