import axios from 'axios';

/**
 * 🔥 IMPORTANT
 * This is your LIVE Render backend URL
 */
const BASE_URL = 'https://server-crash-prediction-ml.onrender.com';

// We are NOT using mock data now
const USE_MOCK_DATA = false;

// Axios instance
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * API SERVICE
 * These functions MATCH your Flask backend exactly
 */
export const serverService = {
    /**
     * Backend health check
     * GET /
     */
    getServerStatus: async() => {
        try {
            const res = await api.get('/');
            return res.data;
        } catch (error) {
            console.error('Server status error:', error);
            return { error: true };
        }
    },

    /**
     * Crash prediction (demo mode backend)
     * POST /predict
     */
    getCrashPrediction: async() => {
        try {
            const res = await api.post('/predict');
            return res.data;
        } catch (error) {
            console.error('Prediction error:', error);
            return { error: true };
        }
    },

    /**
     * Live system sequence
     * GET /live-sequence
     */
    getParameters: async() => {
        try {
            const res = await api.get('/live-sequence');
            return res.data;
        } catch (error) {
            console.error('Live sequence error:', error);
            return { error: true };
        }
    },

    /**
     * Charts still use mock data (backend doesn’t provide history)
     */
    getParameterHistory: async() => {
        return serverService.getMockData('parameters-history');
    },

    /**
     * Mock data (kept ONLY for charts)
     */
    getMockData: (dataType) => {
        switch (dataType) {
            case 'parameters-history':
                {
                    const timestamps = Array.from({ length: 24 }, (_, i) => {
                        const d = new Date();
                        d.setHours(d.getHours() - (24 - i));
                        return d.toISOString();
                    });

                    return {
                        timestamps,
                        cpu: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
                        memory: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
                        disk: Array.from({ length: 24 }, () => Math.floor(60 + Math.random() * 40)),
                        temperature: Array.from({ length: 24 }, () => Math.floor(45 + Math.random() * 10)),
                        errors: Array.from({ length: 24 }, () => Math.floor(Math.random() * 10)),
                        responseTime: Array.from({ length: 24 }, () => Math.floor(100 + Math.random() * 300)),
                        network: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
                        uptime: Array.from({ length: 24 }, (_, i) => i + 1),
                        processes: Array.from({ length: 24 }, () => Math.floor(100 + Math.random() * 200)),
                        threads: Array.from({ length: 24 }, () => Math.floor(300 + Math.random() * 400)),
                    };
                }

            default:
                return {};
        }
    },
};

export default api;


/**
 * IMPLEMENTATION GUIDE:
 * 
 * To use real data from your Flask backend:
 * 
 * 1. Set the USE_MOCK_DATA flag to false at the top of this file
 * 
 * 2. Update the components to use these functions:
 *    Example in a component:
 * 
 *    ```jsx
 *    import { serverService } from '../utils/apiService';
 *    
 *    function YourComponent() {
 *      const [parameters, setParameters] = useState({});
 *      
 *      useEffect(() => {
 *        async function fetchData() {
 *          const data = await serverService.getParameters();
 *          if (!data.error) {
 *            setParameters(data);
 *          }
 *        }
 *        
 *        fetchData();
 *        const interval = setInterval(fetchData, 3000);
 *        return () => clearInterval(interval);
 *      }, []);
 *      
 *      // Rest of component...
 *    }
 *    ```
 *    
 * 3. Backend API Structure:
 *    Your Flask backend should implement the endpoints that match the ones used in this service:
 *    - /api/server-status
 *    - /api/parameters
 *    - /api/parameters/history
 *    - /api/crash-prediction
 * 
 * 4. Testing:
 *    - Use URL parameter ?USE_FORCE_MOCK=true to force mock data even when USE_MOCK_DATA is false
 *    - Check the console logs to see whether real or mock data is being used
 */