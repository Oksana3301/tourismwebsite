'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plus, Trash2, Save, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface DayPlan {
  id: string;
  title: string;
  description: string;
  activities: string[];
  duration: string;
}

interface Itinerary {
  tripName: string;
  destination: string;
  startDate: string;
  endDate: string;
  days: DayPlan[];
}

interface TripPlannerProps {
  onSave?: (itinerary: Itinerary) => void;
}

const TripPlanner = ({ onSave }: TripPlannerProps) => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState<DayPlan[]>([
    {
      id: '1',
      title: 'Day 1: Arrival & City Tour',
      description: 'Explore the city center and local attractions',
      activities: ['Airport pickup', 'City tour', 'Local lunch', 'Museum visit'],
      duration: 'Full day'
    }
  ]);

  const [newActivity, setNewActivity] = useState({ dayId: '', activity: '' });

  const addDay = () => {
    const newDay: DayPlan = {
      id: Date.now().toString(),
      title: `Day ${days.length + 1}: New Day`,
      description: '',
      activities: [],
      duration: 'Full day'
    };
    setDays([...days, newDay]);
  };

  const removeDay = (id: string) => {
    if (days.length > 1) {
      setDays(days.filter(day => day.id !== id));
    }
  };

  const updateDay = (id: string, field: keyof DayPlan, value: string) => {
    setDays(days.map(day => 
      day.id === id ? { ...day, [field]: value } : day
    ));
  };

  const addActivity = () => {
    if (newActivity.dayId && newActivity.activity) {
      setDays(days.map(day => 
        day.id === newActivity.dayId 
          ? { ...day, activities: [...day.activities, newActivity.activity] }
          : day
      ));
      setNewActivity({ dayId: '', activity: '' });
    }
  };

  const removeActivity = (dayId: string, index: number) => {
    setDays(days.map(day => 
      day.id === dayId 
        ? { ...day, activities: day.activities.filter((_, i) => i !== index) }
        : day
    ));
  };

  const saveItinerary = () => {
    const itinerary = {
      tripName,
      destination,
      startDate,
      endDate,
      days
    };
    
    if (onSave) {
      onSave(itinerary);
    }
    
    // In a real app, this would save to a database
    console.log('Saved itinerary:', itinerary);
    
    // Show success message
    alert('Itinerary saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-blue-600" />
            <span>Create Your Trip</span>
          </CardTitle>
          <CardDescription>
            Plan your perfect West Sumatra adventure day by day
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="tripName">Trip Name</Label>
              <Input
                id="tripName"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="My West Sumatra Adventure"
              />
            </div>
            
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g., Mentawai Islands, Padang, Bukittinggi"
              />
            </div>
            
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Your Itinerary</h2>
          <Button onClick={addDay} className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Day</span>
          </Button>
        </div>

        {days.map((day, index) => (
          <motion.div
            key={day.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <Input
                        value={day.title}
                        onChange={(e) => updateDay(day.id, 'title', e.target.value)}
                        className="text-lg font-semibold border-none p-0 focus-visible:ring-0"
                      />
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {day.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {days.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDay(day.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={day.description}
                    onChange={(e) => updateDay(day.id, 'description', e.target.value)}
                    placeholder="Describe this day's activities and highlights..."
                    rows={2}
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Activities</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        value={newActivity.activity}
                        onChange={(e) => setNewActivity({...newActivity, activity: e.target.value})}
                        placeholder="Add activity"
                        className="w-40"
                      />
                      <select
                        value={newActivity.dayId}
                        onChange={(e) => setNewActivity({...newActivity, dayId: e.target.value})}
                        className="rounded-md border border-gray-300 px-2 py-1 text-sm"
                      >
                        <option value="">Select day</option>
                        {days.map(d => (
                          <option key={d.id} value={d.id}>{d.title}</option>
                        ))}
                      </select>
                      <Button onClick={addActivity} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm">{activity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeActivity(day.id, actIndex)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Button onClick={saveItinerary} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4" />
          <span>Save Itinerary</span>
        </Button>
      </div>
    </div>
  );
};

export default TripPlanner;