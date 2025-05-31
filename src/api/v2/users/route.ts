export const users = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    email: "john@example.com",
    fullName: "John Smith",
    createdAt: "2024-01-15T08:30:00Z",
    name: {
      first: "John",
      last: "Smith",
    },
    status: "active",
    lastLoginAt: "2024-03-15T09:20:00Z",
    profile: {
      avatar: "https://assets.example.com/avatars/john.jpg",
      title: "Senior Developer",
      department: "Engineering",
    },
    preferences: {
      language: "en-US",
      timezone: "America/New_York",
      emailNotifications: true,
    },
  },
  {
    id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    email: "jane@example.com",
    fullName: "Jane Wilson",
    createdAt: "2024-02-20T14:15:00Z",
    name: {
      first: "Jane",
      last: "Wilson",
      middle: "Elizabeth",
    },
    status: "active",
    lastLoginAt: "2024-03-14T16:45:00Z",
    profile: {
      avatar: null,
      title: "Product Manager",
      department: "Product",
    },
    preferences: {
      language: "en-GB",
      timezone: "Europe/London",
      emailNotifications: false,
    },
  },
];
