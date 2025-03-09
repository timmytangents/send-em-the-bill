import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SendEmTheBill = () => {
  // Teacher data for comparison
  const teacherData = {
    name: "Ms. Sarah Johnson",
    occupation: "High School Science Teacher",
    image: "/api/placeholder/150/150",
    annualSalary: "$65,000",
    totalAssets: "$320,000",
    taxesPaid: "$14,300",
    taxPercentageOfIncome: "22.0%"
  };
  
  // Billionaire data
  const billionaireData = [
    {
      name: "Jeff Bezos",
      image: "/api/placeholder/150/150",
      netWorth: "$150.0B",
      taxesPaid: "$973.0M",
      wealthGrowth: "$7.5B",
      taxPercentage: "13.0%",
      equivalentAverageTax: "$1.8B",
      taxDeficit: "$827.0M",
      taxDeficitYears: 34458,
      teacherTaxRateMultiple: 1.7
    },
    {
      name: "Elon Musk",
      image: "/api/placeholder/150/150",
      netWorth: "$180.0B",
      taxesPaid: "$455.0M",
      wealthGrowth: "$25.0B",
      taxPercentage: "1.8%",
      equivalentAverageTax: "$6.0B",
      taxDeficit: "$5.5B",
      taxDeficitYears: 231042,
      teacherTaxRateMultiple: 12.1
    },
    {
      name: "Warren Buffett",
      image: "/api/placeholder/150/150",
      netWorth: "$100.0B",
      taxesPaid: "$23.7M",
      wealthGrowth: "$4.0B",
      taxPercentage: "0.6%",
      equivalentAverageTax: "$960.0M",
      taxDeficit: "$936.3M",
      taxDeficitYears: 39013,
      teacherTaxRateMultiple: 37.1
    },
    {
      name: "Mark Zuckerberg",
      image: "/api/placeholder/150/150",
      netWorth: "$80.0B",
      taxesPaid: "$1.5B",
      wealthGrowth: "$12.0B",
      taxPercentage: "12.5%",
      equivalentAverageTax: "$2.9B",
      taxDeficit: "$1.4B",
      taxDeficitYears: 57500,
      teacherTaxRateMultiple: 1.8
    },
    {
      name: "Michael Bloomberg",
      image: "/api/placeholder/150/150",
      netWorth: "$59.0B",
      taxesPaid: "$70.0M",
      wealthGrowth: "$3.5B",
      taxPercentage: "2.0%",
      equivalentAverageTax: "$840.0M",
      taxDeficit: "$770.0M",
      taxDeficitYears: 32083,
      teacherTaxRateMultiple: 11.0
    },
    {
      name: "Oprah Winfrey",
      image: "/api/placeholder/150/150",
      netWorth: "$2.5B",
      taxesPaid: "$45.0M",
      wealthGrowth: "$300.0M",
      taxPercentage: "15.0%",
      equivalentAverageTax: "$72.0M",
      taxDeficit: "$27.0M",
      taxDeficitYears: 1125,
      teacherTaxRateMultiple: 1.5
    },
    {
      name: "Bill Gates",
      image: "/api/placeholder/150/150",
      netWorth: "$107.0B",
      taxesPaid: "$275.0M",
      wealthGrowth: "$3.8B",
      taxPercentage: "7.2%",
      equivalentAverageTax: "$912.0M",
      taxDeficit: "$637.0M",
      taxDeficitYears: 26542,
      teacherTaxRateMultiple: 3.0
    },
    {
      name: "Larry Ellison",
      image: "/api/placeholder/150/150",
      netWorth: "$101.0B",
      taxesPaid: "$132.0M",
      wealthGrowth: "$4.2B",
      taxPercentage: "3.1%",
      equivalentAverageTax: "$1.0B",
      taxDeficit: "$876.0M",
      taxDeficitYears: 36500,
      teacherTaxRateMultiple: 7.0
    },
    {
      name: "Alice Walton",
      image: "/api/placeholder/150/150",
      netWorth: "$60.0B",
      taxesPaid: "$73.5M",
      wealthGrowth: "$2.1B",
      taxPercentage: "3.5%",
      equivalentAverageTax: "$504.0M",
      taxDeficit: "$430.5M",
      taxDeficitYears: 17938,
      teacherTaxRateMultiple: 6.3
    }
  ];

  const [selectedBillionaire, setSelectedBillionaire] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  // Generate share message for selected billionaire
  const generateShareMessage = (billionaire) => {
    return `${billionaire.name} paid only ${billionaire.taxPercentage} on wealth growth of ${billionaire.wealthGrowth} in one year.
Meanwhile, a schoolteacher pays 22% of their income in taxes.
That's ${billionaire.teacherTaxRateMultiple}x HIGHER than what ${billionaire.name} pays.
If taxed like an average American, ${billionaire.name} would owe an additional ${billionaire.taxDeficit}.
It's time to #SendEmTheBill and end billionaire welfare.`;
  };

  // Open share modal for a billionaire
  const openShareModal = (billionaire) => {
    setSelectedBillionaire(billionaire);
    setShowShareModal(true);
  };

  // Close share modal
  const closeShareModal = () => {
    setShowShareModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Send 'Em The Bill!</h1>
          <p className="mt-2">Comparing billionaire taxes to average Americans</p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto p-6">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">What if billionaires paid taxes like you do?</h2>
          
          <div className="mb-6">
            <p className="mb-4">
              Elon Musk and his administration claim to be making the federal budget into a lean machine that keeps our country running at maximum efficiency. Let's take him at his word.
            </p>
            <p className="mb-4">
              What would then remain in the budget are essential services worthy of taxpayers' funding — services billionaires actually utilize more than average citizens.
            </p>
            <p className="mb-4">
              Billionaires disproportionately benefit from our public resources, including: a legal system to protect their intellectual property, the transportation infrastructure that moves their goods, the educated workforce trained in public schools, the security provided by our military and police, the regulated markets that allow fair competition, and the public institutions that funded the technologies their businesses depend on.
            </p>
            <p className="mb-4">
              Now that there is no moral justification left for tax avoidance — if they don't want to be welfare queens any longer — they need to pay the bill for the services American taxpayers provide them. Every dollar they do not pay toward their fair share comes out of everyone else's wallet, or adds to the national debt.
            </p>
            <p className="mb-4">
              We aren't asking for much; just that those who are most fortunate pay at least as much of their incoming wealth back to the government as a schoolteacher making less than $100,000 per year does.
            </p>
            <p className="mb-4">
              Click the "Send 'Em the Bill" button to generate a social media post that calls on these billionaires to pull themselves up by their bootstraps and participate in funding our country. It's everyone's patriotic duty.
            </p>
          </div>
        </div>

        {/* Teacher Comparison Card */}
        <div className="bg-blue-50 rounded-lg shadow p-6 mb-8 border-2 border-blue-500">
          <div className="flex items-center mb-4">
            <img 
              src={teacherData.image} 
              alt={teacherData.name} 
              className="w-20 h-20 rounded-full mr-4 border-2 border-blue-500"
            />
            <div>
              <h3 className="text-xl font-bold">{teacherData.name}</h3>
              <p className="text-blue-700">{teacherData.occupation}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-sm text-gray-500">Annual Salary</div>
              <div className="text-lg font-semibold">{teacherData.annualSalary}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Assets</div>
              <div className="text-lg font-semibold">{teacherData.totalAssets}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Taxes Paid</div>
              <div className="text-lg font-semibold">{teacherData.taxesPaid}</div>
            </div>
          </div>
          
          <div className="bg-white rounded p-4 mb-4">
            <div className="text-sm text-gray-500 mb-1">Effective Tax Rate (on income)</div>
            <div className="text-2xl font-bold text-blue-600">{teacherData.taxPercentageOfIncome}</div>
            <p className="text-sm mt-2">
              A typical teacher pays around 22% of their income in federal taxes. This is the benchmark 
              we're comparing billionaires to - who often pay much less on their wealth growth.
            </p>
          </div>
        </div>

        {/* Billionaire Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {billionaireData.map((billionaire, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              {/* Billionaire image and name */}
              <div className="p-4 bg-gray-50 flex items-center">
                <img 
                  src={billionaire.image} 
                  alt={billionaire.name} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-xl font-bold">{billionaire.name}</h3>
              </div>
              
              {/* Stats */}
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Net Worth</div>
                  <div className="text-lg font-bold">{billionaire.netWorth}</div>
                </div>
                
                <div className="flex justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Wealth Growth</div>
                    <div className="font-semibold">{billionaire.wealthGrowth}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Taxes Paid</div>
                    <div className="font-semibold">{billionaire.taxesPaid}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Effective Tax Rate</div>
                  <div className="font-bold text-red-600">{billionaire.taxPercentage}</div>
                  
                  {/* Tax Rate Comparison Visualization - Teacher vs Billionaire */}
                  <div className="mt-2">
                    <ResponsiveContainer width="100%" height={60}>
                      <BarChart
                        data={[
                          { name: billionaire.name, rate: parseFloat(billionaire.taxPercentage.replace('%', '')) },
                          { name: teacherData.name, rate: parseFloat(teacherData.taxPercentageOfIncome.replace('%', '')) }
                        ]}
                        layout="vertical"
                      >
                        <XAxis type="number" domain={[0, 25]} hide />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip />
                        <Bar 
                          dataKey="rate" 
                          fill={(entry) => entry.name === billionaire.name ? '#ef4444' : '#3b82f6'} 
                          label={{ position: 'insideRight', fill: 'white', fontSize: 12 }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                    <div className="flex text-xs mt-1">
                      <div className="w-1/2">Billionaire: {billionaire.taxPercentage}</div>
                      <div className="w-1/2 text-right">Teacher: {teacherData.taxPercentageOfIncome}</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-sm bg-red-50 p-2 rounded">
                    <strong>A teacher pays {billionaire.teacherTaxRateMultiple}x more</strong> in taxes (as % of income) 
                    than {billionaire.name} pays on wealth growth
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-500">If taxed like avg. American</div>
                  <div className="font-semibold">{billionaire.equivalentAverageTax}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500">Tax Deficit</div>
                  <div className="text-lg font-bold text-red-600">{billionaire.taxDeficit}</div>
                  <div className="text-sm text-gray-600">
                    Equal to {billionaire.taxDeficitYears.toLocaleString()} years of taxes for a $100k earner
                  </div>
                </div>
                
                <button
                  onClick={() => openShareModal(billionaire)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Send 'Em The Bill!
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Visualizations Section */}
        <section className="container mx-auto p-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Teacher vs. Billionaires: Tax Rate Comparison</h2>
            
            <div className="h-96 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {
                      name: teacherData.name,
                      taxRate: parseFloat(teacherData.taxPercentageOfIncome.replace('%', '')),
                      category: "Teacher",
                      fill: "#3b82f6"
                    },
                    ...billionaireData.map(b => ({
                      name: b.name,
                      taxRate: parseFloat(b.taxPercentage.replace('%', '')),
                      category: "Billionaire",
                      fill: "#ef4444"
                    }))
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                >
                  <XAxis dataKey="name" tick={{ angle: -45, textAnchor: 'end', dominantBaseline: 'ideographic' }} height={120} />
                  <YAxis label={{ value: 'Effective Tax Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar name="Tax Rate" dataKey="taxRate" fill={(entry) => entry.fill} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">How Many Times More a Teacher Pays in Taxes (%)</h2>
            <div className="h-96 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={billionaireData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                >
                  <XAxis dataKey="name" tick={{ angle: -45, textAnchor: 'end', dominantBaseline: 'ideographic' }} height={120} />
                  <YAxis label={{ value: 'Times More', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `${value}x`} />
                  <Bar name="Teacher Pays This Many Times More" dataKey="teacherTaxRateMultiple" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-gray-100 p-6 rounded mb-6">
              <h3 className="text-xl font-bold mb-3">Understanding the Comparison</h3>
              <p className="mb-4">
                This comparison shows what percentage of income or wealth growth is paid in taxes. For a teacher, 
                we're looking at federal income tax as a percentage of annual salary. For billionaires, we're looking at 
                their reported federal tax payments as a percentage of their wealth growth in the same year.
              </p>
              <p>
                This highlights a fundamental inequity in our tax system: wage earners like teachers pay taxes on nearly 
                all their income, while billionaires can see massive wealth growth that goes largely untaxed until assets are sold 
                (and sometimes not even then, due to various tax strategies).
              </p>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Data Sources & Methodology</h2>
          <p className="mb-4">
            The data presented here is for illustrative purposes. In a real implementation, 
            we would source accurate tax and wealth information from:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Public SEC filings</li>
            <li>Forbes Billionaire List</li>
            <li>IRS data</li>
            <li>ProPublica tax investigations</li>
            <li>Bloomberg Billionaire Index</li>
          </ul>
          <p>
            We calculate the "tax deficit" by applying the average effective tax rate for 
            a typical American earning $100,000 (approximately 24%) to the billionaire's 
            annual wealth growth.
          </p>
        </div>
      </main>

      {/* Share Modal */}
      {showShareModal && selectedBillionaire && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Share this Bill</h2>
              
              <div className="bg-gray-100 p-4 rounded mb-4">
                <pre className="whitespace-pre-wrap">
                  {generateShareMessage(selectedBillionaire)}
                </pre>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={closeShareModal}
                  className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
                    Twitter
                  </button>
                  <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded">
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="container mx-auto">
          <p>Send 'Em The Bill! - A tax justice initiative</p>
        </div>
      </footer>
    </div>
  );
};

export default SendEmTheBill;
