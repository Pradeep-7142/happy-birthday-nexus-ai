
import { useState } from "react";
import { Calendar, Plus, Search, Filter, MapPin, Cake, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const BirthdayCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  const mockBirthdays = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "2024-07-15",
      age: 28,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b512c6a/150x150",
      relationship: "Close Friend",
      timezone: "EST",
      preferences: ["Flowers", "Books"],
      isVIP: true
    },
    {
      id: 2,
      name: "Mike Chen",
      date: "2024-07-22",
      age: 34,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d/150x150",
      relationship: "Colleague",
      timezone: "PST",
      preferences: ["Tech Gadgets", "Coffee"],
      isVIP: false
    },
    {
      id: 3,
      name: "Emma Wilson",
      date: "2024-08-03",
      age: 25,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80/150x150",
      relationship: "Family",
      timezone: "GMT",
      preferences: ["Art", "Travel"],
      isVIP: true
    }
  ];

  const upcomingBirthdays = mockBirthdays.filter(birthday => 
    birthday.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Birthday Calendar
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            AI-powered birthday tracking with smart insights
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Birthday
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search birthdays, names, or relationships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Widget */}
        <Card className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-purple-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              Interactive Calendar
            </CardTitle>
            <CardDescription>
              Visual birthday heatmap with AI-generated insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-medium text-gray-500 p-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const date = i + 1;
                const hasBirthday = [15, 22, 3].includes(date);
                return (
                  <div
                    key={i}
                    className={`
                      aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all
                      ${hasBirthday 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }
                    `}
                  >
                    <span className="text-sm font-medium">{date <= 31 ? date : ''}</span>
                    {hasBirthday && (
                      <Cake className="w-3 h-3 absolute mt-6" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Birthdays */}
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-purple-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Upcoming Birthdays
            </CardTitle>
            <CardDescription>
              Next 30 days with AI timing suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingBirthdays.map((birthday) => (
              <div key={birthday.id} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <img
                  src={birthday.photo}
                  alt={birthday.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                      {birthday.name}
                    </p>
                    {birthday.isVIP && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {birthday.relationship} • Turning {birthday.age}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{birthday.timezone}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">
                    {new Date(birthday.date).toLocaleDateString()}
                  </Badge>
                  <p className="text-xs text-gray-500">
                    AI Reminder: 3 days before
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-700">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">🎯 AI Birthday Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-300">This Month</p>
                  <p>3 birthdays • Peak: July 22nd</p>
                </div>
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-300">Best Send Time</p>
                  <p>9:00 AM local time for maximum engagement</p>
                </div>
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-300">Relationship Mapping</p>
                  <p>Family: 33% • Friends: 45% • Colleagues: 22%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BirthdayCalendar;
