function createStackedLineChart(ctx, dataList) {
    var time_min = dataList[0];
    var titleA = dataList[1];
    var dataList = dataList.slice(1);
    var dataList = dataList.slice(1);
    var stackedLineChart = new Chart(ctx, {
        type: "line",
        data: {
            datasets: dataList
        },
        options: {
            maintainAspectRatio: false, // 设置为false以忽略宽高比例
            responsive: true,
            interaction: {
                intersect: false,
                mode: 'index',
            },
            scales: {
                x: {
                    min: time_min,
                    title: {
                        display: true,
                        text: "时间", // X-axis label
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "价格/ isk", // Y-axis label
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: titleA
                },
                // tooltip: {
                //     callbacks: {
                //       footer: footer,
                //     }
                // },

            },
            
        },
    });

    return stackedLineChart;
}

const footer = (tooltipItems) => {
    let sum = 0;
  
    tooltipItems.forEach(function(tooltipItem) {
        sum += tooltipItem.parsed.y;
    });
    // return 'Sum: ' + sum;
  };

function createNewChart(newCanvasId, styleString, dataList) {

    var newDiv = document.createElement("div");

    // newDiv.style = "height: 50vh; width: 90%;";
    newDiv.style = styleString;

    var newCanvas = document.createElement("canvas");

    newCanvas.id = newCanvasId;

    newDiv.appendChild(newCanvas);

    // 获取要将新div添加到的父元素
    var parentElement = document.getElementById("parentContainer"); // 请将 "parentContainer" 替换为实际的父元素ID

    // 将新div添加到父元素中
    parentElement.appendChild(newDiv);

    var ctx = document.getElementById(newCanvasId).getContext('2d')
    return createStackedLineChart(ctx, dataList)
}