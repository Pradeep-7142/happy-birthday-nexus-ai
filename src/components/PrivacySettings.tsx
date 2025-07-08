
import { useState } from "react";
import { Shield, Lock, Eye, EyeOff, Globe, Users, Settings, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const PrivacySettings = () => {
  const [gdprCompliance, setGdprCompliance] = useState(true);
  const [privateModeEnabled, setPrivateModeEnabled] = useState(false);

  const privacyMetrics = [
    { metric: "Data Encryption", value: "256-bit AES", status: "Active" },
    { metric: "GDPR Compliance", value: "100%", status: "Verified" },
    { metric: "Data Retention", value: "24 months", status: "Configurable" },
    { metric: "Third-party Sharing", value: "Disabled", status: "Secure" }
  ];

  const syncedPlatforms = [
    { platform: "Google Contacts", synced: true, contacts: 247, lastSync: "2 hours ago" },
    { platform: "Facebook", synced: false, contacts: 189, lastSync: "Never" },
    { platform: "LinkedIn", synced: true, contacts: 156, lastSync: "1 day ago" },
    { platform: "Instagram", synced: false, contacts: 98, lastSync: "Never" }
  ];

  const hiddenContacts = [
    { name: "Private Contact 1", reason: "Personal choice", hiddenSince: "3 months ago" },
    { name: "Private Contact 2", reason: "Work confidentiality", hiddenSince: "1 month ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Privacy & Security Center
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            GDPR compliant with selective sync and private mode
          </p>
        </div>
      </div>

      <Tabs defaultValue="privacy" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="sync">Sync Settings</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="privacy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Privacy Controls */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Privacy Controls
                </CardTitle>
                <CardDescription>Manage your data privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-red-50/50 to-purple-50/50 dark:from-red-900/10 dark:to-purple-900/10">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-red-600" />
                      <div>
                        <h4 className="font-medium">Private Mode</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Hide sensitive contacts from main view
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={privateModeEnabled}
                      onCheckedChange={setPrivateModeEnabled}
                    />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Data Sharing Preferences</h4>
                    {[
                      { setting: "Analytics Data", description: "Help improve AI recommendations", enabled: true },
                      { setting: "Third-party Integration", description: "Allow gift platform connections", enabled: false },
                      { setting: "Social Media Insights", description: "Analyze social media for gift ideas", enabled: true },
                      { setting: "Contact Suggestions", description: "Suggest new birthday contacts", enabled: false }
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium text-sm">{setting.setting}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{setting.description}</p>
                        </div>
                        <Switch defaultChecked={setting.enabled} />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hidden Contacts */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-purple-600" />
                  Private Contacts
                </CardTitle>
                <CardDescription>Contacts hidden from main birthday calendar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {privateModeEnabled ? (
                  <div className="space-y-3">
                    {hiddenContacts.map((contact, index) => (
                      <div key={index} className="p-3 border rounded-lg bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium">{contact.name}</h5>
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3 mr-1" />
                            Unhide
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Reason: {contact.reason}
                        </p>
                        <p className="text-xs text-gray-500">
                          Hidden {contact.hiddenSince}
                        </p>
                      </div>
                    ))}
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                      Add Private Contact
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <EyeOff className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium mb-2">Private Mode Disabled</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Enable private mode to manage hidden contacts
                    </p>
                    <Button 
                      onClick={() => setPrivateModeEnabled(true)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      Enable Private Mode
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Status */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  Security Status
                </CardTitle>
                <CardDescription>Your data protection overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {privacyMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h5 className="font-medium">{metric.metric}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{metric.value}</p>
                    </div>
                    <Badge variant="default" className="bg-green-600">
                      {metric.status}
                    </Badge>
                  </div>
                ))}

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Security Score</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Overall Protection</span>
                    <span className="font-bold text-green-600">98/100</span>
                  </div>
                  <Progress value={98} className="h-2" />
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Excellent security configuration
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-600" />
                  Authentication
                </CardTitle>
                <CardDescription>Secure access management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { feature: "Two-Factor Authentication", enabled: true, required: true },
                    { feature: "Biometric Login", enabled: false, required: false },
                    { feature: "Session Timeout", enabled: true, required: true },
                    { feature: "Device Management", enabled: true, required: false }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div>
                          <h5 className="font-medium text-sm">{feature.feature}</h5>
                          {feature.required && (
                            <p className="text-xs text-orange-600">Required for compliance</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {feature.required && (
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                        )}
                        <Switch defaultChecked={feature.enabled} disabled={feature.required} />
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Configure Security
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sync" className="space-y-6">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Selective Sync
              </CardTitle>
              <CardDescription>Choose which platforms to sync with your birthday calendar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {syncedPlatforms.map((platform, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{platform.platform}</h4>
                      <Switch defaultChecked={platform.synced} />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Available Contacts</span>
                        <Badge variant="secondary">{platform.contacts}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Last Sync</span>
                        <span className="text-xs">{platform.lastSync}</span>
                      </div>
                    </div>
                    {platform.synced && (
                      <Button size="sm" variant="outline" className="w-full mt-3">
                        Configure Sync
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium mb-1">Selective Sync Benefits</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Only sync contacts you want to track</li>
                      <li>• Reduce data exposure to third parties</li>
                      <li>• Maintain control over your personal information</li>
                      <li>• Comply with GDPR data minimization principles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GDPR Compliance */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  GDPR Compliance
                </CardTitle>
                <CardDescription>European data protection compliance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10">
                  <div>
                    <h4 className="font-medium">GDPR Compliance Mode</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Enhanced data protection and user rights
                    </p>
                  </div>
                  <Switch
                    checked={gdprCompliance}
                    onCheckedChange={setGdprCompliance}
                  />
                </div>

                {gdprCompliance && (
                  <div className="space-y-3">
                    <h4 className="font-medium">Your GDPR Rights</h4>
                    {[
                      { right: "Right to Access", description: "View all your stored data", action: "Download Data" },
                      { right: "Right to Rectification", description: "Correct inaccurate data", action: "Edit Profile" },
                      { right: "Right to Erasure", description: "Delete your account and data", action: "Delete Account" },
                      { right: "Right to Portability", description: "Export your data", action: "Export Data" }
                    ].map((right, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium text-sm">{right.right}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{right.description}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          {right.action}
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Data Management
                </CardTitle>
                <CardDescription>Control your data lifecycle</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Retention Policy</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Your data is automatically deleted after 24 months of inactivity
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Retention Period</span>
                      <select className="px-2 py-1 rounded border text-sm">
                        <option>24 months</option>
                        <option>12 months</option>
                        <option>6 months</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Quick Actions</h4>
                    {[
                      { action: "Download All Data", description: "Get a copy of your information" },
                      { action: "Clear Cache", description: "Remove temporary stored data" },
                      { action: "Reset Preferences", description: "Return to default settings" },
                      { action: "Request Data Deletion", description: "Permanently delete your account" }
                    ].map((action, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium text-sm">{action.action}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{action.description}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Execute
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Privacy Summary */}
      <Card className="bg-gradient-to-r from-red-100 to-purple-100 dark:from-red-900/30 dark:to-purple-900/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">🔒 Your Privacy is Protected</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-700 dark:text-red-300">Encryption</p>
                  <p>End-to-end 256-bit AES encryption</p>
                </div>
                <div>
                  <p className="font-medium text-purple-700 dark:text-purple-300">Compliance</p>
                  <p>GDPR, CCPA, and SOC 2 certified</p>
                </div>
                <div>
                  <p className="font-medium text-blue-700 dark:text-blue-300">Control</p>
                  <p>You own and control your data</p>
                </div>
                <div>
                  <p className="font-medium text-green-700 dark:text-green-300">Transparency</p>
                  <p>Clear data usage policies</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySettings;
