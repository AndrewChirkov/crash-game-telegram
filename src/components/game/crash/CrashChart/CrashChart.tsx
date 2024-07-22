import { CategoryScale, Chart, Legend, LineController, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js'
import { useEffect, useRef } from 'react'
import RocketIcon from './../../../../assets/game/rocket.svg'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend)

interface CrashChartProps {
  data: number[]
  maxY: number
  gameOver: boolean
}

const CrashChart = (props: CrashChartProps) => {
  const { data, maxY, gameOver } = props

  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<Chart<'line', any, unknown>>(null)

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      const icon = new Image(60, 60)
      icon.src = RocketIcon

      //@ts-ignore
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.map((_, index) => index),
          datasets: [
            {
              label: 'Multiplier',
              data: data,
              fill: true,
              tension: 1,
              borderColor: '#30b3f0',
              backgroundColor: 'red',
              pointBackgroundColor: 'rgb(75, 192, 192)',
              showLine: true,
              pointStyle: icon,
              pointRotation: 45,
              pointRadius: (ctx) => {
                const index = ctx.dataIndex
                const length = ctx.dataset.data.length
                return index === length - 1 ? 3 : 0
              }
            }
          ]
        },
        options: {
          responsive: true,
          elements: {
            line: {
              cubicInterpolationMode: 'monotone'
            }
          },
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              min: 0,
              display: false,
              max: 1.25
            },
            y: {
              beginAtZero: false,
              min: 1,
              max: Math.round(+maxY.toFixed(1)),
              ticks: {
                format: {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                },
                color: 'white'
              }
            }
          },
          animation: {
            duration: 10
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }
  }, [])

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.labels = data.map((_, index) => index)
      chartInstanceRef.current.data.datasets[0].data = data
      chartInstanceRef.current.data.datasets[0].tension = 1
      chartInstanceRef.current.data.datasets[0].borderColor = gameOver ? 'red' : '#30b3f0'

      chartInstanceRef.current.options.scales!.y!.max = maxY
      chartInstanceRef.current.update()
    }
  }, [data, gameOver])

  return <canvas width={1920} height={1080} ref={chartRef} />
}

export default CrashChart
