import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts';
import api from 'services/api';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}

export default function DonutChat() {

    const [data, setData] = useState<ChartData>({
        labels: [],
        series: []
    });

    useEffect(() => {

        api.get('/sales/sum-by-seller')
            .then(response => {
                const data = response.data as SaleSum[];
                const labels = data.map(vendedor => vendedor.sellerName);
                const series = data.map(total => total.sum);
                setData({
                    labels,
                    series
                })
            })
    }, [setData]);


    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: data.labels, }}
            series={data.series}
            type="donut"
            height={240}
        />
    )
}
