
import { useState } from "react";
import { Calendar, Bell, MessageSquare, Gift, Users, BarChart3, Settings, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BirthdayCalendar from "@/components/BirthdayCalendar";
import SmartReminders from "@/components/SmartReminders";
import MessageCenter from "@/components/MessageCenter";
import MediaStudio from "@/components/MediaStudio";
import NotificationCenter from "@/components/NotificationCenter";
import GiftIntegration from "@/components/GiftIntegration";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import MemoryBook from "@/components/MemoryBook";
import CollaborationHub from "@/components/CollaborationHub";
import PrivacySettings from "@/components/PrivacySettings";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'}`}>
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-purple-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Birthday Nexus AI
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your AI-Powered Birthday Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="rounded-full p-2"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <div className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">AI Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Calendar</span>
            </TabsTrigger>
            <TabsTrigger value="reminders" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Reminders</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span className="hidden sm:inline">Media</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="gifts" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span className="hidden sm:inline">Gifts</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="memory" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Memory</span>
            </TabsTrigger>
            <TabsTrigger value="collaboration" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Collab</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calendar">
            <BirthdayCalendar />
          </TabsContent>

          <TabsContent value="reminders">
            <SmartReminders />
          </TabsContent>

          <TabsContent value="messages">
            <MessageCenter />
          </TabsContent>

          <TabsContent value="media">
            <MediaStudio />
          </TabsContent>

          <TabsContent value="notifications">
            <NotificationCenter />
          </TabsContent>

          <TabsContent value="gifts">
            <GiftIntegration />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="memory">
            <MemoryBook />
          </TabsContent>

          <TabsContent value="collaboration">
            <CollaborationHub />
          </TabsContent>

          <TabsContent value="settings">
            <PrivacySettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
