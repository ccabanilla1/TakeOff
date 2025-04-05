const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // For loading API key from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Route for generating itineraries
app.post("/api/generate-itinerary", async (req, res) => {
	try {
		const { destination, timeframe, companion, styles, budget, duration } =
			req.body;

		// Call OpenAI API
		const response = await axios.post(
			"https://api.openai.com/v1/chat/completions",
			{
				model: "gpt-4o-mini",
				messages: [
					{
						role: "system",
						content:
							"You are a travel planning assistant. Create a detailed day-by-day itinerary based on the user's preferences.",
					},
					{
						role: "user",
						content: `Please create a ${duration} itinerary for ${destination} for ${companion}. 
            Travel style preferences: ${styles}. 
            Budget: ${budget}.
            Dates: ${timeframe}.
            Format the response as a JSON object with the following structure:
            { 
              "days": [
                { 
                  "day": 0, 
                  "events": [
                    { 
                      "time": "08:00", 
                      "title": "Event Name", 
                      "description": "Event Description" 
                    }
                  ]
                }
              ]
            }`,
					},
				],
				response_format: { type: "json_object" },
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
					"Content-Type": "application/json",
				},
			}
		);

		// Extract and parse the itinerary from the OpenAI response
		const itineraryJSON = response.data.choices[0].message.content;
		const itinerary = JSON.parse(itineraryJSON);

		// Send the itinerary back to the client
		res.json(itinerary);
	} catch (error) {
		console.error(
			"Error generating itinerary:",
			error.response ? error.response.data : error.message
		);
		res.status(500).json({ error: "Failed to generate itinerary" });
	}
});

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
