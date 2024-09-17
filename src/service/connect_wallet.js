import axios from 'axios';

const connect_wallet = async (publicKey) => {
  if (publicKey) {
      try {
          const response = await axios.get(`http://localhost:8080/api/solana/balance/${publicKey}`);
          console.log('Fetched data:', response.data);
          return response.data;
      } catch (error) {
          console.error('Error fetching balance:', error);
          return null; // Trả về null nếu có lỗi
      }
  }
  return null; // Trả về null nếu publicKey không hợp lệ
};

const connectService = {
    connect_wallet
}

export default connectService;
