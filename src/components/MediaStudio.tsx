
import { useState } from "react";
import { Camera, Video, Image, Wand2, Upload, Play, Palette, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const MediaStudio = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("birthday-card");

  const mediaTemplates = [
    {
      id: "birthday-card",
      name: "Birthday Card",
      type: "Image",
      preview: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3/300x200",
      aiGenerated: true
    },
    {
      id: "meme",
      name: "Funny Meme",
      type: "Image",
      preview: "https://images.unsplash.com/photo-1518709268805-4e9042af2176/300x200",
      aiGenerated: true
    },
    {
      id: "collage",
      name: "Photo Collage",
      type: "Image",
      preview: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0/300x200",
      aiGenerated: false
    },
    {
      id: "video-wish",
      name: "Video Wish",
      type: "Video",
      preview: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30/300x200",
      aiGenerated: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Media Studio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Create, enhance, and customize birthday media with AI
          </p>
        </div>
      </div>

      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="enhance">Enhance</TabsTrigger>
          <TabsTrigger value="voice">Voice & Video</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Generation Panel */}
            <Card className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  AI-Powered Design Generator
                </CardTitle>
                <CardDescription>Generate custom birthday designs with AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {mediaTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`relative border-2 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        selectedTemplate === template.id
                          ? "border-purple-500 ring-2 ring-purple-200"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <img
                        src={template.preview}
                        alt={template.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <h3 className="font-medium text-white text-sm">{template.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {template.type}
                          </Badge>
                          {template.aiGenerated && (
                            <Badge className="text-xs bg-purple-600">
                              <Sparkles className="w-3 h-3 mr-1" />
                              AI
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">AI Customization Options</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Theme</span>
                      <select className="px-2 py-1 rounded border text-xs">
                        <option>Elegant</option>
                        <option>Fun & Colorful</option>
                        <option>Minimalist</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Color Scheme</span>
                      <div className="flex gap-1">
                        {["bg-pink-400", "bg-purple-400", "bg-blue-400", "bg-green-400"].map((color) => (
                          <div key={color} className={`w-6 h-6 rounded-full ${color} cursor-pointer border-2 border-white`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Wand2 className="w-4 h-4 mr-2" />
                  Generate AI Design
                </Button>
              </CardContent>
            </Card>

            {/* Upload & Manual Options */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-blue-600" />
                  Upload Media
                </CardTitle>
                <CardDescription>Add your own images and videos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Drag & drop your files here
                  </p>
                  <Button variant="outline" size="sm">
                    Browse Files
                  </Button>
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="w-4 h-4 mr-2" />
                    Record Video
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Image className="w-4 h-4 mr-2" />
                    Create Collage
                  </Button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">AI Enhancement</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Automatically improve photo quality, add filters, and optimize for birthday sharing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="enhance" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-green-600" />
                AI Photo Enhancement
              </CardTitle>
              <CardDescription>Enhance your photos with AI-powered tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Enhancement Options</h3>
                  <div className="space-y-2">
                    {[
                      "Auto Color Correction",
                      "Background Blur",
                      "Brightness Optimization",
                      "Noise Reduction",
                      "Face Enhancement",
                      "Festive Filters"
                    ].map((option) => (
                      <div key={option} className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">{option}</span>
                        <Button size="sm" variant="outline">Apply</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-gray-500">Preview will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-red-600" />
                  Voice & Video Messages
                </CardTitle>
                <CardDescription>Record and schedule personalized messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500">
                    <Video className="w-6 h-6" />
                    <span className="text-sm">Record Video</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                    <Play className="w-6 h-6" />
                    <span className="text-sm">Voice Message</span>
                  </Button>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">AI Features</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Voice Cloning (Premium)</span>
                      <Badge variant="secondary">AI</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>AR Filters & Avatars</span>
                      <Badge variant="secondary">AI</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Auto Scheduling</span>
                      <Badge className="bg-green-600">Active</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Scheduled Messages</CardTitle>
                <CardDescription>Manage your voice and video messages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Sarah's Birthday Video", type: "Video", scheduled: "July 15, 9:00 AM" },
                    { name: "Mike's Voice Message", type: "Voice", scheduled: "July 22, 8:30 AM" },
                    { name: "Emma's AR Card", type: "AR Video", scheduled: "August 3, 10:00 AM" }
                  ].map((message, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h5 className="font-medium text-sm">{message.name}</h5>
                        <p className="text-xs text-gray-500">{message.type} • {message.scheduled}</p>
                      </div>
                      <Button size="sm" variant="outline">Edit</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Media Gallery</CardTitle>
              <CardDescription>Your created and uploaded birthday media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Image className="w-8 h-8 text-gray-400" />
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

export default MediaStudio;
