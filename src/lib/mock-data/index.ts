import { Service, Appointment, BusinessConfig, WorkingDay } from "@/types";

export interface RepairVendor {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  location: string;
  specialty: string;
  startingPrice: number;
  imageUrl: string;
  badges: string[];
}

export const mockBusinessConfig: BusinessConfig = {
  name: "BookEase India Multi-Service Booking Portal",
  industry: "repair",
  email: "support@bookease.in",
  phone: "+91 98765 43210",
  address: "DLF Cyber City, Phase 2, Gurugram, Delhi NCR, India",
  currency: "INR",
};

export const mockRepairVendors: RepairVendor[] = [
  {
    id: "rep-1",
    name: "iFixit Certified Express Repair",
    rating: 4.9,
    reviewsCount: 1240,
    location: "Connaught Place, New Delhi",
    specialty: "Apple iPhone, iPad & Mac Screen Repair",
    startingPrice: 899,
    imageUrl: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=800&q=80",
    badges: ["Same Day Repair", "OEM Parts", "6 Month Warranty"],
  },
  {
    id: "rep-2",
    name: "QuickFix Mobile & Laptop Hub",
    rating: 4.8,
    reviewsCount: 890,
    location: "Indiranagar, Bengaluru",
    specialty: "Samsung, OnePlus & Android Chip Level Repair",
    startingPrice: 699,
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    badges: ["Doorstep Pickup", "Free Diagnosis", "Best Price"],
  },
  {
    id: "rep-3",
    name: "DoctorGadget Premium Service Station",
    rating: 4.7,
    reviewsCount: 650,
    location: "Bandra West, Mumbai",
    specialty: "Water Damage, Battery & Motherboard Repair",
    startingPrice: 499,
    imageUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80",
    badges: ["No Fix No Fee", "Live Status Tracking", "Instant UPI Cashback"],
  },
];

export const mockServices: Service[] = [
  {
    id: "srv-1",
    name: "Smartphone Glass & Screen Replacement",
    description: "Original OEM AMOLED/LCD display replacement with touch calibration, scratch-resistance coating, and 6-month doorstep warranty.",
    durationMinutes: 45,
    price: 899,
    category: "Mobile Repair",
    industry: "repair",
    imageUrl: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-2",
    name: "High-Capacity Battery Replacement",
    description: "Original high-health battery replacement with battery cycle diagnostic and 1-year guarantee.",
    durationMinutes: 30,
    price: 699,
    category: "Mobile Repair",
    industry: "repair",
    imageUrl: "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-3",
    name: "Laptop Motherboard & Liquid Damage Repair",
    description: "Deep ultrasonic cleaning, micro-soldering, IC replacement, and thermal repasting for MacBooks and Windows laptops.",
    durationMinutes: 90,
    price: 1499,
    category: "Computer Repair",
    industry: "repair",
    imageUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-4",
    name: "Luxury Haircut, Beard Trim & Spa",
    description: "Premium hair styling, scalp massage, charcoal detox mask, and beard alignment by master stylists.",
    durationMinutes: 60,
    price: 499,
    category: "Salon & Grooming",
    industry: "salon",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-5",
    name: "Full Body Diagnostic & Doctor Consultation",
    description: "Comprehensive medical checkup including blood work review, ECG, oxygen levels, and doctor prescriptions.",
    durationMinutes: 45,
    price: 999,
    category: "Healthcare",
    industry: "doctor",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "srv-6",
    name: "1-on-1 Personalized IIT-JEE / NEET Tutoring",
    description: "Customized online or offline problem solving session for Physics, Chemistry, and Mathematics by top rankers.",
    durationMinutes: 60,
    price: 599,
    category: "Education",
    industry: "tutor",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
];

export const mockTimeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
  "07:00 PM",
];

export const mockUpiOptions = [
  { id: "gpay", name: "Google Pay (GPay)", icon: "🟢", cashback: "Get up to ₹50 Scratch Card" },
  { id: "phonepe", name: "PhonePe UPI", icon: "🟣", cashback: "Flat ₹25 Cashback on booking" },
  { id: "paytm", name: "Paytm UPI / Wallet", icon: "🔵", cashback: "Paytm First Points Enabled" },
  { id: "bhim", name: "BHIM UPI", icon: "🟧", cashback: "Direct Bank Transfer Verification" },
  { id: "cred", name: "Cred UPI / Pay", icon: "🖤", cashback: "Earn Cred Coins" },
];

export const mockAppointments: Appointment[] = [
  {
    id: "apt-101",
    serviceId: "srv-1",
    serviceName: "Smartphone Glass & Screen Replacement",
    customerName: "Aarav Sharma",
    customerEmail: "aarav@example.com",
    customerPhone: "+91 98111 22334",
    date: new Date().toISOString().split("T")[0],
    timeSlot: "10:00 AM",
    price: 899,
    status: "confirmed",
    createdAt: "2026-10-25T08:00:00Z",
  },
  {
    id: "apt-102",
    serviceId: "srv-5",
    serviceName: "Full Body Diagnostic & Doctor Consultation",
    customerName: "Priya Patel",
    customerEmail: "priya.p@example.com",
    customerPhone: "+91 98222 33445",
    date: new Date().toISOString().split("T")[0],
    timeSlot: "11:30 AM",
    price: 999,
    status: "confirmed",
    createdAt: "2026-10-26T10:30:00Z",
  },
];

export const mockWorkingDays: WorkingDay[] = [
  { day: "Monday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "Tuesday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "Wednesday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "Thursday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "Friday", isOpen: true, openTime: "09:00", closeTime: "20:00" },
  { day: "Saturday", isOpen: true, openTime: "09:00", closeTime: "21:00" },
  { day: "Sunday", isOpen: true, openTime: "10:00", closeTime: "18:00" },
];
