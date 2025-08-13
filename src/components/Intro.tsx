export function Intro() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-start bg-[#282c34] text-white p-8">
			<div className="max-w-4xl w-full">
				<h1 className="text-4xl font-bold mb-8 text-center">
					BitGo Frontend Challenge
				</h1>

				<div className="bg-gray-800 rounded-lg p-6 mb-8">
					<h2 className="text-2xl font-semibold mb-4 text-blue-400">
						Challenge Overview
					</h2>
					<p className="text-lg mb-6 leading-relaxed">
						Build a cryptocurrency trading simulator using the BitGo Market API.
						Create an intuitive interface that allows users to view real-time
						cryptocurrency prices and simulate trading with a virtual budget.
					</p>

					<h3 className="text-xl font-semibold mb-3 text-green-400">
						Requirements
					</h3>
					<ul className="space-y-3 text-base">
						<li className="flex items-start">
							<span className="text-blue-400 mr-2">•</span>
							<span>
								<strong>API Integration:</strong> Use the BitGo Market API
								endpoint:
								<code className="bg-gray-700 px-2 py-1 rounded text-sm ml-2">
									https://app.bitgo.com/api/v2/market/latest?currencyName=USD
								</code>
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-400 mr-2">•</span>
							<span>
								<strong>Currency Display:</strong> List all available
								cryptocurrencies with their current USD prices
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-400 mr-2">•</span>
							<span>
								<strong>Trading Simulation:</strong> Implement <b>buy</b> and{" "}
								<b>sell</b> functionality for each cryptocurrency
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-400 mr-2">•</span>
							<span>
								<strong>Budget Management:</strong> Visualize the user's current
								budget. Assume a starting budget of{" "}
								<strong className="text-green-400">$50,000 USD</strong>
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-400 mr-2">•</span>
							<span>
								<strong>Portfolio Tracking:</strong> Display current balance for
								each owned cryptocurrency
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-blue-400 mr-2">•</span>
							<span>
								<strong>User Experience:</strong> Provide an easy way to select
								and view different currencies
							</span>
						</li>
					</ul>

					<h3 className="text-xl font-semibold mb-3 mt-6 text-purple-400">
						Libraries & Tools
					</h3>
					<div className="bg-gray-700 rounded-lg p-4 mb-4">
						<p className="text-base mb-2">
							<span className="text-purple-300 font-semibold">
								Feel free to use any third-party libraries you want
							</span>
						</p>
						<p className="text-sm text-gray-300">
							The sky's the limit - anything that helps you build an amazing
							experience.
						</p>
					</div>

					<h3 className="text-xl font-semibold mb-3 mt-6 text-yellow-400">
						Technical Notes
					</h3>
					<ul className="space-y-2 text-base">
						<li className="flex items-start">
							<span className="text-yellow-400 mr-2">•</span>
							<span>
								Focus on clean, maintainable code and good user experience
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-yellow-400 mr-2">•</span>
							<span>
								Handle API responses appropriately and consider error states
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-yellow-400 mr-2">•</span>
							<span>Make the interface responsive and visually appealing</span>
						</li>
					</ul>
				</div>

				<div className="text-center">
					<p className="text-lg text-gray-300">
						Good luck! Show us your frontend skills and creativity. 🚀
					</p>
				</div>
			</div>
		</div>
	);
}
