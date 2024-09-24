import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PushIdea = () => {
    const username = localStorage.getItem("us");
    const [account, setAccount] = useState([]);
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      status: '',
      image: '',
      category: '',
      createAt: new Date().toISOString(), // Auto set today's date
      updateAt: null,
      endAt: null,
      countFeedback: '',
      awardForOneFeedback: '',
      accountUsername: username,
    });
  
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
  
    useEffect(() => {
      if (username) {
        getAccount(username);
      }
    }, [username]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
        const imagePreviewUrl = URL.createObjectURL(file);
        setImageUrl(imagePreviewUrl);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Tính tổng cộng và hiển thị modal thanh toán
      const feedbackFee = formData.countFeedback * formData.awardForOneFeedback;
      const serviceFee = 0.1 * feedbackFee;
      const total = feedbackFee + serviceFee;
      setTotalAmount(total); // Cập nhật tổng cộng trong state
      setShowModal(true); // Hiển thị modal
    };
  
    const getAccount = async (username) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/auth/getaccount?username=${username}`);
        setAccount(response.data.result);
        console.log(response.data.result)
      } catch (error) {
        console.error('Error fetching account:', error);
      }
    };
  
    const handleUpload = async () => {
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);
  
      try {
        const response = await axios.post('http://localhost:8080/api/upload/image', uploadFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Image upload failed');
        throw error;
      }
    };
  
    const handleConfirmPayment = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/solana/send', {
          params: {
            fromPrivateKey: account.privateKey,
            toPublicKey: "DdcKsPPBsZQKJUVMvssP8YGBmCzUM1kXjNXSmq1MTYTw",
            amount: totalAmount,
          },
        });
        alert('Transaction successful');
        setShowModal(false);
        // Gọi hàm xử lý submit dữ liệu sau khi thanh toán thành công
        handleSubmitData();
      } catch (error) {
        console.error('Transaction failed:', error);
      }
    };
  
    const handleSubmitData = async () => {
      try {
        // Step 1: Upload the image and get the URL
        const uploadedImageUrl = await handleUpload();
        if (!uploadedImageUrl) return;
  
        // Step 2: Add the uploaded image URL to the form data
        const updatedFormData = {
          ...formData,
          image: uploadedImageUrl,
        };
  
        console.log(updatedFormData)
  
        // Step 3: Submit the idea data to the backend
        const response = await axios.post('http://localhost:8080/api/ideas/create', updatedFormData);
        alert('Idea added successfully');
        console.log('Idea added:', response.data);
  
        // Reset form data after successful submission
        setFormData({
          title: '',
          description: '',
          status: '',
          image: '',
          category: '',
          createAt: new Date().toISOString().slice(0, 10),
          updateAt: null,
          endAt: null,
          countFeedback: '',
          awardForOneFeedback: '',
          accountUsername: username,
        });
        setSelectedFile(null);
        setImageUrl('');
      } catch (error) {
        console.error('Error adding idea:', error.response ? error.response.data : error);
        alert('Failed to add idea');
      }
    };
  
    return (
      <div className="container my-5 p-5 bg-light rounded shadow-lg" style={{ maxWidth: '800px' }}>
        <h2 className="text-center mb-4 text-primary">Thêm Ý Tưởng Mới</h2>
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-md-6">
            <label className="form-label">Tiêu đề</label>
            <input
              type="text"
              className="form-control border-primary shadow-sm"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nhập tiêu đề ý tưởng"
              required
            />
          </div>
  
          <div className="col-md-6">
            <label className="form-label">Mô tả</label>
            <textarea
              className="form-control border-primary shadow-sm"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Mô tả ý tưởng của bạn"
              required
              rows="3"
            />
          </div>
  
          <div className="col-md-6">
            <label className="form-label">Trạng thái</label>
            <select
              className="form-select border-primary shadow-sm"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Chọn trạng thái</option>
              <option value="START">BẮT ĐẦU</option>
              <option value="END">KẾT THÚC</option>
              <option value="DELETE">XOÁ</option>
              <option value="INPROGRESS">ĐANG TIẾN HÀNH</option>
            </select>
          </div>
  
          <div className="col-md-6">
            <label className="form-label">Thể loại</label>
            <select
              className="form-select border-primary shadow-sm"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Chọn Thể loại</option>
              <option value="Social">Xã Hội</option>
              <option value="Life">Đời sống</option>
              <option value="cultural">Văn hóa</option>
              <option value="Technology">Công nghệ</option>
            </select>
          </div>
  
          <div className="col-md-6">
            <label className="form-label">Ảnh</label>
            <input
              type="file"
              className="form-control border-primary shadow-sm"
              onChange={handleFileChange}
            />
            {imageUrl && (
              <img src={imageUrl} alt="Ảnh đã chọn" className="img-fluid mt-2 shadow" style={{ maxHeight: '200px' }} />
            )}
          </div>
  
          <div className="col-md-6">
            <label className="form-label">Số phản hồi</label>
            <input
              type="number"
              className="form-control border-primary shadow-sm"
              name="countFeedback"
              value={formData.countFeedback}
              onChange={handleChange}
              placeholder="Nhập số phản hồi"
              required
            />
          </div>
  
          <div className="col-md-6">
            <label className="form-label">Giải thưởng cho một phản hồi</label>
            <input
              type="number"
              className="form-control border-primary shadow-sm"
              name="awardForOneFeedback"
              value={formData.awardForOneFeedback}
              onChange={handleChange}
              placeholder="Nhập số tiền thưởng cho mỗi phản hồi"
              required
            />
          </div>
  
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5 shadow">Gửi Ý Tưởng</button>
          </div>
        </form>
  
        {showModal && (
          <div className="modal d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Xác nhận thanh toán</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Số tiền cần thanh toán: {totalAmount} SOL</p>
                  <p>Bạn có chắc muốn thực hiện thanh toán không?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={handleConfirmPayment}>Xác nhận</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Huỷ</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default PushIdea;