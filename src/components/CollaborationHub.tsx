
import { useState } from "react";
import { Users, Share2, Calendar, MessageCircle, Gift2, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CollaborationHub = () => {
  const [activeTeam, setActiveTeam] = useState("family");

  const teams = [
    {
      id: "family",
      name: "Johnson Family",
      members: 8,
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167/150x150",
      upcomingEvents: 3,
      type: "Family"
    },
    {
      id: "work",
      name: "Marketing Team",
      members: 12,
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c/150x150",
      upcomingEvents: 5,
      type: "Work"
    },
    {
      id: "friends",
      name: "College Friends",
      members: 15,
      avatar: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac/150x150", 
      upcomingEvents: 2,
      type: "Friends"
    }
  ];

  const collaborativeEvents = [
    {
      id: 1,
      person: "Sarah Johnson",
      event: "30th Birthday Surprise",
      date: "July 15th",
      team: "Johnson Family",
      organizer: "Mike Johnson",
      tasks: [
        { task: "Book venue", assignee: "Emma", status: "completed" },
        { task: "Order cake", assignee: "David", status: "in-progress" },
        { task: "Send invitations", assignee: "Lisa", status: "pending" },
        { task: "Decorate venue", assignee: "Tom", status: "pending" }
      ],
      budget: { target: 500, current: 320 },
      messages: 47
    },
    {
      id: 2,
      person: "Mike Chen",
      event: "Work Anniversary",
      date: "July 22nd",
      team: "Marketing Team",
      organizer: "Jessica Wang",
      tasks: [
        { task: "Reserve restaurant", assignee: "Alex", status: "completed" },
        { task: "Prepare presentation", assignee: "Jessica", status: "in-progress" },
        { task: "Collect signatures", assignee: "Mark", status: "in-progress" }
      ],
      budget: { target: 300, current: 180 },
      messages: 23
    }
  ];

  const socialPosts = [
    {
      id: 1,
      platform: "Facebook",
      content: "🎉 Planning something special for Sarah's 30th! Can't wait to celebrate! #BirthdayPlanning",
      scheduled: "July 12th, 6:00 PM",
      status: "scheduled"
    },
    {
      id: 2,
      platform: "Instagram",
      content: "Behind the scenes of party planning! 🎈✨ #SurpriseParty #FamilyLove",
      scheduled: "July 13th, 4:00 PM", 
      status: "draft"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Collaboration Hub
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Team up with family and friends for unforgettable celebrations
          </p>
        </div>
      </div>

      <Tabs defaultValue="teams" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="planning">Planning Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="teams" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Team Selection */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-600" />
                  Your Teams
                </CardTitle>
                <CardDescription>Manage your celebration groups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {teams.map((team) => (
                  <div
                    key={team.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      activeTeam === team.id
                        ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20"
                        : "border-gray-200 hover:border-cyan-300"
                    }`}
                    onClick={() => setActiveTeam(team.id)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={team.avatar} />
                        <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{team.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {team.members} members • {team.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {team.upcomingEvents} upcoming
                      </Badge>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Team
                </Button>
              </CardContent>
            </Card>

            {/* Team Details */}
            <Card className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-blue-600" />
                  Team Activity
                </CardTitle>
                <CardDescription>Recent collaboration activity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Active Members</h4>
                    <p className="text-2xl font-bold text-cyan-600">8</p>
                    <p className="text-sm text-gray-600">+2 this month</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Events Planned</h4>
                    <p className="text-2xl font-bold text-green-600">12</p>
                    <p className="text-sm text-gray-600">This year</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Success Rate</h4>
                    <p className="text-2xl font-bold text-purple-600">96%</p>
                    <p className="text-sm text-gray-600">Event completion</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Recent Team Activity</h4>
                  {[
                    { member: "Emma", action: "completed venue booking", time: "2 hours ago" },
                    { member: "David", action: "updated cake design", time: "5 hours ago" },
                    { member: "Lisa", action: "sent 12 invitations", time: "1 day ago" },
                    { member: "Tom", action: "shared decoration ideas", time: "2 days ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{activity.member.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{activity.member}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{activity.action}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="space-y-6">
            {collaborativeEvents.map((event) => (
              <Card key={event.id} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        {event.event}
                      </CardTitle>
                      <CardDescription>
                        For {event.person} • {event.date} • Organized by {event.organizer}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                      {event.team}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Task Management */}
                    <div>
                      <h4 className="font-medium mb-3">Task Progress</h4>
                      <div className="space-y-2">
                        {event.tasks.map((task, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{task.task}</p>
                              <p className="text-xs text-gray-600 dark:text-gray-400">Assigned to {task.assignee}</p>
                            </div>
                            <Badge 
                              variant={
                                task.status === 'completed' ? 'default' : 
                                task.status === 'in-progress' ? 'secondary' : 'outline'
                              }
                              className="text-xs"
                            >
                              {task.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Budget & Messages */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Budget Progress</h4>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Collected</span>
                          <span className="font-medium">${event.budget.current} / ${event.budget.target}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full"
                            style={{ width: `${(event.budget.current / event.budget.target) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 text-purple-600" />
                            <span className="font-medium">Team Chat</span>
                          </div>
                          <Badge variant="secondary">{event.messages} messages</Badge>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-2">
                          Open Chat
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                      <Gift2 className="w-4 h-4 mr-2" />
                      Manage Event
                    </Button>
                    <Button variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Progress
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-blue-600" />
                Social Media Auto-Wishes
              </CardTitle>
              <CardDescription>Coordinate social media posts with your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Scheduled Posts</h4>
                  {socialPosts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                          {post.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {post.content}
                      </p>
                      <p className="text-xs text-gray-500">
                        Scheduled: {post.scheduled}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Team Coordination</h4>
                  <div className="space-y-3">
                    {[
                      { member: "Emma", platform: "Instagram", status: "Posted story" },
                      { member: "David", platform: "Facebook", status: "Shared event" },
                      { member: "Lisa", platform: "Twitter", status: "Scheduled tweet" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">{activity.member.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{activity.member}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{activity.platform}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {activity.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planning" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Event Planning Tools
                </CardTitle>
                <CardDescription>Comprehensive planning assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { tool: "Venue Finder", description: "AI-powered venue recommendations", status: "Available" },
                  { tool: "Guest List Manager", description: "RSVP tracking and management", status: "Available" },
                  { tool: "Menu Planner", description: "Dietary preferences coordination", status: "Available" },
                  { tool: "Timeline Creator", description: "Event schedule optimization", status: "Premium" }
                ].map((tool, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h5 className="font-medium">{tool.tool}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
                    </div>
                    <Badge variant={tool.status === 'Available' ? 'default' : 'secondary'}>
                      {tool.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift2 className="w-5 h-5 text-purple-600" />
                  Collaborative Features
                </CardTitle>
                <CardDescription>Team collaboration capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { feature: "Real-time Chat", description: "Team communication", active: true },
                  { feature: "Task Assignment", description: "Distribute responsibilities", active: true },
                  { feature: "Budget Splitting", description: "Expense management", active: true },
                  { feature: "Vote on Decisions", description: "Democratic planning", active: false }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h5 className="font-medium">{feature.feature}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                    <Badge variant={feature.active ? 'default' : 'outline'}>
                      {feature.active ? 'Active' : 'Coming Soon'}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CollaborationHub;
