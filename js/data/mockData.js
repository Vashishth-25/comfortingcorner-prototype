export const BUDDY_TOPICS = [
    'Academic or work pressure',
    'Stress or overthinking',
    'Loneliness or feeling disconnected',
    'Relationship concerns',
    'Family difficulties',
    'Confidence or self-esteem',
    'Feeling low or sad',
    'Motivation or procrastination',
    'Friendship difficulties',
    'Social anxiety',
    'College adjustment & homesickness',
    'Sleep difficulties',
    'Something else',
    'I’m not sure yet'
];
export const THERAPIST_CONCERNS = [
    'Anxiety or persistent worry',
    'Stress or overthinking',
    'Feeling low or depression',
    'Trauma and difficult life experiences',
    'Family conflict & boundary navigation',
    'Relationship & marital concerns',
    'Grief or significant loss',
    'Academic stress & performance anxiety',
    'Career & major life transitions',
    'Anger & emotional regulation',
    'Confidence & imposter syndrome',
    'Sleep & chronic burnout',
    'Personal development',
    'Other / Not sure yet'
];
// 6 Exact Configured Buddy Pricing Tiers
export const BUDDY_PRICING_TIERS = [150, 200, 250, 300, 350, 400];
// Exact Configured Therapist Pricing Tiers (₹900 to ₹2,200)
export const THERAPIST_PRICING_TIERS = [900, 1100, 1300, 1500, 1700, 1900, 2200];
export const SAMPLE_BUDDIES = [
    {
        id: 'b-1',
        name: 'Ananya Sharma',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        degree: 'B.A. Psychology',
        year: '3rd Year',
        institution: 'Delhi University (Lady Shri Ram College)',
        isVerified: true,
        isTrained: true,
        topics: ['Academic or work pressure', 'Loneliness or feeling disconnected', 'Confidence or self-esteem', 'Stress or overthinking'],
        languages: ['English', 'Hindi'],
        approach: 'Calm listener, thoughtful and patient',
        price: 250,
        tier: 3,
        ccPoints: 860,
        rating: 4.9,
        reviewCount: 38,
        availability: 'Available Now',
        nextAvailableSlot: 'Today · 8:30 PM IST',
        bio: 'Namaste! I know how heavy campus deadlines, exam stress, and quiet evenings can feel. I am here to offer a calm, non-judgmental space to listen without giving unwanted advice.',
        conversationStyle: 'Validating, gentle reflective pauses, unhurried pacing at your comfort level.',
        trainingDetails: 'Certified in Active Listening & Youth Peer Support (Comforting Corner Student Fellowship, 40 hours supervised practice).',
        reviews: [
            { author: 'Neha Gupta', text: 'Ananya made me feel so grounded when my semester midterms felt unbearable.', date: '3 days ago', helpfulCount: 14 },
            { author: 'Vikram Joshi', text: 'Very warm listener. I didn’t have to search for the right words.', date: '1 week ago', helpfulCount: 9 }
        ]
    },
    {
        id: 'b-2',
        name: 'Rohan Mehta',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
        degree: 'B.Sc. Psychology',
        year: '2nd Year',
        institution: "St. Xavier's College, Mumbai",
        isVerified: true,
        isTrained: true,
        topics: ['College adjustment & homesickness', 'Friendship difficulties', 'Motivation or procrastination', 'Stress or overthinking'],
        languages: ['English', 'Hindi', 'Gujarati'],
        approach: 'Friendly, practical, easy to talk to',
        price: 200,
        tier: 2,
        ccPoints: 640,
        rating: 4.8,
        reviewCount: 24,
        availability: 'Available Today',
        nextAvailableSlot: 'Today · 9:15 PM IST',
        bio: 'Adjusting to a new hostel, feeling disconnected from home, or falling into assignment procrastination is very normal. Let’s talk it through over a friendly chat.',
        conversationStyle: 'Relatable, practical, conversational check-ins without pressure.',
        trainingDetails: 'Completed Peer Support Foundations & Emotional First Aid (30 hours coursework & simulation).',
        reviews: [
            { author: 'Aarav Desai', text: 'Felt like talking to a thoughtful senior who genuinely understands hostel life.', date: '5 days ago', helpfulCount: 11 }
        ]
    },
    {
        id: 'b-3',
        name: 'Kavya Nair',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
        degree: 'B.A. Psychology',
        year: '4th Year',
        institution: 'Christ University, Bengaluru',
        isVerified: true,
        isTrained: true,
        topics: ['Academic or work pressure', 'Family difficulties', 'Relationship concerns', 'Confidence or self-esteem'],
        languages: ['English', 'Hindi', 'Malayalam'],
        approach: 'Empathetic and reflective',
        price: 350,
        tier: 5,
        ccPoints: 1120,
        rating: 5.0,
        reviewCount: 52,
        availability: 'Available Now',
        nextAvailableSlot: 'Tomorrow · 9:30 AM IST',
        bio: 'Managing family expectations alongside placement pressure can feel overwhelming. I help you untangle knots of stress in a quiet, emotionally secure environment.',
        conversationStyle: 'Thoughtful reflections, validating emotions, zero judgment.',
        trainingDetails: 'Senior Peer Mentor Credential, Conflict Navigation & Empathetic Active Listening (60 hours).',
        reviews: [
            { author: 'Pooja Pillai', text: 'Kavya helped me step back from intense placement anxiety.', date: '2 days ago', helpfulCount: 19 }
        ]
    },
    {
        id: 'b-4',
        name: 'Arjun Verma',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        degree: 'B.S. Cognitive Science & Psychology',
        year: '3rd Year',
        institution: 'Ashoka University, Sonipat',
        isVerified: true,
        isTrained: true,
        topics: ['Social anxiety', 'Loneliness or feeling disconnected', 'College adjustment & homesickness', 'Sleep difficulties'],
        languages: ['English', 'Hindi'],
        approach: 'Grounded listener, warm and reassuring',
        price: 300,
        tier: 4,
        ccPoints: 780,
        rating: 4.8,
        reviewCount: 31,
        availability: 'Available Today',
        nextAvailableSlot: 'Tomorrow · 12:30 PM IST',
        bio: 'Moving away for college can feel disorienting. If social situations or hostel life make you anxious, you don’t have to pretend everything is fine here.',
        conversationStyle: 'Quiet warmth, gentle reassurance, open-hearted listening.',
        trainingDetails: 'Campus Wellness Peer Ambassador & Cross-Cultural Support Certified (35 hours).',
        reviews: [
            { author: 'Rajat Singhania', text: 'Gave me breathing room when I felt alienated on campus.', date: '4 days ago', helpfulCount: 16 }
        ]
    },
    {
        id: 'b-5',
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        degree: 'M.A. Applied Psychology',
        year: '1st Year Masters',
        institution: 'Tata Institute of Social Sciences (TISS), Mumbai',
        isVerified: true,
        isTrained: true,
        topics: ['Relationship concerns', 'Feeling low or sad', 'Confidence or self-esteem', 'Stress or overthinking'],
        languages: ['English', 'Hindi', 'Punjabi'],
        approach: 'Compassionate, insightful, patient',
        price: 400,
        tier: 6,
        ccPoints: 950,
        rating: 4.9,
        reviewCount: 44,
        availability: 'Available Tomorrow',
        nextAvailableSlot: 'Tomorrow · 5:30 PM IST',
        bio: 'Relationships, emotional fatigue, and personal doubt can drain energy before we realize it. I offer compassionate listening to help you reconnect with your calm.',
        conversationStyle: 'Empathetic validation, mindfulness grounding, attentive presence.',
        trainingDetails: 'Comforting Corner Fellow, Crisis De-escalation & Emotional First Aid (45 hours).',
        reviews: [
            { author: 'Meenakshi Iyer', text: 'Neha created a safe harbor when my personal life felt chaotic.', date: '1 week ago', helpfulCount: 22 }
        ]
    },
    {
        id: 'b-6',
        name: 'Siddharth Joshi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        degree: 'B.A. Psychology & Sociology',
        year: '2nd Year',
        institution: 'Fergusson College, Pune',
        isVerified: true,
        isTrained: true,
        topics: ['Motivation or procrastination', 'Academic or work pressure', 'Stress or overthinking'],
        languages: ['English', 'Hindi', 'Marathi'],
        approach: 'Encouraging, patient, relatable',
        price: 150,
        tier: 1,
        ccPoints: 590,
        rating: 4.7,
        reviewCount: 18,
        availability: 'Available Now',
        nextAvailableSlot: 'Today · 7:00 PM IST',
        bio: 'Stuck in an endless loop of avoiding study tasks and then feeling guilty? You are not alone. Let’s talk about the pressure behind procrastination.',
        conversationStyle: 'Practical, encouraging, breakdown approach without toxic positivity.',
        trainingDetails: 'Certified Youth Academic Wellness Peer (25 hours coursework).',
        reviews: [
            { author: 'Tanmay Kulkarni', text: 'Siddharth helped me understand the anxiety fueling my procrastination.', date: '3 days ago', helpfulCount: 8 }
        ]
    }
];
export const SAMPLE_THERAPISTS = [
    {
        id: 't-1',
        name: 'Dr. Meera Iyer',
        title: 'Clinical Psychologist',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        credentials: 'Ph.D. Clinical Psychology (NIMHANS) · RCI Registered',
        licenseNumber: 'RCI-CP-2016-0948',
        experienceYears: 8,
        specializations: [
            'Anxiety or persistent worry',
            'Academic stress & performance anxiety',
            'Anger & emotional regulation',
            'Confidence & imposter syndrome'
        ],
        modalities: ['Cognitive Behavioral Therapy (CBT)', 'Acceptance & Commitment Therapy (ACT)', 'Mindfulness-Based Relapse Prevention'],
        ageGroups: ['Adolescents (16+)', 'Young Adults', 'Adults'],
        languages: ['English', 'Hindi', 'Tamil'],
        sessionModes: ['Online Video'],
        sessionDuration: '50 minutes',
        price: 1500, // ₹1,500 tier
        ccPoints: 2450,
        rating: 4.95,
        reviewCount: 64,
        isVerified: true,
        nextAvailableSlot: 'Today · 8:30 PM IST',
        bio: 'I specialize in helping young adults, students, and professionals navigate persistent worry, imposter syndrome, and chronic burnout. My goal is to foster psychological flexibility rather than temporary suppression.',
        approachDescription: 'Evidence-informed, collaborative, structured. We establish clear goals in the initial sessions while honoring your personal pace.',
        firstSessionExpectations: 'Our initial 50 minutes is dedicated to mapping your current struggles, discussing what has helped or hindered before, and outlining a collaborative therapy roadmap.',
        availableSlots: [
            { id: 's-101', date: 'Today', time: '8:30 PM IST', mode: 'Online Video' },
            { id: 's-102', date: 'Tomorrow', time: '10:00 AM IST', mode: 'Online Video' },
            { id: 's-103', date: 'Tomorrow', time: '2:30 PM IST', mode: 'Online Video' },
            { id: 's-104', date: 'Tomorrow', time: '6:00 PM IST', mode: 'Online Video' }
        ],
        reviews: [
            { author: 'Ritika Bannerjee', text: 'Dr. Meera helped me untangle my chronic panic attacks. Her structured yet deeply compassionate approach was life-changing.', date: '2 weeks ago', verifiedClient: true },
            { author: 'Sameer Sen', text: 'Grounding and insightful guidance for career burnout.', date: '1 month ago', verifiedClient: true }
        ]
    },
    {
        id: 't-2',
        name: 'Dr. Kabir Malhotra',
        title: 'Counseling Psychologist',
        avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
        credentials: 'M.Phil Clinical Psychology · Licensed Counselor',
        licenseNumber: 'LIC-PSY-2018-4421',
        experienceYears: 6,
        specializations: [
            'Family conflict & boundary navigation',
            'Relationship & marital concerns',
            'Career & major life transitions',
            'Loneliness or feeling disconnected'
        ],
        modalities: ['Systemic Family Therapy', 'Narrative Therapy', 'Emotion-Focused Therapy'],
        ageGroups: ['Young Adults', 'Adults', 'Couples'],
        languages: ['English', 'Hindi', 'Punjabi'],
        sessionModes: ['Online Video'],
        sessionDuration: '50 minutes',
        price: 1100, // ₹1,100 tier
        ccPoints: 1980,
        rating: 4.88,
        reviewCount: 47,
        isVerified: true,
        nextAvailableSlot: 'Tomorrow · 11:00 AM IST',
        bio: 'Family boundaries, relationship friction, and career crossroads often bring deep personal strain. I offer a thoughtful, supportive setting to unpack relationship patterns and build genuine agency.',
        approachDescription: 'Reflective, supportive, systemic. We look at interpersonal dynamics with curiosity and compassion rather than blame.',
        firstSessionExpectations: 'We will explore the interpersonal dynamics or life transitions causing distress and co-create realistic boundaries to safeguard your emotional well-being.',
        availableSlots: [
            { id: 's-201', date: 'Tomorrow', time: '11:00 AM IST', mode: 'Online Video' },
            { id: 's-202', date: 'Tomorrow', time: '3:00 PM IST', mode: 'Online Video' },
            { id: 's-203', date: 'Tomorrow', time: '7:30 PM IST', mode: 'Online Video' }
        ],
        reviews: [
            { author: 'Manish Chawla', text: 'Dr. Kabir gave me clarity on complicated family expectations without guilt.', date: '3 weeks ago', verifiedClient: true }
        ]
    },
    {
        id: 't-3',
        name: 'Dr. Nandini Rao',
        title: 'Senior Clinical Psychologist',
        avatar: 'https://images.unsplash.com/photo-1594824813565-5e065ff43bb7?auto=format&fit=crop&w=400&q=80',
        credentials: 'Psy.D. Clinical Psychology · APA & RCI Registered',
        licenseNumber: 'RCI-CP-2014-0312',
        experienceYears: 10,
        specializations: [
            'Trauma and difficult life experiences',
            'Grief or significant loss',
            'Feeling low or depression',
            'Anger & emotional regulation'
        ],
        modalities: ['Trauma-Informed Care', 'EMDR Therapy', 'Compassion-Focused Therapy (CFT)'],
        ageGroups: ['Adults (18+)', 'Older Adults'],
        languages: ['English', 'Hindi', 'Kannada'],
        sessionModes: ['Online Video'],
        sessionDuration: '50 minutes',
        price: 2200, // ₹2,200 tier
        ccPoints: 3120,
        rating: 4.98,
        reviewCount: 92,
        isVerified: true,
        nextAvailableSlot: 'Tomorrow · 12:30 PM IST',
        bio: 'Healing from profound grief, prolonged distress, or developmental trauma requires safety, dignity, and patience. I provide a calm sanctuary where your nervous system can gradually learn to rest.',
        approachDescription: 'Trauma-informed, somatic stabilization, and compassionate integration.',
        firstSessionExpectations: 'Safety is the foundation. We never rush into trauma history; our first session is dedicated solely to emotional comfort, grounding resources, and understanding what feels safe.',
        availableSlots: [
            { id: 's-301', date: 'Tomorrow', time: '12:30 PM IST', mode: 'Online Video' },
            { id: 's-302', date: 'Tomorrow', time: '4:00 PM IST', mode: 'Online Video' }
        ],
        reviews: [
            { author: 'Ananya Deshmukh', text: 'Dr. Nandini is an extraordinary clinician. She never once pushed me beyond what I felt safe sharing.', date: '1 week ago', verifiedClient: true }
        ]
    },
    {
        id: 't-4',
        name: 'Dr. Rahul Verma',
        title: 'Licensed Psychotherapist',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
        credentials: 'M.Phil Clinical Mental Health · Registered Practitioner',
        licenseNumber: 'RCI-CP-2017-8812',
        experienceYears: 7,
        specializations: [
            'Relationship & marital concerns',
            'Anger & emotional regulation',
            'Sleep & chronic burnout',
            'Personal development'
        ],
        modalities: ['Emotionally Focused Therapy (EFT)', 'Attachment-Based', 'Solution-Focused'],
        ageGroups: ['Young Adults', 'Adults', 'Couples'],
        languages: ['English', 'Hindi'],
        sessionModes: ['Online Video'],
        sessionDuration: '50 minutes',
        price: 1300, // ₹1,300 tier
        ccPoints: 2100,
        rating: 4.89,
        reviewCount: 51,
        isVerified: true,
        nextAvailableSlot: 'Tomorrow · 3:30 PM IST',
        bio: 'Navigating intimacy fears, communication breakdowns, and persistent workplace stress. We work together to create healthy emotional habits and restful sleep rhythms.',
        approachDescription: 'Collaborative, attachment-grounded, practical and warm.',
        firstSessionExpectations: 'We explore current attachment triggers, communication patterns, and outline actionable micro-practices for the upcoming week.',
        availableSlots: [
            { id: 's-401', date: 'Tomorrow', time: '3:30 PM IST', mode: 'Online Video' },
            { id: 's-402', date: 'Tomorrow', time: '6:30 PM IST', mode: 'Online Video' }
        ],
        reviews: [
            { author: 'Deepak Saxena', text: 'Very structured and helpful in clarifying communication blocks.', date: '2 weeks ago', verifiedClient: true }
        ]
    },
    {
        id: 't-5',
        name: 'Dr. Priya Menon',
        title: 'Counseling Psychologist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
        credentials: 'Ph.D. in Counseling Psychology · Licensed Practitioner',
        licenseNumber: 'RCI-COUNS-2019-1102',
        experienceYears: 5,
        specializations: [
            'Confidence & imposter syndrome',
            'Loneliness or feeling disconnected',
            'Career & major life transitions',
            'Academic stress & performance anxiety'
        ],
        modalities: ['Person-Centered Humanistic', 'Dialectical Behavior (DBT Skills)', 'Expressive Arts Techniques'],
        ageGroups: ['Teens (15+)', 'Young Adults'],
        languages: ['English', 'Hindi', 'Malayalam'],
        sessionModes: ['Online Video'],
        sessionDuration: '50 minutes',
        price: 900, // ₹900 tier
        ccPoints: 1820,
        rating: 4.91,
        reviewCount: 39,
        isVerified: true,
        nextAvailableSlot: 'Tomorrow · 5:00 PM IST',
        bio: 'If you struggle with harsh inner self-criticism, people-pleasing, or feeling invisible in social environments, you are welcome here. We cultivate gentle inner security.',
        approachDescription: 'Warm, humanistic, strengths-focused and creative.',
        firstSessionExpectations: 'A gentle, validating conversation exploring your self-worth story and identifying your inherent strengths.',
        availableSlots: [
            { id: 's-501', date: 'Tomorrow', time: '5:00 PM IST', mode: 'Online Video' },
            { id: 's-502', date: 'Tomorrow', time: '7:00 PM IST', mode: 'Online Video' }
        ],
        reviews: [
            { author: 'Sneha Nambiar', text: 'Dr. Priya helped me dismantle the voice in my head that said I was never enough.', date: '3 weeks ago', verifiedClient: true }
        ]
    }
];
// Verified Indian Government Emergency & Mental-Health Resources (Section 7)
export const INDIAN_GOVT_RESOURCES = [
    {
        name: 'Tele-MANAS',
        subtitle: 'National Tele Mental Health Programme of India (MOHFW)',
        shortCode: '14416',
        tollFree: '1800-891-4416',
        availability: '24/7 Free & Confidential Helpline',
        website: 'https://telemanas.mohfw.gov.in/',
        telHref: 'tel:14416',
        desc: 'Government of India national initiative providing 24x7 psychological support, crisis counseling, and psychiatrist referrals across 20+ regional languages.'
    },
    {
        name: 'National Emergency Response System',
        subtitle: 'Government of India All-in-One Emergency Assistance',
        shortCode: '112',
        tollFree: '112',
        availability: '24/7 Nationwide Emergency Help',
        website: 'https://112.gov.in/',
        telHref: 'tel:112',
        desc: 'Single emergency contact number (112) for immediate assistance during acute personal danger, medical crises, or safety emergencies across all states in India.'
    },
    {
        name: 'KIRAN Helpline',
        subtitle: 'Ministry of Social Justice & Empowerment',
        shortCode: null,
        tollFree: '1800-599-0019',
        availability: '24/7 Free Mental Health Rehabilitation',
        website: 'https://disabilityaffairs.gov.in/',
        telHref: 'tel:18005990019',
        desc: '24x7 national toll-free helpline providing psychological support for distress, depression, anxiety, and panic prevention.'
    },
    {
        name: 'Vandrevala Foundation for Mental Health',
        subtitle: 'Non-profit 24/7 Crisis Support Helpline',
        shortCode: null,
        tollFree: '+91 9999 666 555',
        availability: '24x7 Free Crisis Counseling',
        website: 'https://www.vandrevalafoundation.com/',
        telHref: 'tel:+919999666555',
        desc: 'Round-the-clock telephone counseling and emotional distress mitigation by trained mental health professionals.'
    }
];
// Generates 4 to 6 dynamic available slots for the next 24 hours in IST (Asia/Kolkata)
export function getDynamicNext24HourSlots() {
    const slots = [
        { label: 'Today · 8:30 PM IST', date: 'Today', time: '8:30 PM IST' },
        { label: 'Today · 9:15 PM IST', date: 'Today', time: '9:15 PM IST' },
        { label: 'Tomorrow · 9:30 AM IST', date: 'Tomorrow', time: '9:30 AM IST' },
        { label: 'Tomorrow · 12:30 PM IST', date: 'Tomorrow', time: '12:30 PM IST' },
        { label: 'Tomorrow · 3:30 PM IST', date: 'Tomorrow', time: '3:30 PM IST' },
        { label: 'Tomorrow · 5:30 PM IST', date: 'Tomorrow', time: '5:30 PM IST' },
    ];
    return slots.map((s, idx) => ({
        id: `slot-${idx + 1}`,
        label: s.label,
        date: s.date,
        time: s.time,
        fullIso: new Date(Date.now() + (idx + 1) * 3600 * 3000).toISOString(),
    }));
}
// Bilingual Pre-Session Intake Questions (English & Hindi)
export const INTAKE_QUESTIONS = {
    en: {
        welcomeTitle: 'Before we schedule your session',
        welcomeNotice: 'We would like to understand what kind of support would be most helpful for you. These questions are not a diagnosis. They help us prepare for your session and guide you toward an appropriate form of support.',
        privacyNotice: 'Your answers are confidential and shared solely with your chosen provider to ensure a supportive, prepared conversation. Comforting Corner is not an emergency hotline.',
        ageTitle: 'Safeguarding & Age Verification',
        ageSubtitle: 'Please select your age bracket:',
        age18Plus: 'I am 18 years of age or older',
        ageUnder18: 'I am under 18 years of age (Guardian consent guidance required)',
        guardianConsentNotice: 'Important for users under 18: Comforting Corner prioritizes your safety. Independent peer Buddy booking is restricted for minors in distress. We encourage connecting with a trusted parent or guardian, and our clinical therapists can provide supported adolescent care with guardian consent.',
        q1: {
            title: 'Question 1: What would you like support with?',
            subtitle: 'Select all that apply to you:',
            options: [
                'Stress or overthinking.',
                'Anxiety or persistent worry.',
                'Feeling low or sad.',
                'Loneliness or feeling disconnected.',
                'Academic or work pressure.',
                'Family difficulties.',
                'Relationship concerns.',
                'Grief or a significant loss.',
                'Sleep difficulties.',
                'Anger or emotional regulation.',
                'Confidence or self-esteem.',
                'Motivation or difficulty managing daily life.',
                'Something else.',
                "I'm not sure yet."
            ]
        },
        q2: {
            title: 'Question 2: How long have you been experiencing this?',
            subtitle: 'Select one option:',
            options: [
                'A few days.',
                'One to two weeks.',
                'Two to six weeks.',
                'One to three months.',
                'Three to six months.',
                'More than six months.',
                "I'm not sure."
            ]
        },
        q3: {
            title: 'Question 3: How often have you been experiencing it?',
            subtitle: 'Select one option:',
            options: [
                'Occasionally.',
                'A few days a week.',
                'Most days.',
                'Almost every day.',
                'It varies significantly.'
            ]
        },
        q4: {
            title: 'Question 4: How is this affecting your everyday life?',
            subtitle: 'Select one option:',
            options: [
                'It is manageable, but I would like support.',
                'It affects my mood, concentration, sleep, or relationships.',
                'It is making my usual daily activities difficult.',
                'I am struggling to manage everyday responsibilities.',
                "I'm not sure how to describe its impact."
            ]
        },
        q5: {
            title: 'Question 5: Have you spoken to anyone about this before?',
            subtitle: 'Select one option:',
            options: [
                'No, this would be my first time.',
                'I have spoken to a friend or family member.',
                'I have previously consulted a counsellor or mental-health professional.',
                'I am currently receiving professional support.',
                'Prefer not to say.'
            ]
        },
        q6: {
            title: 'Question 6: What would you most like from your session?',
            subtitle: 'Select one option:',
            options: [
                'Someone who listens without judging me.',
                'A better understanding of my feelings.',
                'Practical strategies for coping with everyday difficulties.',
                'Professional guidance and assessment.',
                'Help deciding what kind of support I need.',
                "I'm not sure yet."
            ]
        },
        q7: {
            title: 'Question 7: Is there anything else you’d like your provider to know?',
            subtitle: 'Optional note (up to 300 characters). You do not need to share trauma details.',
            placeholder: 'e.g. Prefer an unhurried, gentle conversation. Struggling with exam deadlines.'
        },
        suicideQuestion: {
            title: 'Safety Check: In the past few weeks, have you wished you were dead, felt that you would be better off not alive, or had thoughts of suicide?',
            subtitle: 'Please answer honestly. This helps us ensure you receive safe, appropriate care.',
            options: [
                'No.',
                'Yes.',
                "I'm not sure.",
                'Prefer not to answer.'
            ]
        },
        safetyFollowUp: {
            header: 'Thank you for sharing this with us. You deserve support, and we’re taking your response seriously. We’d like to check whether you need immediate help.',
            question: 'Are you having thoughts of suicide right now, or are you worried that you might act on these thoughts today?',
            options: ['Yes.', 'No.', "I'm not sure."]
        }
    },
    hi: {
        welcomeTitle: 'सत्र निर्धारित करने से पहले',
        welcomeNotice: 'हम समझना चाहते हैं कि आपके लिए किस प्रकार का सहयोग सबसे उपयोगी रहेगा। ये प्रश्न कोई निदान (डायग्नोसिस) नहीं हैं। ये आपके सत्र की तैयारी और सही मार्गदर्शन में सहायता करते हैं।',
        privacyNotice: 'आपकी जानकारी पूरी तरह गोपनीय है और केवल आपके चुने हुए प्रदाता के साथ साझा की जाती है। कम्फर्टिंग कॉर्नर कोई आपातकालीन सेवा नहीं है।',
        ageTitle: 'सुरक्षा एवं आयु सत्यापन',
        ageSubtitle: 'कृपया अपनी आयु सीमा चुनें:',
        age18Plus: 'मेरी आयु 18 वर्ष या उससे अधिक है',
        ageUnder18: 'मेरी आयु 18 वर्ष से कम है (अभिभावक सहमति मार्गदर्शन आवश्यक)',
        guardianConsentNotice: '18 वर्ष से कम उम्र के उपयोगकर्ताओं के लिए महत्वपूर्ण सूचना: कम्फर्टिंग कॉर्नर आपकी सुरक्षा को प्राथमिकता देता है। संकट की स्थिति में नाबालिगों के लिए स्वतंत्र बडी बुकिंग प्रतिबंधित है। हम माता-पिता या अभिभावक से संपर्क करने की सलाह देते हैं।',
        q1: {
            title: 'प्रश्न 1: आप किस विषय पर सहायता चाहते हैं?',
            subtitle: 'लागू होने वाले सभी विकल्प चुनें:',
            options: [
                'तनाव या अत्यधिक सोचना (Overthinking).',
                'चिंता या लगातार घबराहट (Anxiety).',
                'उदासी या मन का भारी होना (Feeling low).',
                'अकेलापन या सबसे अलग महसूस होना.',
                'पढ़ाई या कार्यस्थल का दबाव.',
                'पारिवारिक कठिनाइयाँ.',
                'संबंधों या रिश्तों से जुड़ी चिंताएँ.',
                'शोक या किसी प्रियजन का खोना.',
                'नींद की समस्या.',
                'क्रोध या भावनाओं का अनियंत्रित होना.',
                'आत्मविश्वास या स्वाभिमान की कमी.',
                'दैनिक जीवन संभालने में कठिनाई.',
                'कुछ और.',
                'मुझे अभी पक्का नहीं पता.'
            ]
        },
        q2: {
            title: 'प्रश्न 2: आप इसे कितने समय से अनुभव कर रहे हैं?',
            subtitle: 'एक विकल्प चुनें:',
            options: [
                'कुछ दिनों से.',
                'एक से दो सप्ताह.',
                'दो से छह सप्ताह.',
                'एक से तीन महीने.',
                'तीन से छह महीने.',
                'छह महीने से अधिक समय से.',
                'मुझे पक्का नहीं पता.'
            ]
        },
        q3: {
            title: 'प्रश्न 3: आप इसे कितनी बार महसूस करते हैं?',
            subtitle: 'एक विकल्प चुनें:',
            options: [
                'कभी-कभार.',
                'सप्ताह में कुछ दिन.',
                'ज्यादातर दिन.',
                'लगभग हर दिन.',
                'यह समय-समय पर बदलता रहता है.'
            ]
        },
        q4: {
            title: 'प्रश्न 4: यह आपके दैनिक जीवन को कैसे प्रभावित कर रहा है?',
            subtitle: 'एक विकल्प चुनें:',
            options: [
                'यह संभलने योग्य है, पर मुझे सहयोग चाहिए.',
                'यह मेरे मूड, एकाग्रता, नींद या रिश्तों पर असर डाल रहा है.',
                'यह मेरी सामान्य दिनचर्या को कठिन बना रहा है.',
                'मुझे दैनिक जिम्मेदारियाँ निभाने में संघर्ष करना पड़ रहा है.',
                'मुझे समझ नहीं आ रहा कि इसका प्रभाव कैसे बताऊँ.'
            ]
        },
        q5: {
            title: 'प्रश्न 5: क्या आपने पहले किसी से इस बारे में बात की है?',
            subtitle: 'एक विकल्प चुनें:',
            options: [
                'नहीं, यह मेरा पहला अनुभव होगा.',
                'मैंने किसी मित्र या परिवार के सदस्य से बात की है.',
                'मैंने पहले किसी काउंसलर या मानसिक स्वास्थ्य विशेषज्ञ से परामर्श लिया है.',
                'मैं वर्तमान में पेशेवर सहायता ले रहा/रही हूँ.',
                'बताना नहीं चाहते.'
            ]
        },
        q6: {
            title: 'प्रश्न 6: आप इस सत्र से सबसे अधिक क्या उम्मीद करते हैं?',
            subtitle: 'एक विकल्प चुनें:',
            options: [
                'कोई ऐसा जो बिना किसी निर्णय (Judgement) के सुने.',
                'मेरी भावनाओं की बेहतर समझ.',
                'दैनिक कठिनाइयों से निपटने की व्यावहारिक रणनीतियाँ.',
                'पेशेवर मार्गदर्शन और आकलन.',
                'यह तय करने में मदद कि मुझे किस प्रकार की सहायता चाहिए.',
                'मुझे अभी पक्का नहीं पता.'
            ]
        },
        q7: {
            title: 'प्रश्न 7: क्या कुछ और है जो आप अपने प्रदाता को बताना चाहते हैं?',
            subtitle: 'वैकल्पिक टिप्पणी (अधिकतम 300 अक्षर). आपको संवेदनशील विवरण साझा करने की आवश्यकता नहीं है.',
            placeholder: 'उदा. शांत और सहज गति से बातचीत पसंद है।'
        },
        suicideQuestion: {
            title: 'सुरक्षा जाँच: पिछले कुछ हफ्तों में, क्या आपने कभी सोचा कि आप जीवित न होते तो बेहतर होता, या आत्महत्या के विचार आए?',
            subtitle: 'कृपया ईमानदारी से उत्तर दें। इससे हम आपको सुरक्षित और उपयुक्त सहायता उपलब्ध करा पाते हैं।',
            options: [
                'नहीं.',
                'हाँ.',
                'मुझे पक्का नहीं पता.',
                'उत्तर नहीं देना चाहते.'
            ]
        },
        safetyFollowUp: {
            header: 'यह साझा करने के लिए धन्यवाद। आप सहायता के पात्र हैं, और हम आपकी बात को अत्यंत गंभीरता से ले रहे हैं। हम जानना चाहते हैं कि क्या आपको तुरंत सहायता की आवश्यकता है।',
            question: 'क्या इस समय आपके मन में आत्महत्या के विचार आ रहे हैं, या क्या आपको चिंता है कि आप आज कोई ऐसा कदम उठा सकते हैं?',
            options: ['हाँ.', 'नहीं.', 'मुझे पक्का नहीं पता.']
        }
    }
};
export const BUDDY_CHAT_PROMPTS = [
    "I have had a difficult day",
    "I just need someone to listen",
    "I am feeling overwhelmed with deadlines",
    "I am not sure how to explain it"
];
export const SIMULATED_BUDDY_RESPONSES = {
    default: [
        "Thank you for sharing that with me. Take all the time you need—there is no rush to explain everything perfectly.",
        "I hear you, and what you are feeling is completely valid. Would you like to say more about what has been weighing on you, or just sit with it for a moment?",
        "It takes courage to reach out when things feel heavy. I am right here listening with an open mind.",
        "That sounds exhausting to carry alone. You don't have to carry it all right now. What feels like the hardest part today?"
    ],
    difficult: [
        "I am so sorry today was tough. Difficult days have a way of draining all our energy. Would you like to vent about what happened, or would you prefer a quiet, gentle conversation?",
        "I'm here. Take a slow, deep breath if that feels okay right now. You made it through the day, and that in itself is significant."
    ],
    overwhelmed: [
        "Feeling overwhelmed is so intense—it feels like everything is demanding your attention all at once. Let's take it one small breath at a time. What is one thing right in front of you that we could look at?",
        "You don't have to solve everything today. Let's just focus on being right here in this moment."
    ],
    listen: [
        "I am completely here to listen. You have the floor, and you don't have to worry about entertaining me or holding back. Say whatever comes up.",
        "Sometimes simply having a witness to what you are experiencing brings a little breathing room. I am here for you."
    ],
    unsure: [
        "That is totally okay! You don't need a neat summary or a clear diagnosis. Thoughts often feel like tangled threads. We can just wander through whatever feels closest to the surface.",
        "Start wherever feels easiest. Even a single word or feeling is plenty."
    ]
};
