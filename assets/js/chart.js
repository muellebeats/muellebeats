const chartContainer = document.getElementById('chart-container');
const chart = createChart(chartContainer, {
    width: 600,
    height: 400,
    layout: {
        backgroundColor: '#ffffff',
        textColor: '#333',
    },
    grid: {
        vertLines: {
            color: '#e1e1e1',
        },
        horzLines: {
            color: '#e1e1e1',
        },
    },
    priceScale: {
        borderColor: '#cccccc',
    },
    timeScale: {
        borderColor: '#cccccc',
    },
});

const lineSeries = chart.addLineSeries({
    color: 'blue',
    lineWidth: 2,
});

lineSeries.setData([
    { time: '2023-01-01', value: 180 },
    { time: '2023-01-02', value: 185 },
    { time: '2023-01-03', value: 190 },
    { time: '2023-01-04', value: 188 },
]);
