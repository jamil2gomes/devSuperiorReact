import React,{useState, useEffect} from 'react'
import Chart from 'react-apexcharts';
import api from 'services/api';
import {SaleSum} from 'types/sale';

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

        const getSumSellers = async () => {

            try {
                const response = await api.get('/sales/sum-by-seller');
                const data = response.data as SaleSum[];
                const labels = data.map(vendedor => vendedor.sellerName);
                const series = data.map(total => total.sum);
                console.log(data)
                setData({
                    labels,
                    series
                })
            } catch (error) {
                console.log(error)
            }
        }
        getSumSellers();
       
    }, [])

 
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
         options={{...options, labels:data.labels, }}
         series={data.series}
         type="donut"
         height={240}
        />
    )
}
