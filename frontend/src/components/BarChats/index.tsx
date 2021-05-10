import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts';
import api from 'services/api';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

export default function BarChats() {

    const [data, setData] = useState<ChartData>(
        {
            labels: {
                categories: []
            },
            series: [
                {
                    name: "",
                    data: []
                }
            ]
        }
    )

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    useEffect(() => {
        api.get('/sales/success-by-seller')
            .then(response => {
                const data = response.data as SaleSuccess[];

                const labels = data.map(nome => nome.sellerName);
                const series = data.map(x =>
                    round(100.0 * (x.visited / x.deals), 1));


                setData({
                    labels: {
                        categories: labels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: series
                        }
                    ]
                });
            })

    }, []);


    return (
        <Chart
            options={{ ...options, xaxis: data.labels, }}
            series={data.series}
            type="bar"
            height={240}
        />
    )
}
