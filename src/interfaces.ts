export interface Job {
    name: String,
    id: String,
    email: String, 
    phone: String,
    title: String,
    salary: String,
    address: String,
    benefits: String[],
    location: {
        lat: Number, 
        long: Number
    },
    pictures: string[],
    createdAt: String,
    updatedAt: String,
    description: String,
    employment_type: String[]
}