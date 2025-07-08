
import { useState } from "react";
import { Bell, Brain, Clock, Zap, Settings, Play, Pause } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const SmartReminders = () => {
  const [isAIActive, setIsAIActive] = useState(true);
  const [reminderIntensity, setReminderIntensity] = useState([7]);

  const mockReminders = [
    {
      id: 1,
      person: "Sarah Johnson",
      event: "Birthday",
      date: "July 15th",
      aiConfidence: 95,
      status: "scheduled",
      timing: "3 days before",
      channels: ["Email", "SMS", "Push"],
      aiSuggestion: "Send early morning for 23% higher engagement"
    },
    {
      id: 2,
      person: "Mike Chen",
      event: "Birthday",
      date: "July 22nd",
      aiConfidence: 87,
      status: "pending",
      timing: "1 week before",
      channels: ["WhatsApp", "Voice Call"],
      aiSuggestion: "Colleague relationship - suggest lunch meeting"
    },
    {
      id: 3,
      person: "Emma Wilson",
      event: "Birthday",
      date: "August 3rd",
      aiConfidence: 92,
      status: "draft",
      timing: "Custom timing",
      channels: ["Email", "Instagram"],
      aiSuggestion: "Family member - coordinate with siblings"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Smart Reminders
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Intelligent timing with sentiment analysis and auto-detection
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={isAIActive}
              onCheckedChange={setIsAIActive}
            />
            <span className="text-sm font-medium">AI Assistant</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Control Panel */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              AI Intelligence Center
            </CardTitle>
            <CardDescription>Configure your AI assistant behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Reminder Intensity</span>
                <Badge variant="secondary">{reminderIntensity[0]}/10</Badge>
              </div>
              <Slider
                value={reminderIntensity}
                onValueChange={setReminderIntensity}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-gray-500 mt-1">
                Higher intensity = more frequent reminders
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">AI Features Active</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-Detection</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sentiment Analysis</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Optimal Timing</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Voice Activation</span>
                  <Switch />
                </div>
              </div>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-medium text-sm">AI Status</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learning from 47 successful celebrations
              </p>
              <p className="text-xs text-green-600 mt-1">
                ✓ 94% accuracy in optimal timing predictions
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Active Reminders */}
        <Card className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600" />
              Smart Reminder Queue
            </CardTitle>
            <CardDescription>AI-optimized scheduling with sentiment analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockReminders.map((reminder) => (
                <div key={reminder.id} className="border rounded-lg p-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-900/10 dark:to-blue-900/10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {reminder.person}'s {reminder.event}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {reminder.date} • {reminder.timing}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={reminder.status === 'scheduled' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {reminder.status}
                      </Badge>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">AI Confidence</div>
                        <div className="font-bold text-green-600">{reminder.aiConfidence}%</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">
                      🤖 AI Suggestion:
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {reminder.aiSuggestion}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {reminder.channels.map((channel) => (
                        <Badge key={channel} variant="outline" className="text-xs">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Settings className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                        {reminder.status === 'scheduled' ? (
                          <><Pause className="w-3 h-3 mr-1" /> Pause</>
                        ) : (
                          <><Play className="w-3 h-3 mr-1" /> Activate</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Voice Activation Panel */}
      <Card className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">🎤 Voice-Activated Reminders</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                "Hey Nexus, remind me about Sarah's birthday next week"
              </p>
              <div className="flex gap-4 text-sm">
                <div>
                  <span className="font-medium text-green-700 dark:text-green-300">Voice Commands:</span>
                  <span className="ml-2">47 recognized</span>
                </div>
                <div>
                  <span className="font-medium text-blue-700 dark:text-blue-300">Success Rate:</span>
                  <span className="ml-2">96.3%</span>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600">
              Configure Voice
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartReminders;
