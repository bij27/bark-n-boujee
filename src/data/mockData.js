// Mock user data - BIJAN'S ACCOUNT
export const mockUser = {
  id: '1',
  email: '12b.jad@gmail.com',
  firstName: 'Bijan',
  lastName: 'Jadhavji',
  phone: '(818) 963-3965',
  createdAt: '2025-01-08',
};

// Mock pets - CHER
export const mockPets = [
  {
    id: '1',
    userId: '1',
    name: 'Cher',
    species: 'Dog',
    breed: 'German Shepherd Mix',
    weight: 60,
    age: 5,
    photo: '/src/assets/images/cher.jpg', // We'll save the uploaded image here
    notes: 'Scared of getting nails clipped!',
    vaccineStatus: {
      rabies: { status: 'current', expiresAt: '2025-11-15' },
      bordetella: { status: 'current', expiresAt: '2025-09-20' },
      dhpp: { status: 'current', expiresAt: '2025-10-05' },
    }
  }
];

// Mock appointments - BIJAN'S HISTORY
export const mockAppointments = [
  {
    id: 'apt-1',
    userId: '1',
    petId: '1',
    petName: 'Cher',
    service: 'Full Grooming Package',
    groomer: 'Austin & Ivan',
    location: 'Downtown Location',
    date: '2025-02-15T14:00:00',
    duration: 90,
    status: 'upcoming',
    amount: 85.00,
    notes: 'Take extra care with nail trimming - she gets nervous!',
  },
  {
    id: 'apt-2',
    userId: '1',
    petId: '1',
    petName: 'Cher',
    service: 'Full Grooming Package',
    groomer: 'Austin & Ivan',
    location: 'Downtown Location',
    date: '2024-12-10T10:00:00',
    duration: 90,
    status: 'completed',
    amount: 85.00,
    notes: 'They did amazing with her nails!',
    beforePhoto: '/src/assets/images/cher.jpg',
    afterPhoto: '/src/assets/images/cher.jpg',
  },
];

// Mock rewards data - BIJAN'S POINTS (Based on 1 appointment at $85 = 850 points)
export const mockRewards = {
  userId: '1',
  points: 850,
  lifetimePoints: 850,
  tier: 'bronze',
  tierProgress: {
    current: 850,
    nextTier: 5000,
    nextTierName: 'silver',
  },
  transactions: [
    {
      id: 'tx-1',
      date: '2024-12-10',
      description: 'Grooming appointment - Cher (850 base points)',
      points: 850,
      type: 'earn',
      appointmentId: 'apt-2',
    },
  ],
};

// Rewards catalog
export const rewardsCatalog = [
  {
    id: 'reward-1',
    name: '$5 Off Next Visit',
    description: 'Save $5 on your next grooming appointment',
    pointsCost: 500,
    value: 5,
    category: 'discount',
    icon: 'tag',
  },
  {
    id: 'reward-2',
    name: '$10 Off Next Visit',
    description: 'Save $10 on your next grooming appointment',
    pointsCost: 1000,
    value: 10,
    category: 'discount',
    icon: 'tag',
  },
  {
    id: 'reward-3',
    name: 'Free Nail Trim',
    description: 'Complimentary nail trim service (normally $25)',
    pointsCost: 750,
    value: 25,
    category: 'service',
    icon: 'scissors',
  },
  {
    id: 'reward-4',
    name: 'Free Bath & Brush',
    description: 'Complete bath and brush service (normally $55)',
    pointsCost: 2000,
    value: 55,
    category: 'service',
    icon: 'sparkles',
  },
  {
    id: 'reward-5',
    name: '$25 Off Next Visit',
    description: 'Save $25 on your next grooming appointment',
    pointsCost: 2500,
    value: 25,
    category: 'discount',
    icon: 'tag',
  },
];

