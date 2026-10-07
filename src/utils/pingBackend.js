/**
 * Utility to ping the Render backend service.
 * Render free-tier web services auto-sleep after inactivity.
 * Pinging on initial site visit and periodically keeps the backend warm and ready.
 */

const BACKEND_URL = 'https://cv-backend-udlu.onrender.com/api/sendEmail/';
const PING_INTERVAL_MS = 4 * 60 * 1000; // 4 minutes interval to keep server active

export const pingBackend = () => {
  const triggerPing = () => {
    fetch(BACKEND_URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(() => {
        console.log('⚡ [Backend Ping] Woke up / Pinged Render backend successfully.');
      })
      .catch(() => {
        // Even if CORS or non-200 status occurs, HTTP traffic reaches Render and wakes the container.
        console.log('⚡ [Backend Ping] Sent ping request to Render backend service.');
      });
  };

  // Ping immediately when user enters the site
  triggerPing();

  // Keep active by pinging every 4 minutes while tab is open
  const intervalId = setInterval(triggerPing, PING_INTERVAL_MS);

  // Return cleanup function to clear interval on unmount
  return () => clearInterval(intervalId);
};
