import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    plugins: {
        // legend: { position: 'top' },
        title: {
            display: true,
            text: "Ratings"
        }
    }
}

const ratings = [
    { rating: 5, number: 45},
    { rating: 4, number: 72},
    { rating: 3, number: 42},
    { rating: 2, number: 35},
    { rating: 1, number: 15}
  ]

const BarChart = () => {
    // const data = {
    //     labels: ['Jan', 'Feb', 'Mar'],
    //     datasets: [
    //         {
    //             label: 'Present',
    //             data: [11, 13, 12],
    //             backgroundColor: 'rgba(255, 99, 132, 0.5)'
    //         },
    //         {
    //             label: 'Absent',
    //             data: [4, 2, 3],
    //             backgroundColor: 'rgba(53, 162, 235, 0.5)'
    //         }
    //     ]
    // }

    const data1 = {
        labels: [5, 4, 3, 2, 1],
        datasets: [
            {
                label: "Ratings",
                data: [45, 72, 42, 35, 15],
                backgroundColor: 'blue'
            },
            
        ]
    }


  return (
    <Bar options={options} data={data1}   />

    
  )
}

export default BarChart