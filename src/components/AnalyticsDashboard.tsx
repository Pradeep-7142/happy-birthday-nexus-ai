
import { BarChart3, TrendingUp, Users, Heart, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AnalyticsDashboard = () => {
  const relationshipStats = [
    { category: "Family", count: 15, percentage: 35, trend: "+2" },
    { category: "Close Friends", count: 18, percentage: 42, trend: "+3" },
    { category: "Colleagues", count: 8, percentage: 19, trend: "-1" },
    { category: "Acquaintances", count: 2, percentage: 4, trend: "0" }
  ];

  const celebrationMetrics = [
    { metric: "Success Rate", value: "94.7%", change: "+2.3%", color: "text-green-600" },
    { metric: "Avg Response Time", value: "2.3h", change: "-0.5h", color: "text-blue-600" },
    { metric: "Gift Satisfaction", value: "4.8/5", change: "+0.2", color: "text-purple-600" },
    { metric: "On-Time Rate", value: "98.1%", change: "+1.2%", color: "text-orange-600" }
  ];

  const monthlyData = [
    { month: "Jan", celebrations: 8, budget: 145 },
    { month: "Feb", celebrations: 12, budget: 234 },
    { month: "Mar", celebrations: 6, budget: 89 },
    { month: "Apr", celebrations: 15, budget: 312 },
    { month: "May", celebrations: 10, budget: 178 },
    { month: "Jun", celebrations: 7, budget: 123 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Analytics Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Insights into your birthday celebration patterns and relationships
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {celebrationMetrics.map((metric, index) => (
          <Card key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.metric}
                  </p>
                  <p className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    {metric.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Relationship Breakdown */}
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Relationship Dashboard
            </CardTitle>
            <CardDescription>Your social circle analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {relationshipStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{stat.category}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{stat.count} people</Badge>
                    <Badge 
                      variant={stat.trend.startsWith('+') ? "default" : stat.trend.startsWith('-') ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {stat.trend}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <Progress value={stat.percentage} className="h-2" />
                  <p className="text-xs text-gray-500">{stat.percentage}% of total contacts</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Celebration Success Metrics */}
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              Celebration Success
            </CardTitle>
            <CardDescription>Your celebration impact analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Response Rate</span>
                </div>
                <p className="text-2xl font-bold text-green-600">87%</p>
                <p className="text-xs text-gray-600">+5% from last year</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="font-medium">Perfect Timing</span>
                </div>
                <p className="text-2xl font-bold text-purple-600">92%</p>
                <p className="text-xs text-gray-600">AI-optimized</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Most Successful Approaches</h4>
              <div className="space-y-2">
                {[
                  { approach: "Personal voice messages", success: 96 },
                  { approach: "Custom photo cards", success: 89 },
                  { approach: "Group collaborations", success: 84 },
                  { approach: "Social media posts", success: 76 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{item.approach}</span>
                    <div className="flex items-center gap-2">
                      <Progress value={item.success} className="w-16 h-2" />
                      <span className="text-xs font-medium">{item.success}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Monthly Celebration & Budget Trends
          </CardTitle>
          <CardDescription>Your celebration activity over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-6 gap-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t h-20 flex items-end justify-center relative">
                    <div 
                      className="bg-blue-600 w-full rounded-t transition-all"
                      style={{ height: `${(data.celebrations / 15) * 100}%` }}
                    />
                    <span className="absolute bottom-1 text-xs font-medium text-white">
                      {data.celebrations}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-medium">{data.month}</p>
                    <p className="text-xs text-gray-500">${data.budget}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span>Celebrations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <span>Budget Spent</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Panel */}
      <Card className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">🧠 AI-Powered Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-700 dark:text-blue-300">Peak Season</p>
                  <p>April sees 40% more birthdays in your network</p>
                </div>
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-300">Optimization</p>
                  <p>Voice messages get 23% better responses</p>
                </div>
                <div>
                  <p className="font-medium text-green-700 dark:text-green-300">Recommendation</p>
                  <p>Schedule reminders 3 days earlier for best outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
