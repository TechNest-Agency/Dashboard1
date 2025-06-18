import { FiPercent, FiDollarSign, FiStar, FiCheck, FiCalendar, FiMail, FiPhone, FiBell } from 'react-icons/fi';
const Step4 = ({ formData, setFormData }) => {
  return (
    <div>
        <div>

        </div>
      <h2 className="text-xl font-semibold mb-2">Almost done! 🚀</h2>
      <p className="text-gray-600 mb-3">Confirm your deal details information and submit to create it.</p>

      <div className=" py-2 rounded-lg mb-2 flex flex-col-reverse md:flex-row justify-between gap-6">
 
        <div className="md:mt-6">
          <div className='flex gap-2'>
            <h3 className="text-base font-medium text-gray-600">Deal Type: </h3>
            <span className="font-medium">
              Flat Amount
            </span>
          </div>
          <div className='flex gap-2'>
            <h3 className="text-base font-medium text-gray-600">Amount: </h3>
            <span className="font-medium">
              %
            </span>
          </div>
          <div className='flex gap-2'>
            <h3 className="text-base font-medium text-gray-600">Deal Code: </h3>
            <span className="font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm inline-block">
              BLACKFRIDAY
            </span>
          </div>
          <div className='flex gap-2'>
            <h3 className="text-base font-medium text-gray-600">Deal Title: </h3>
            <span className="font-medium">{formData.dealTitle}</span>
          </div>
          <div className='flex gap-2'>
            <h3 className="text-base font-medium text-gray-600">Deal Duration: </h3>
            <span className="font-medium">{ 'Not specified'}</span>
          </div>
        </div>

               <div>
  <img
    src="https://i.ibb.co/bMJgvXKN/dealDone.jpg"
    className="w-full md:max-w-[300px] rounded object-cover"
  />
        </div>
      </div>

      
        <div className="flex items-center mb-4 md:mb-0">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="confirmed"
              checked={formData.confirmed}
              onChange={() => setFormData({...formData, confirmed: !formData.confirmed})}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm md:text-base font-medium text-gray-600">
              I have confirmed the deal details
            </span>
          </label>
        </div>
      
    
    </div>
  );
};

export default Step4;