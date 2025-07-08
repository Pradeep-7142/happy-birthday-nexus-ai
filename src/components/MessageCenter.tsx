
import { useState } from "react";
import { MessageSquare, Wand2, Heart, Smile, Briefcase, Mic, Send, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

const MessageCenter = () => {
  const [message, setMessage] = useState("");
  const [selectedTone, setSelectedTone] = useState("casual");
  const [sentimentScore, setSentimentScore] = useState([75]);

  const toneOptions = [
    { id: "casual", label: "Casual", icon: Smile, color: "bg-green-500" },
    { id: "formal", label: "Formal", icon: Briefcase, color: "bg-blue-500" },
    { id: "funny", label: "Funny", icon: Heart, color: "bg-pink-500" }
  ];

  const aiGeneratedMessages = [
    {
      tone: "casual",
      message: "Hey Sarah! 🎉 Another year of being absolutely awesome! Hope your special day is filled with all your favorite things. Can't wait to celebrate with you! 🎂✨",
      sentiment: 85,
      engagement: "High"
    },
    {
      tone: "formal",
      message: "Dear Sarah, Wishing you a very happy birthday and a wonderful year ahead. May this new chapter bring you joy, success, and all the happiness you deserve.",
      sentiment: 78,
      engagement: "Medium"
    },
    {
      tone: "funny",
      message: "Happy Birthday Sarah! 🎈 You're not getting older, you're just becoming a classic! Like fine wine... or vintage cheese 🧀 Let's party! 🥳",
      sentiment: 92,
      engagement: "Very High"
    }
  ];

  const generateMessage = () => {
    console.log("Generating AI message for tone:", selectedTone);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Message Customization Center
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            AI-powered message generation with sentiment analysis
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message Composer */}
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-green-600" />
              Message Composer
            </CardTitle>
            <CardDescription>Create or generate personalized birthday messages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Tone Selection */}
            <div>
              <h4 className="font-medium mb-3">Select Message Tone</h4>
              <div className="grid grid-cols-3 gap-2">
                {toneOptions.map((tone) => {
                  const IconComponent = tone.icon;
                  return (
                    <Button
                      key={tone.id}
                      variant={selectedTone === tone.id ? "default" : "outline"}
                      onClick={() => setSelectedTone(tone.id)}
                      className="flex flex-col items-center gap-2 h-auto py-3"
                    >
                      <div className={`w-8 h-8 rounded-full ${tone.color} flex items-center justify-center`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">{tone.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Manual Message Input */}
            <div>
              <h4 className="font-medium mb-2">Type Your Message</h4>
              <Textarea
                placeholder="Write your personal birthday message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-32 bg-white/80 dark:bg-gray-700/80"
              />
            </div>

            {/* AI Generation Controls */}
            <div className="flex gap-2">
              <Button 
                onClick={generateMessage}
                className="flex-1 bg-gradient-to-r from-green-600 to-blue-600"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Generate AI Message
              </Button>
              <Button variant="outline">
                <Mic className="w-4 h-4" />
              </Button>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">Sentiment Score</span>
                <Badge variant="secondary">{sentimentScore[0]}%</Badge>
              </div>
              <Slider
                value={sentimentScore}
                onValueChange={setSentimentScore}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                AI Analysis: {sentimentScore[0] > 80 ? "Very Positive" : sentimentScore[0] > 60 ? "Positive" : "Neutral"} tone detected
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-purple-600" />
              AI-Generated Suggestions
            </CardTitle>
            <CardDescription>Smart message suggestions based on relationship context</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="suggestions" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="suggestions" className="space-y-4 mt-4">
                {aiGeneratedMessages.map((msg, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="capitalize">
                        {msg.tone}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Sentiment: {msg.sentiment}%
                        </Badge>
                        <Badge 
                          variant={msg.engagement === "Very High" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {msg.engagement}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {msg.message}
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <RefreshCw className="w-3 h-3 mr-1" />
                        Regenerate
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                        <Send className="w-3 h-3 mr-1" />
                        Use This
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="templates" className="mt-4">
                <div className="space-y-3">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Pre-built templates for different relationships
                  </div>
                  {["Family Member", "Close Friend", "Colleague", "Acquaintance"].map((category) => (
                    <div key={category} className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                      <h5 className="font-medium">{category}</h5>
                      <p className="text-xs text-gray-500 mt-1">3 customizable templates available</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Check Feature */}
      <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">🔍 Pre-Send Sentiment Check</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                AI analyzes your message sentiment before sending to ensure positive impact
              </p>
              <div className="flex gap-4 text-sm">
                <div>
                  <span className="font-medium text-yellow-700 dark:text-yellow-300">Messages Analyzed:</span>
                  <span className="ml-2">1,247</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700 dark:text-orange-300">Positive Rate:</span>
                  <span className="ml-2">94.7%</span>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-yellow-600 to-orange-600">
              Enable Auto-Check
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageCenter;