// Mock staff/groomers
export const mockStaff = [
  {
    id: 'staff-1',
    name: 'Austin',
    title: 'Master Groomer',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Austin specializes in nervous dogs and has a special talent for nail trimming. With years of experience, he knows how to make every pet feel safe and comfortable.',
    specialties: ['Nervous Dogs', 'Nail Trimming', 'German Shepherds', 'Large Breeds'],
    yearsExperience: 8,
    location: 'Downtown Location',
    rating: 5.0,
    reviewCount: 156,
  },
  {
    id: 'staff-2',
    name: 'Ivan',
    title: 'Senior Groomer',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    bio: 'Ivan brings patience and expertise to every grooming session. He excels at working with anxious pets and has a calming presence that dogs love.',
    specialties: ['Anxious Dogs', 'Gentle Handling', 'Full Grooming', 'Deshedding'],
    yearsExperience: 7,
    location: 'Downtown Location',
    rating: 5.0,
    reviewCount: 143,
  },
  {
    id: 'staff-3',
    name: 'Jessica Smith',
    title: 'Groomer',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Jessica loves working with all breeds and sizes. She has a gentle touch and endless patience with every pet that comes through the door.',
    specialties: ['Golden Retrievers', 'Small Breeds', 'Puppy Grooming', 'Show Cuts'],
    yearsExperience: 5,
    location: 'Downtown Location',
    rating: 4.9,
    reviewCount: 98,
  },
];

// Mock testimonials - BIJAN'S REVIEW + OTHERS
export const mockTestimonials = [
  {
    id: 'test-1',
    userId: '1',
    userName: 'Bijan J.',
    petName: 'Cher',
    petPhoto: '/src/assets/images/cher.jpg',
    rating: 5,
    title: 'The ONLY place I trust with Cher!',
    content: 'Austin and Ivan are perfect for what they do! They\'re the ONLY ones that were able to clip my dog\'s nails after she suffered a traumatic experience as a puppy. They\'re patient and know exactly what they\'re doing - plus they\'re just amazing people! I highly recommend this shop to anyone looking for their new go-to.',
    date: '2024-12-12',
    groomer: 'Austin & Ivan',
    verified: true,
  },
  {
    id: 'test-2',
    userId: '2',
    userName: 'Sarah M.',
    petName: 'Bella',
    petPhoto: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=300',
    rating: 5,
    title: 'Best grooming experience!',
    content: 'The team was amazing with Bella! She came out looking absolutely beautiful and seemed so relaxed. Will definitely be back!',
    date: '2024-12-20',
    groomer: 'Austin',
    verified: true,
  },
  {
    id: 'test-3',
    userName: 'Mike T.',
    petName: 'Charlie',
    petPhoto: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300',
    rating: 5,
    title: 'Incredible service',
    content: 'Ivan is a true professional. Charlie looks fantastic and you can tell he had a positive experience.',
    date: '2024-12-15',
    groomer: 'Ivan',
    verified: true,
  },
];

// Services data
export const mockServices = [
  {
    id: 'svc-1',
    name: 'Full Grooming Package',
    description: 'Complete grooming including bath, haircut, nail trim, ear cleaning, and teeth brushing',
    duration: '90-120 min',
    priceRange: '$75-$120',
    popular: true,
  },
  {
    id: 'svc-2',
    name: 'Bath & Brush',
    description: 'Thorough bath, blow dry, and brush out',
    duration: '45-60 min',
    priceRange: '$45-$65',
    popular: true,
  },
  {
    id: 'svc-3',
    name: 'Nail Trim',
    description: 'Professional nail trimming and filing with extra care for nervous pets',
    duration: '15-20 min',
    priceRange: '$20-$25',
    popular: false,
  },
  {
    id: 'svc-4',
    name: 'De-Shedding Treatment',
    description: 'Special treatment to remove loose undercoat and reduce shedding',
    duration: '60 min',
    priceRange: '$60-$85',
    popular: true,
  },
  {
    id: 'svc-5',
    name: 'Teeth Cleaning',
    description: 'Professional dental cleaning',
    duration: '30 min',
    priceRange: '$35-$45',
    popular: false,
  },
];

