
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const API = () => {
  useEffect(() => {
    document.title = "API Documentation - SoftSell";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">API Documentation</h1>
              <p className="text-xl mb-12">
                Integrate SoftSell's license marketplace functionality into your own applications.
              </p>

              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs font-medium px-2.5 py-0.5 rounded">
                    Stable
                  </span>
                  <span className="ml-2 text-sm text-muted-foreground">v2.1.0</span>
                </div>
                <Button>Get API Key</Button>
              </div>
              
              {/* Featured Video */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">API Overview</h2>
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-medium mb-2">Getting Started with the SoftSell API</p>
                      <p className="text-sm text-muted-foreground">Tutorial video for API integration would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="grid grid-cols-4 w-full mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="authentication">Authentication</TabsTrigger>
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="prose max-w-none">
                    <h3 className="text-2xl font-bold mb-4">Introduction</h3>
                    <p>
                      The SoftSell API provides programmatic access to the SoftSell platform, allowing you to integrate 
                      software license buying and selling capabilities into your applications. With our RESTful API, 
                      you can list licenses for sale, search for available licenses, and manage transactions.
                    </p>
                    
                    <h3 className="text-2xl font-bold mt-8 mb-4">Base URL</h3>
                    <div className="bg-secondary p-4 rounded-md font-mono text-sm mb-2">
                      https://api.softsell.com/v2/
                    </div>
                    
                    <h3 className="text-2xl font-bold mt-8 mb-4">Rate Limits</h3>
                    <p>
                      Our API has the following rate limits:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li><strong>Free tier:</strong> 100 requests per minute</li>
                      <li><strong>Business tier:</strong> 1,000 requests per minute</li>
                      <li><strong>Enterprise tier:</strong> Custom limits</li>
                    </ul>
                    
                    <div className="bg-secondary/50 p-6 rounded-lg mt-8">
                      <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Sign up for a SoftSell developer account</li>
                        <li>Create an API key from your dashboard</li>
                        <li>Follow our authentication guide</li>
                        <li>Start making API requests</li>
                      </ol>
                      <div className="mt-4">
                        <Button>Create Developer Account</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="authentication">
                  <div className="prose max-w-none">
                    <h3 className="text-2xl font-bold mb-4">Authentication</h3>
                    <p>
                      All API requests require authentication using an API key. Your API key should be included 
                      in the headers of all requests.
                    </p>
                    
                    <h4 className="text-xl font-bold mt-8 mb-2">API Key Authentication</h4>
                    <p className="mb-4">
                      Include your API key in the <code>X-API-Key</code> header:
                    </p>
                    <div className="bg-secondary p-4 rounded-md font-mono text-sm whitespace-pre mb-6">
{`GET /v2/licenses
Host: api.softsell.com
X-API-Key: your_api_key_here
Content-Type: application/json`}
                    </div>
                    
                    <h4 className="text-xl font-bold mt-8 mb-2">OAuth Authentication (for User Actions)</h4>
                    <p className="mb-4">
                      For actions that require user authorization, we support OAuth 2.0:
                    </p>
                    <div className="bg-secondary p-4 rounded-md font-mono text-sm whitespace-pre mb-6">
{`GET /v2/user/licenses
Host: api.softsell.com
Authorization: Bearer {access_token}
Content-Type: application/json`}
                    </div>
                    
                    <h4 className="text-xl font-bold mt-8 mb-2">Obtaining OAuth Tokens</h4>
                    <p>
                      To obtain an OAuth token, you'll need to implement the OAuth 2.0 authorization code flow:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mt-4">
                      <li>Redirect users to <code>https://api.softsell.com/oauth/authorize</code></li>
                      <li>The user authenticates and approves your app</li>
                      <li>Our server redirects back to your application with an authorization code</li>
                      <li>Exchange the code for an access token</li>
                    </ol>
                    
                    <div className="bg-secondary/50 p-6 rounded-lg mt-8">
                      <h4 className="text-xl font-bold mb-4">Security Best Practices</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Never expose your API key in client-side code</li>
                        <li>Implement proper token storage and management</li>
                        <li>Use HTTPS for all API calls</li>
                        <li>Rotate API keys regularly</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="endpoints">
                  <div className="prose max-w-none">
                    <h3 className="text-2xl font-bold mb-4">API Endpoints</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-2">Licenses</h4>
                      <div className="space-y-4">
                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-secondary p-4">
                            <div className="flex items-center">
                              <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs font-medium px-2 py-0.5 rounded">GET</span>
                              <code className="ml-3 font-mono">/v2/licenses</code>
                            </div>
                            <p className="mt-2 text-sm">List available licenses for purchase</p>
                          </div>
                          <div className="p-4">
                            <p className="text-sm mb-2"><strong>Query Parameters:</strong></p>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                              <li><code>software</code> - Filter by software name</li>
                              <li><code>version</code> - Filter by software version</li>
                              <li><code>limit</code> - Results per page (default: 20)</li>
                              <li><code>page</code> - Page number (default: 1)</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-secondary p-4">
                            <div className="flex items-center">
                              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs font-medium px-2 py-0.5 rounded">POST</span>
                              <code className="ml-3 font-mono">/v2/licenses</code>
                            </div>
                            <p className="mt-2 text-sm">Create a new license listing</p>
                          </div>
                          <div className="p-4">
                            <p className="text-sm mb-2"><strong>Request Body:</strong></p>
                            <div className="bg-secondary p-3 rounded-md font-mono text-xs whitespace-pre mb-2">
{`{
  "software": "Adobe Photoshop",
  "version": "2025",
  "licenseType": "perpetual",
  "price": 399.99,
  "description": "Unused license, transferable"
}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-2">Transactions</h4>
                      <div className="space-y-4">
                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-secondary p-4">
                            <div className="flex items-center">
                              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs font-medium px-2 py-0.5 rounded">POST</span>
                              <code className="ml-3 font-mono">/v2/transactions</code>
                            </div>
                            <p className="mt-2 text-sm">Initialize a license purchase</p>
                          </div>
                          <div className="p-4">
                            <p className="text-sm mb-2"><strong>Request Body:</strong></p>
                            <div className="bg-secondary p-3 rounded-md font-mono text-xs whitespace-pre mb-2">
{`{
  "licenseId": "lic_12345abcde",
  "paymentMethod": "card"
}`}
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-secondary p-4">
                            <div className="flex items-center">
                              <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs font-medium px-2 py-0.5 rounded">GET</span>
                              <code className="ml-3 font-mono">/v2/transactions/{"{transactionId}"}</code>
                            </div>
                            <p className="mt-2 text-sm">Get transaction status and details</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-2">Verification</h4>
                      <div className="space-y-4">
                        <div className="border rounded-md overflow-hidden">
                          <div className="bg-secondary p-4">
                            <div className="flex items-center">
                              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs font-medium px-2 py-0.5 rounded">POST</span>
                              <code className="ml-3 font-mono">/v2/licenses/verify</code>
                            </div>
                            <p className="mt-2 text-sm">Verify license transferability</p>
                          </div>
                          <div className="p-4">
                            <p className="text-sm mb-2"><strong>Request Body:</strong></p>
                            <div className="bg-secondary p-3 rounded-md font-mono text-xs whitespace-pre mb-2">
{`{
  "software": "Microsoft Office",
  "licenseKey": "XXXX-XXXX-XXXX-XXXX",
  "purchaseInfo": {
    "date": "2024-01-15"
  }
}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="examples">
                  <div className="prose max-w-none">
                    <h3 className="text-2xl font-bold mb-4">Code Examples</h3>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-2">JavaScript/Node.js</h4>
                      <div className="bg-secondary p-4 rounded-md font-mono text-sm whitespace-pre mb-4">
{`const axios = require('axios');

const API_KEY = 'your_api_key_here';

async function getLicenses() {
  try {
    const response = await axios.get('https://api.softsell.com/v2/licenses', {
      headers: {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
      },
      params: {
        software: 'Adobe Creative Cloud',
        limit: 10
      }
    });
    
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching licenses:', error);
  }
}

// Call the function
getLicenses();`}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-2">Python</h4>
                      <div className="bg-secondary p-4 rounded-md font-mono text-sm whitespace-pre mb-4">
{`import requests

API_KEY = 'your_api_key_here'

def get_licenses():
    headers = {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
    }
    
    params = {
        'software': 'Adobe Creative Cloud',
        'limit': 10
    }
    
    try:
        response = requests.get(
            'https://api.softsell.com/v2/licenses',
            headers=headers,
            params=params
        )
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching licenses: {e}")
        return None

# Call the function
licenses = get_licenses()
print(licenses)`}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold mb-2">Creating a License Listing</h4>
                      <div className="bg-secondary p-4 rounded-md font-mono text-sm whitespace-pre mb-4">
{`curl -X POST https://api.softsell.com/v2/licenses \\
  -H "X-API-Key: your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "software": "Microsoft SQL Server",
    "version": "2022",
    "licenseType": "perpetual",
    "seats": 5,
    "price": 1299.99,
    "description": "Enterprise edition, unused licenses"
  }'`}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="border-t pt-8 mt-16">
                <h3 className="text-2xl font-bold mb-6">Need Help with Integration?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 border rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Developer Support</h4>
                    <p className="mb-4">Our technical team is ready to assist with API integration questions.</p>
                    <Button variant="outline">Contact Developer Support</Button>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h4 className="text-lg font-bold mb-2">Enterprise Solutions</h4>
                    <p className="mb-4">Need custom API features or higher rate limits? Let's discuss.</p>
                    <Button variant="outline">Request Enterprise Access</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default API;
