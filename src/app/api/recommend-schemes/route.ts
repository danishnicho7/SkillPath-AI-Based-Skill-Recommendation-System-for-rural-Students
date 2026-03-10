import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { state = '' } = body;

    const lowerState = state.toLowerCase();

    const schemes = [
      {
        scheme_name: 'Nan Mudhalvan Scheme',
        eligibility: 'College student passing out from state universities.',
        benefits: 'Industry-relevant skill training, mock interviews, and placement assistance.',
        training_type: 'Technical & Soft Skills',
        application_link: 'https://www.naanmudhalvan.tn.gov.in/',
        state_availability: 'Tamil Nadu',
        skill_areas: ['IT', 'Manufacturing', 'Banking'],
        isHighlyEligible: lowerState.includes('tamil') || lowerState.includes('tn')
      },
      {
        scheme_name: 'Tamil Pudhalvan Scheme',
        eligibility: 'Boys who studied in Govt schools from 6th to 12th.',
        benefits: '₹1,000 monthly assistance for pursuing higher education.',
        training_type: 'Financial aid for Skill Degrees',
        application_link: '#',
        state_availability: 'Tamil Nadu',
        skill_areas: ['Higher Education'],
        isHighlyEligible: lowerState.includes('tamil') || lowerState.includes('tn')
      },
      {
        scheme_name: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana)',
        eligibility: 'Indian youth, school/college dropouts or unemployed.',
        benefits: 'Free short-term training, certification, and placement.',
        training_type: 'Vocational Training',
        application_link: 'https://www.pmkvyofficial.org/',
        state_availability: 'All India',
        skill_areas: ['Telecom', 'Electronics', 'Healthcare', 'Agriculture'],
        isHighlyEligible: true
      },
      {
        scheme_name: 'AICTE Internship Enterprise Portal',
        eligibility: 'Students pursuing AICTE approved technical courses.',
        benefits: 'Stipend-based internships in top core and IT companies.',
        training_type: 'Corporate Internship',
        application_link: 'https://internship.aicte-india.org/',
        state_availability: 'All India',
        skill_areas: ['Engineering', 'Management', 'Design'],
        isHighlyEligible: true
      }
    ];

    // Sort so highly eligible is at the top
    const sortedSchemes = schemes.sort((a, b) => (a.isHighlyEligible === b.isHighlyEligible) ? 0 : a.isHighlyEligible ? -1 : 1);

    return NextResponse.json({ schemes: sortedSchemes });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