// Locations data
export const mockLocations = [
  {
    id: 'loc-1',
    name: 'Downtown Location',
    address: '123 Main Street',
    city: 'Chicago',
    state: 'IL',
    zip: '60601',
    phone: '(312) 825-5921',
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 5:00 PM',
      sunday: 'Closed',
    },
    staff: ['staff-1', 'staff-2', 'staff-3'],
  },
];

// Rewards tier configuration
export const tierConfig = {
  bronze: {
    name: 'Bronze',
    minPoints: 0,
    multiplier: 1.0,
    color: 'from-amber-700 to-amber-900',
    benefits: ['Earn 10 points per $1', 'Birthday reward', 'Exclusive offers'],
  },
  silver: {
    name: 'Silver',
    minPoints: 5000,
    multiplier: 1.25,
    color: 'from-gray-400 to-gray-600',
    benefits: ['Earn 12.5 points per $1', 'Priority booking', 'Birthday reward', 'Exclusive offers'],
  },
  gold: {
    name: 'Gold',
    minPoints: 15000,
    multiplier: 1.5,
    color: 'from-yellow-400 to-yellow-600',
    benefits: ['Earn 15 points per $1', 'Priority booking', 'Free nail trim monthly', 'Birthday reward', 'Exclusive offers'],
  },
  platinum: {
    name: 'Platinum',
    minPoints: 30000,
    multiplier: 2.0,
    color: 'from-purple-400 to-purple-600',
    benefits: ['Earn 20 points per $1', 'VIP priority booking', 'Free nail trim monthly', 'Free add-on service quarterly', 'Birthday reward', 'Exclusive offers'],
  },
};

// Mock admin users
export const mockAdminUsers = [
  {
    id: 'admin-1',
    email: 'admin@barknboujee.com',
    password: 'admin123',
    firstName: 'Sarah',
    lastName: 'Manager',
    role: 'admin',
    location: 'Downtown Location',
  },
  {
    id: 'groomer-1',
    email: 'austin@barknboujee.com',
    password: 'groomer123',
    firstName: 'Austin',
    lastName: 'Smith',
    role: 'groomer',
    location: 'Downtown Location',
  },
  {
    id: 'groomer-2',
    email: 'ivan@barknboujee.com',
    password: 'groomer123',
    firstName: 'Ivan',
    lastName: 'Rodriguez',
    role: 'groomer',
    location: 'Downtown Location',
  },
];

// Mock appointments with more detail for admin view
export const mockAdminAppointments = [
  {
    id: 'apt-1',
    customerId: '1',
    customerName: 'Bijan Jadhavji',
    customerPhone: '(818) 963-3965',
    customerEmail: '12b.jad@gmail.com',
    petId: '1',
    petName: 'Cher',
    petBreed: 'German Shepherd Mix',
    petPhoto: '/src/assets/images/cher.jpg',
    service: 'Full Grooming Package',
    groomer: 'Austin & Ivan',
    groomerId: 'groomer-1',
    location: 'Downtown Location',
    date: '2025-02-15T14:00:00',
    duration: 90,
    status: 'upcoming',
    currentStage: 0,
    amount: 85.00,
    notes: 'Scared of getting nails clipped! Take extra care.',
    messages: [],
  },
  {
    id: 'apt-2',
    customerId: '2',
    customerName: 'Mike Thompson',
    customerPhone: '(555) 234-5678',
    customerEmail: 'mike.t@email.com',
    petId: '3',
    petName: 'Charlie',
    petBreed: 'Poodle',
    petPhoto: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
    service: 'Bath & Brush',
    groomer: 'Ivan',
    groomerId: 'groomer-2',
    location: 'Downtown Location',
    date: '2025-01-08T15:00:00',
    duration: 60,
    status: 'upcoming',
    currentStage: 0,
    amount: 55.00,
    notes: 'Anxious around loud noises',
    messages: [],
  },
];