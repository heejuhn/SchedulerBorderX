import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import AppointmentList from './AppointmentList';

interface AppointmentSearchProps {
  appointments: Array<{
    id: number;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    notes?: string;
  }>;
}

const AppointmentSearch: React.FC<AppointmentSearchProps> = ({ appointments }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAppointments = appointments.filter(appointment => {
    const searchValue = searchTerm.toLowerCase();
    return (
      appointment.name.toLowerCase().includes(searchValue.trim()) ||
      appointment.email.toLowerCase().includes(searchValue.trim()) ||
      appointment.phone.includes(searchValue) ||
      appointment.date.includes(searchValue) ||
      appointment.time.includes(searchValue) ||
      appointment.notes?.toLowerCase().includes(searchValue)
    );
  });

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="w-6 h-6" />
          Search Appointments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder={`Search by anything...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {searchTerm && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3">Search Results</h3>
              <AppointmentList 
                appointments={filteredAppointments}
                emptyMessage="No appointments found matching your search criteria"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentSearch;