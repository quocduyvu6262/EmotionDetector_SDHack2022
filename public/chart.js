
var canvasElement = document.getElementById("emotion-bar");
var config = {
    type: "bar",
    data: {
        labels: ["Happy","Sad","Angry"], 
        datasets:[{
            label: "Percent",
            data: [0,0,0],
            backgroundColor: [
                "rgba(255,159,64,0.4)",
                "rgba(54,162,235,0.4)",
                "rgba(255,99,132,0.4)"
            ],
            borderColor: [
                "rgba(255,159,64,1)",
                "rgba(54,162,235,1)",
                "rgba(255,99,132,1)"
            ],
            borderWidth: 1

        }],
    }
};

var barChart = new Chart(canvasElement, config)