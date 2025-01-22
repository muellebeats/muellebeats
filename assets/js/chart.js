// chart.js
const chartContainer = document.getElementById('chart-container');

const chart = LightweightCharts.createChart(chartContainer, {
    width: chartContainer.clientWidth,
    height: 400,
    layout: {
        backgroundColor: '#1a1a1a',
        textColor: '#ffffff',
    },
    grid: {
        vertLines: {
            color: '#2c2c2c',
        },
        horzLines: {
            color: '#2c2c2c',
        },
    },
    priceScale: {
        borderColor: '#555555',
    },
    timeScale: {
        borderColor: '#555555',
    },
});

const lineSeries = chart.addLineSeries({
    color: 'lime',
    lineWidth: 2,
});

lineSeries.setData([
    { time: '2023-01-01', value: 1.2 },
    { time: '2023-01-02', value: 1.3 },
    { time: '2023-01-03', value: 1.1 },
    { time: '2023-01-04', value: 1.4 },
    { time: '2023-01-05', value: 1.5 },
]);

