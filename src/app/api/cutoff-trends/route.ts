import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { marks = 0 } = body;

    const numMarks = Number(marks) || 180;
    const probability = numMarks > 85 ? 'High Chance (80-90%)' : numMarks > 60 ? 'Moderate Chance (50-70%)' : 'Low Chance (<40%)';

    const chartData = {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          fill: true,
          label: 'Historical Cutoff Marks',
          data: [175, 178, 182, 180, 185],
          borderColor: '#00FFFF',
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          tension: 0.4,
        },
        {
          label: 'Your Score / Equivalent',
          data: [null, null, null, null, numMarks],
          borderColor: '#FF007F',
          backgroundColor: '#FF007F',
          pointRadius: 6,
          type: 'line',
        }
      ],
    };

    return NextResponse.json({ probability, chartData });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
