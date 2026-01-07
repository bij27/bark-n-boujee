// Mock user data
export const mockUser = {
  id: "1",
  email: "sarah.johnson@email.com",
  firstName: "Sarah",
  lastName: "Johnson",
  phone: "(555) 123-4567",
  createdAt: "2024-03-15",
};

// Mock pets
export const mockPets = [
  {
    id: "1",
    userId: "1",
    name: "Bella",
    species: "Dog",
    breed: "Golden Retriever",
    weight: 65,
    age: 4,
    photo: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400",
    notes:
      "Very friendly, loves treats. Sensitive skin - use hypoallergenic shampoo.",
    vaccineStatus: {
      rabies: { status: "current", expiresAt: "2025-06-15" },
      bordetella: { status: "current", expiresAt: "2025-02-28" },
      dhpp: { status: "expiring_soon", expiresAt: "2025-01-20" },
    },
  },
  {
    id: "2",
    userId: "1",
    name: "Max",
    species: "Dog",
    breed: "Poodle Mix",
    weight: 28,
    age: 2,
    photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
    notes: "Anxious around loud noises. Prefers female groomers.",
    vaccineStatus: {
      rabies: { status: "current", expiresAt: "2025-08-10" },
      bordetella: { status: "current", expiresAt: "2025-04-15" },
      dhpp: { status: "current", expiresAt: "2025-08-10" },
    },
  },
];

// Mock appointments
export const mockAppointments = [
  {
    id: "apt-1",
    userId: "1",
    petId: "1",
    petName: "Bella",
    service: "Full Grooming Package",
    groomer: "Jessica Smith",
    location: "Downtown Location",
    date: "2025-01-15T14:00:00",
    duration: 90,
    status: "upcoming",
    amount: 85.0,
    notes: "First time with Jessica",
  },
  {
    id: "apt-2",
    userId: "1",
    petId: "1",
    petName: "Bella",
    service: "Full Grooming Package",
    groomer: "Jessica Smith",
    location: "Downtown Location",
    date: "2024-12-18T10:00:00",
    duration: 90,
    status: "completed",
    amount: 85.0,
    notes: "",
  },
  {
    id: "apt-3",
    userId: "1",
    petId: "2",
    petName: "Max",
    service: "Bath & Brush",
    groomer: "Emily Chen",
    location: "North Side Location",
    date: "2024-12-10T15:30:00",
    duration: 60,
    status: "completed",
    amount: 55.0,
    notes: "",
  },
];

// Mock rewards data
export const mockRewards = {
  userId: "1",
  points: 2500,
  lifetimePoints: 3750,
  tier: "gold",
  tierProgress: {
    current: 2500,
    nextTier: 3000,
    nextTierName: "platinum",
  },
  transactions: [
    {
      id: "tx-1",
      date: "2024-12-18",
      description: "Grooming appointment - Bella",
      points: 1063,
      type: "earn",
    },
  ],
};

// Mock testimonials
export const mockTestimonials = [
  {
    id: "test-1",
    userId: "1",
    userName: "Sarah J.",
    petName: "Bella",
    petPhoto:
      "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=300",
    rating: 5,
    title: "Best grooming experience ever!",
    content: "Jessica was amazing with Bella! She was so gentle and patient.",
    date: "2024-12-20",
    groomer: "Jessica Smith",
    verified: true,
  },
  {
    id: "test-2",
    userName: "Mike T.",
    petName: "Charlie",
    petPhoto:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300",
    rating: 5,
    title: "Incredible service",
    content: "Emily is a true professional. Charlie looks fantastic!",
    date: "2024-12-15",
    groomer: "Emily Chen",
    verified: true,
  },
  {
    id: "test-3",
    userName: "Jennifer L.",
    petName: "Luna",
    petPhoto:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=300",
    rating: 5,
    title: "My go-to groomer!",
    content:
      "Consistently excellent service. The rewards program is great too!",
    date: "2024-12-10",
    groomer: "Jessica Smith",
    verified: true,
  },
];
