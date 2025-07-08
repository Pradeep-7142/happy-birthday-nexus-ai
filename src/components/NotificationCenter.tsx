
import { useState } from "react";
import { Bell, Mail, MessageCircle, Phone, Clock, Settings, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const NotificationCenter = () => {
  const [escalationLevel, setEscalationLevel] = useState([3]);

  const notificationChannels = [
    { id: "email", name: "Email", icon: Mail, active: true, color: "text-blue-600" },
    { id: "sms", name: "SMS", icon: MessageCircle, active: true, color: "text-green-600" },
    { id: "whatsapp", name: "WhatsApp", icon: MessageCircle, active: false, color: "text-green-500" },
    { id: "voice", name: "Voice Call", icon: Phone, active: false, color: "text-red-600" }
  ];

  const upcomingAlerts = [
    {
      id: 1,
      person: "Sarah Johnson",
      event: "Birthday",
      date: "July 15th",
      timeZone: "EST",
      channels: ["Email", "SMS"],
      escalation: "Medium",
      prepReminder: "July 12th - Gift reminder"
    },
    {
      id: 2,
      person: "Mike Chen",
      event: "Birthday",
      date: "July 22nd", 
      timeZone: "PST",
      channels: ["WhatsApp"],
      escalation: "Low",
      prepReminder: "July 19th - Message prep"
    },
    {
      id: 3,
      person: "Emma Wilson",
      event: "Birthday",
      date: "August 3rd",
      timeZone: "GMT",
      channels: ["Email", "Voice Call"],
      escalation: "High",
      prepReminder: "July 30th - Planning meeting"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Advanced Notification Center
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Multi-channel alerts with time-zone awareness and escalation
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Notification Settings */}
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-orange-600" />
              Channel Configuration
            </CardTitle>
            <CardDescription>Configure your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium">Active Channels</h4>
              {notificationChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-5 h-5 ${channel.color}`} />
                      <span className="font-medium">{channel.name}</span>
                    </div>
                    <Switch defaultChecked={channel.active} />
                  </div>
                );
              })}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Escalation Settings</h4>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Escalation Level</span>
                  <Badge variant="secondary">{escalationLevel[0]}/5</Badge>
                </div>
                <Slider
                  value={escalationLevel}
                  onValueChange={setEscalationLevel}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Higher levels send more frequent reminders through multiple channels
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Smart Features</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Time-Zone Awareness</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Smart Timing</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Prep Notifications</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Alerts */}
        <Card className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-red-600" />
              Scheduled Alerts
            </CardTitle>
            <CardDescription>Your upcoming notification timeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAlerts.map((alert) => (
                <div key={alert.id} className="border rounded-lg p-4 bg-gradient-to-r from-orange-50/50 to-red-50/50 dark:from-orange-900/10 dark:to-red-900/10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {alert.person}'s {alert.event}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {alert.date} • {alert.timeZone}
                      </p>
                    </div>
                    <Badge 
                      variant={alert.escalation === 'High' ? 'destructive' : alert.escalation === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {alert.escalation} Priority
                    </Badge>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-orange-700 dark:text-orange-300 mb-1">
                      📋 Pre-Birthday Prep:
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {alert.prepReminder}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {alert.channels.map((channel) => (
                        <Badge key={channel} variant="outline" className="text-xs">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        Reschedule
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-orange-600 to-red-600">
                        <Settings className="w-3 h-3 mr-1" />
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Multi-Channel Alert Demo */}
      <Card className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">⚡ Multi-Channel Escalation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Automatic escalation through multiple channels if initial reminders are missed
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium text-purple-700 dark:text-purple-300">Level 1:</span>
                  <p>Email notification</p>
                </div>
                <div>
                  <span className="font-medium text-blue-700 dark:text-blue-300">Level 2:</span>
                  <p>SMS + Email</p>
                </div>
                <div>
                  <span className="font-medium text-green-700 dark:text-green-300">Level 3:</span>
                  <p>WhatsApp + Push</p>
                </div>
                <div>
                  <span className="font-medium text-red-700 dark:text-red-300">Level 4:</span>
                  <p>Voice call backup</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              Test Escalation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationCenter;
