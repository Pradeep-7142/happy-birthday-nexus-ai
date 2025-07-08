
import { useState } from "react";
import { Gift, ShoppingCart, Users, DollarSign, Star, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GiftIntegration = () => {
  const [selectedGift, setSelectedGift] = useState(null);

  const aiGiftSuggestions = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      rating: 4.5,
      category: "Electronics",
      source: "Amazon",
      aiReason: "Based on Mike's Spotify activity and tech interests",
      confidence: 94,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e/150x150"
    },
    {
      id: 2,
      name: "Art Supply Kit",
      price: 45.50,
      rating: 4.8,
      category: "Art & Crafts",
      source: "Etsy",
      aiReason: "Emma frequently posts art on Instagram",
      confidence: 87,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0/150x150"
    },
    {
      id: 3,
      name: "Coffee Subscription",
      price: 24.99,
      rating: 4.6,
      category: "Food & Drink",
      source: "Local Partner",
      aiReason: "Sarah mentions coffee daily on social media",  
      confidence: 91,
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e/150x150"
    }
  ];

  const groupGifts = [
    {
      id: 1,
      person: "Sarah Johnson",
      gift: "Weekend Spa Package",
      targetAmount: 200,
      currentAmount: 145,
      contributors: 8,
      daysLeft: 12
    },
    {
      id: 2,
      person: "Mike Chen",
      gift: "Gaming Chair",
      targetAmount: 300,
      currentAmount: 180,
      contributors: 5,
      daysLeft: 18
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Gift Integration Hub
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            AI-powered gift suggestions with group collaboration
          </p>
        </div>
      </div>

      <Tabs defaultValue="suggestions" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          <TabsTrigger value="group">Group Gifts</TabsTrigger>
          <TabsTrigger value="social">Social Integration</TabsTrigger>
          <TabsTrigger value="budget">Budget Tracker</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Gift Suggestions */}
            <Card className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-green-600" />
                  AI-Powered Gift Suggestions
                </CardTitle>
                <CardDescription>Smart recommendations based on social media analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiGiftSuggestions.map((gift) => (
                    <div key={gift.id} className="border rounded-lg p-4 bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10">
                      <div className="flex items-start gap-4">
                        <img
                          src={gift.image}
                          alt={gift.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">
                                {gift.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {gift.category} • {gift.source}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-green-600">${gift.price}</p>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm">{gift.rating}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">
                              🤖 AI Analysis:
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              {gift.aiReason}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">Confidence:</span>
                              <Badge variant="secondary">{gift.confidence}%</Badge>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View Product
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600">
                              <ShoppingCart className="w-3 h-3 mr-1" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wishlist Integration */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-600" />
                  Wishlist Sync
                </CardTitle>
                <CardDescription>Connected platforms and wishlists</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { platform: "Amazon", items: 12, synced: true },
                    { platform: "Etsy", items: 5, synced: true },
                    { platform: "Instagram", items: 8, synced: false },
                    { platform: "Pinterest", items: 15, synced: false }
                  ].map((platform) => (
                    <div key={platform.platform} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h5 className="font-medium">{platform.platform}</h5>
                        <p className="text-sm text-gray-500">{platform.items} items found</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={platform.synced ? "default" : "secondary"}>
                          {platform.synced ? "Synced" : "Connect"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600">
                  Sync All Platforms
                </Button>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                  <h5 className="font-medium text-sm mb-1">AI Insights</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Found 23 potential gifts across all platforms. Best match: Art supplies (91% confidence)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="group" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Group Gift Campaigns
              </CardTitle>
              <CardDescription>Collaborative gift contributions with friends and family</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {groupGifts.map((campaign) => (
                  <div key={campaign.id} className="border rounded-lg p-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                          {campaign.gift}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          For {campaign.person}
                        </p>
                      </div>
                      <Badge variant="outline">
                        {campaign.daysLeft} days left
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-gray-600">
                          ${campaign.currentAmount} / ${campaign.targetAmount}
                        </span>
                      </div>
                      <Progress 
                        value={(campaign.currentAmount / campaign.targetAmount) * 100} 
                        className="h-3"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {campaign.contributors} contributors
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Contribute
                      </Button>
                      <Button variant="outline">
                        Share Campaign
                      </Button>
                    </div>
                  </div>
                ))}

                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600">
                  <Users className="w-4 h-4 mr-2" />
                  Start New Group Gift
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Social Media Integration</CardTitle>
              <CardDescription>Auto-post celebrations and gift announcements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { platform: "Facebook", connected: true, autoposts: 15 },
                  { platform: "Instagram", connected: true, autoposts: 23 },
                  { platform: "Twitter", connected: false, autoposts: 0 },
                  { platform: "LinkedIn", connected: false, autoposts: 0 }
                ].map((social) => (
                  <div key={social.platform} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">{social.platform}</h5>
                      <Badge variant={social.connected ? "default" : "secondary"}>
                        {social.connected ? "Connected" : "Connect"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {social.autoposts} auto-posts this year
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Customizable Auto-Posts</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Birthday wishes</span>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Gift reveals</span>
                    <Badge variant="secondary">Paused</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Group celebrations</span>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Smart Budget Tracker
              </CardTitle>
              <CardDescription>Track and optimize your gift spending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">This Month</h4>
                  <p className="text-2xl font-bold text-green-600">$147.50</p>
                  <p className="text-sm text-gray-600">3 gifts purchased</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Annual Budget</h4>
                  <p className="text-2xl font-bold text-purple-600">$1,200</p>
                  <Progress value={65} className="mt-2" />
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Upcoming</h4>
                  <p className="text-2xl font-bold text-orange-600">$234.99</p>
                  <p className="text-sm text-gray-600">5 birthdays</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiftIntegration;
