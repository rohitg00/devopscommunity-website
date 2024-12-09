import axios from 'axios';

// Twitter API v2 configuration
const TWITTER_BEARER_TOKEN = import.meta.env.VITE_TWITTER_BEARER_TOKEN;

export async function fetchUserTweets(username = 'ghumare64') {
  try {
    // Configure axios for Twitter API v2
    const twitterApi = axios.create({
      baseURL: 'https://api.twitter.com/2',
      headers: {
        'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      }
    });

    // First get the user ID
    const userResponse = await twitterApi.get(`/users/by/username/${username}`);
    const userId = userResponse.data?.data?.id;

    if (!userId) {
      throw new Error('User not found');
    }

    // Then get their tweets
    const tweetsResponse = await twitterApi.get(`/users/${userId}/tweets`, {
      params: {
        'max_results': 10,
        'tweet.fields': 'created_at,text',
        'exclude': 'retweets,replies'
      }
    });

    return tweetsResponse.data?.data || [];
  } catch (error) {
    console.error('Error fetching tweets:', error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Authentication failed. Please check your Twitter API credentials.');
      }
      if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      }
    }
    throw new Error('Failed to fetch tweets. Please try again later.');
  }
}
