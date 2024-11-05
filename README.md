# Perplexity-like Mini Search System

## Project Overview

This project is a Perplexity-inspired mini search system designed to help users obtain concise, relevant answers to their queries. It accepts a query from the user, performs a web search to gather relevant information, generates a concise response using language models, and provides source citations. 

### Objectives
- Build an intuitive query interface.
- Integrate a search engine API to fetch relevant web results.
- Use a language model to generate accurate, well-structured answers.
- Provide users with a list of source citations for reference.
- Implement robust error handling and optimize the performance.

## Features

- **User Query Input**: Accepts queries through a web interface.
- **Web Search Integration**: Uses a search API to fetch relevant search results.
- **Answer Generation**: Processes search results using a language model to generate concise answers.
- **Source Citations**: Lists the sources used to generate the answer, providing transparency.
- **Error Handling**: Handles missing or ambiguous queries, API failures, and other edge cases.
- **Performance Optimization**: Efficient API calls and processing to minimize response time.

## Setup and Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **NPM**
- **API Keys** for Search API and Language Model API

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/wasimrehman05/perplexity-mini-search.git
   cd perplexity-mini-search 
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a .env file in the project root with the following variables:
   ```bash
   GOOGLE_API_KEY=your_google_api_key
   GOOGLE_CX=google_search_cx
   GEMINI_API_KEY=your_gemini_api_key
   PORT=4000
   ```

4. **Run the Server**
   ```bash
   node src/app.js
   ```

5. **Access the Application**
   Open http://localhost:4000 in your browser to access the app.

## Deployment

### Prepare for Deployment
1. Ensure all environment variables are set up.
2. Verify that the project is production-ready.

### Deploy to a Platform
Follow the deployment guide for Vercel to set up the app:
- Configure the environment variables directly on the platform after deployment.

## Usage

### How to Use
1. **Enter a Query**: Type a question or search term in the search box.
2. **Submit the Query**: Click the search button to send the query.
3. **View Results**:
   - The generated answer will appear along with a list of sources.
   - Each source includes a title and a link to the original document.

### Example Interaction
#### User Input:
*“What is the difference between machine learning and AI?”*

#### Response:
**Answer:** "Machine learning is a subset of AI focused on algorithms that learn from data. AI is a broader concept covering all intelligent machine behavior."

**Sources:**
- Source 1
- Source 2

## Design Decisions and Challenges

### Design Choices

- **UI**: Inspired by Perplexity, the frontend provides a simple, distraction-free experience.
- **API Integration**: Integrated with a search engine API and a generative language model for optimal results.
- **Error Handling**: Developed comprehensive error handling for scenarios like no results or API issues.

### Challenges and Solutions

- **Search API Limitations**: Some APIs have limited data fields. By combining fields like `title` and `snippet`, we created a more robust dataset.
- **Handling Query Ambiguity**: User queries can be vague. A language model helps parse ambiguous queries, with prompts for user clarification if needed.
- **Performance Optimization**: To maintain responsiveness, we minimized unnecessary API calls and streamlined backend processing.

## Future Improvements

1. **Enhanced Answer Accuracy**: Experiment with advanced language models and fine-tuning techniques.
2. **User Query History**: Store and display past queries for easy access to previous searches.
3. **UI Enhancements**: Improve animations, load times, and mobile responsiveness.
4. **Custom Search Preferences**: Allow users to filter and prioritize specific sources.

## Critical Thinking and Justification

### Approach to Problem Solving

- **Simplicity and Usability**: Focused on creating a user-friendly interface and ensuring backend efficiency for diverse queries.
- **Language Model Integration**: The language model synthesizes concise, coherent answers from multiple sources, aligning with our focus on user experience.
- **Search API Choice**: Chose a search API known for providing diverse results, ensuring relevance and accuracy.

### Challenges

- **Balancing Speed and Accuracy**: Achieved fast responses without compromising answer quality by optimizing the search and answer-generation processes.
- **Error Handling**: Built error handling to provide feedback even during failures, ensuring a smooth user experience.
