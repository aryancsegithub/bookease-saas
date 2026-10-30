export type IndustryType = "salon" | "doctor" | "tutor" | "consultant" | "fitness" | "repair";

export interface Service {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  category: string;
  industry: IndustryType;
  imageUrl?: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  timeSlot: string;
  price: number;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
}

export interface WorkingDay {
  day: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
}

export interface BusinessConfig {
  name: string;
  industry: IndustryType;
  email: string;
  phone: string;
  address: string;
  currency: string;
}
