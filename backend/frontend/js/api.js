// API handler for TakeOff application
const API = {
	// Base URL for API endpoints
	baseURL: window.location.origin,

	// Generate an itinerary based on user preferences
	async generateItinerary(preferences) {
		try {
			const response = await fetch(`${this.baseURL}/api/generate-itinerary`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(preferences),
			});

			if (!response.ok) {
				throw new Error("Failed to generate itinerary");
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error generating itinerary:", error);
			throw error;
		}
	},
};

// Export the API object for use in other files
window.API = API;
