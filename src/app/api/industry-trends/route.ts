import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category = '' } = body;

    const lowerCat = category.toLowerCase();

    // Default Tech/IT data
    let trendData = {
      career: 'Software & Technology',
      historical: [
        { year: 2019, jobs: 4.1 },
        { year: 2020, jobs: 4.3 }, // Slight tech resilience during pandemic
        { year: 2021, jobs: 4.8 }, // Huge hiring boom
        { year: 2022, jobs: 5.2 },
        { year: 2023, jobs: 5.4 } // Layoffs flattening the curve slightly
      ],
      forecast: [
        { year: 2025, jobs: 6.1 },
        { year: 2028, jobs: 7.4 },
        { year: 2030, jobs: 8.5 }
      ],
      description: 'The IT sector saw a massive boom in 2021, followed by a slight correction. Future growth is strongly tied to Cloud and AI transformation, creating millions of new roles by 2030.'
    };

    if (lowerCat.includes('data') || lowerCat.includes('ai')) {
      trendData = {
        career: 'Data Science & Generative AI',
        historical: [
          { year: 2019, jobs: 0.5 },
          { year: 2020, jobs: 0.8 },
          { year: 2021, jobs: 1.4 },
          { year: 2022, jobs: 2.1 }, // ChatGPT release sparks surge
          { year: 2023, jobs: 3.2 }
        ],
        forecast: [
          { year: 2025, jobs: 5.5 },
          { year: 2028, jobs: 8.0 },
          { year: 2030, jobs: 9.8 } // Exponential projection
        ],
        description: 'Data Science and AI are exhibiting exponential "hockey stick" growth. World Economic Forum reports indicate AI specialists are the fastest-growing role globally.'
      };
    } else if (lowerCat.includes('business') || lowerCat.includes('fin')) {
      trendData = {
        career: 'Finance & Investment Banking',
        historical: [
          { year: 2019, jobs: 3.8 },
          { year: 2020, jobs: 3.5 }, // Pandemic dip in corporate fin
          { year: 2021, jobs: 4.0 }, 
          { year: 2022, jobs: 4.3 },
          { year: 2023, jobs: 4.5 }
        ],
        forecast: [
          { year: 2025, jobs: 5.1 },
          { year: 2028, jobs: 5.7 },
          { year: 2030, jobs: 6.3 }
        ],
        description: 'Steady, reliable linear growth globally. The rise of Indian capital markets and fintech startups is driving localized demand for analysts.'
      };
    } else if (lowerCat.includes('gov') || lowerCat.includes('civil')) {
      trendData = {
        career: 'Civil Services (IAS/Govt)',
        historical: [
          { year: 2019, jobs: 1.0 },
          { year: 2020, jobs: 1.0 }, 
          { year: 2021, jobs: 1.0 },
          { year: 2022, jobs: 1.0 },
          { year: 2023, jobs: 1.0 }
        ],
        forecast: [
          { year: 2025, jobs: 1.05 },
          { year: 2028, jobs: 1.05 },
          { year: 2030, jobs: 1.05 }
        ],
        description: 'Government structural roles have completely flat job growth due to fixed vacancies (approx 1000/year for UPSC). Competition ratios continually increase over time.'
      };
    } else if (lowerCat.includes('med') || lowerCat.includes('doctor')) {
      trendData = {
        career: 'Healthcare & Medical Devices',
        historical: [
          { year: 2019, jobs: 6.0 },
          { year: 2020, jobs: 6.8 }, // COVID-19 massive healthcare spike
          { year: 2021, jobs: 7.2 },
          { year: 2022, jobs: 7.5 },
          { year: 2023, jobs: 7.8 }
        ],
        forecast: [
          { year: 2025, jobs: 8.5 },
          { year: 2028, jobs: 9.8 },
          { year: 2030, jobs: 11.2 }
        ],
        description: 'Healthcare experienced a major demand shock during the pandemic. Future growth is heavily driven by an aging global population and medical tourism in India.'
      };
    } else if (lowerCat.includes('energy') || lowerCat.includes('green')) {
      trendData = {
        career: 'Renewable & EV Technology',
        historical: [
          { year: 2019, jobs: 0.9 },
          { year: 2020, jobs: 1.1 },
          { year: 2021, jobs: 1.5 },
          { year: 2022, jobs: 2.2 }, // Heavy subsidized EV manufacturing
          { year: 2023, jobs: 3.1 }
        ],
        forecast: [
          { year: 2025, jobs: 4.8 },
          { year: 2028, jobs: 7.5 },
          { year: 2030, jobs: 9.5 }
        ],
        description: 'Driven by strict carbon Net-Zero targets by 2070, green jobs have shifted from niche to mainstream. Massive capital influx is causing near-exponential job creation.'
      };
    }

    return NextResponse.json({ trends: trendData });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
