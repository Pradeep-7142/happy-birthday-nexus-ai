
import { useState } from "react";
import { BookOpen, Camera, Heart, Star, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MemoryBook = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const memories = [
    {
      id: 1,
      person: "Sarah Johnson",
      date: "2024-07-15",
      type: "Birthday",
      photos: 5,
      messages: 12,
      gifts: ["Wireless Headphones", "Coffee Subscription"],
      rating: 5,
      notes: "Amazing surprise party! Sarah loved the vintage music theme.",
      culturalNote: "Remembered her preference for eco-friendly gifts"
    },
    {
      id: 2,
      person: "Mike Chen",
      date: "2023-12-22",
      type: "Birthday",
      photos: 8,
      messages: 7,
      gifts: ["Gaming Chair", "Tech Book Set"],
      rating: 4,
      notes: "Great celebration at the new restaurant downtown.",
      culturalNote: "Respected no gift wrapping due to minimalist lifestyle"
    },
    {
      id: 3,
      person: "Emma Wilson",
      date: "2024-03-08",
      type: "Birthday",
      photos: 12,
      messages: 15,
      gifts: ["Art Supplies", "Workshop Ticket"],
      rating: 5,
      notes: "Perfect art-themed celebration. The group painting was a hit!",
      culturalNote: "Incorporated British tea ceremony as requested"
    }
  ];

  const preferences = [
    {
      person: "Sarah Johnson",
      preferences: {
        communication: "Voice messages preferred",
        gifts: "Eco-friendly, experiences over things",
        timing: "Early morning celebrations",
        cultural: "Vegetarian food options"
      }
    },
    {
      person: "Mike Chen", 
      preferences: {
        communication: "Text messages, no calls",
        gifts: "Tech gadgets, books",
        timing: "Evening celebrations",
        cultural: "Minimalist approach, no wrapping"
      }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Digital Memory Book
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Celebration history, preferences, and cultural considerations
          </p>
        </div>
      </div>

      <Tabs defaultValue="memories" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="memories">Memories</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="cultural">Cultural Notes</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="memories" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {memories.map((memory) => (
              <Card key={memory.id} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-amber-600" />
                        {memory.person}
                      </CardTitle>
                      <CardDescription>
                        {memory.type} • {new Date(memory.date).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: memory.rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 rounded-lg">
                      <Camera className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm font-medium">{memory.photos}</p>
                      <p className="text-xs text-gray-500">Photos</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-3 rounded-lg">
                      <Heart className="w-5 h-5 text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-medium">{memory.messages}</p>
                      <p className="text-xs text-gray-500">Messages</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-3 rounded-lg">
                      <Star className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                      <p className="text-sm font-medium">{memory.gifts.length}</p>
                      <p className="text-xs text-gray-500">Gifts</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Celebration Notes</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {memory.notes}
                    </p>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">
                        🎁 Gifts Given:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {memory.gifts.map((gift, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {gift}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                      <p className="text-sm font-medium text-amber-700 dark:text-amber-300 mb-1">
                        🌍 Cultural Consideration:
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {memory.culturalNote}
                      </p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Full Memory
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {preferences.map((person, index) => (
              <Card key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    {person.person}
                  </CardTitle>
                  <CardDescription>Personal preferences and notes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(person.preferences).map(([key, value]) => (
                    <div key={key} className="border-l-4 border-l-green-500 pl-4">
                      <h5 className="font-medium capitalize text-sm">{key}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">🎯 AI Learning</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    AI continuously learns from successful celebrations to improve future recommendations
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">Patterns Learned:</span>
                      <span className="ml-2">47</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-700 dark:text-blue-300">Accuracy Rate:</span>
                      <span className="ml-2">89.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cultural" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-600" />
                Cultural Considerations
              </CardTitle>
              <CardDescription>Respectful celebration across different cultures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    culture: "Islamic Traditions",
                    considerations: [
                      "Avoid alcohol in gifts",
                      "Consider Halal food options",
                      "Respect prayer times for events"
                    ]
                  },
                  {
                    culture: "East Asian Customs",
                    considerations: [
                      "Red envelopes for monetary gifts",
                      "Avoid number 4 in dates/quantities",
                      "Group harmony over individual spotlight"
                    ]
                  },
                  {
                    culture: "Jewish Traditions",
                    considerations: [
                      "Consider Jewish calendar dates",
                      "Kosher food requirements",
                      "Sabbath observance timing"
                    ]
                  },
                  {
                    culture: "Latin American",
                    considerations: [
                      "Family-inclusive celebrations",
                      "Music and dancing important",
                      "Extended celebration times"
                    ]
                  }
                ].map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
                    <h4 className="font-semibold mb-3">{item.culture}</h4>
                    <ul className="space-y-1">
                      {item.considerations.map((consideration, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Celebration Timeline
              </CardTitle>
              <CardDescription>Your birthday celebration history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {memories.map((memory, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{memory.person}'s {memory.type}</h4>
                        <Badge variant="outline">
                          {new Date(memory.date).toLocaleDateString()}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {memory.notes}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{memory.photos} photos</span>
                        <span>{memory.messages} messages</span>
                        <span>{memory.gifts.length} gifts</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: memory.rating }, (_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MemoryBook;
