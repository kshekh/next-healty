'use strict';
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

// 体重・体脂肪率グラフ
interface Props {
  styles: string;
}

const BodyGraph = ({ styles }: Props) => {
  const canvas = useRef(null);

  useEffect(() => {
    const ctx: any = canvas.current;

    let chartStatus = Chart.getChart('lineCharts');
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        // x-axis label values
        labels: [
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
        ],
        datasets: [
          {
            label: '',
            // y-axis data plotting values
            data: [200, 300, 1300, 520, 2000, 350, 150, 2220, 500, 850, 2050],
            fill: false,
            borderWidth: 2,
            backgroundColor: '#FFCC21',
            borderColor: '#FFCC21',
            // responsive:true
          },
          {
            label: '',
            // y-axis data plotting values
            data: [300, 500, 1500, 2220, 500, 850, 2050, 200, 300, 1300, 520, 200],
            fill: false,
            borderWidth: 2,
            backgroundColor: '#8FE9D0',
            borderColor: '#8FE9D0',
            // responsive:true
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,

        //  stacked: false,

        scales: {
          x: {
            border: {
              display: false
            },
            ticks: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--color-light'),
            },
            grid: {
              color: function (context) {
                return '#777777';
              },
            },
          },
          y: {
            border: {
              display: false
            },
            ticks: {
              display: false
            },
            grid: { display: false },
          },
        },
      },
    });
  }, []);

  return (
    <canvas id='lineCharts' ref={canvas} height='350' width='1000' className={styles}></canvas>
  );
};

export default BodyGraph;
