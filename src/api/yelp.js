import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
    Authorization:'Bearer AdpovPOskV3CNeaEaW0MdLCNXNN-xN7QINjLeqs-Tv_oVjvoaTKNgnzBytc1SSqZpzGGeX-jAPU5bO6vUXUGrHcd4vaN2vLqb1JCByjYEjzOSiX8g_N3iC7aetjDYnYx'
    }
});
