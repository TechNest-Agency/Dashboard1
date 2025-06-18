
const Step2 = ({ formData, handleChange }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Deal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deal Title</label>
                    <input
                        type="text"
                        name="dealTitle"
                        value={formData.dealTitle}
                        onChange={handleChange}
                        placeholder="Black Friday sell, 50% off on all products"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deal Code</label>
                    <input
                        type="text"
                        name="dealCode"
                        value={formData.dealCode}
                        onChange={handleChange}
                        placeholder="BLACKFRIDAY50"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Deal Description</label>
                    <textarea
                        name="dealDescription"
                        value={formData.dealDescription}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    ></textarea>
                </div>

                <div className="md:w-1/2 flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Offered Items</label>


                        <select name="offeredItems" value={formData.offeredItems} onChange={handleChange}

                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                            {['iPhone 11', 'One Plus', 'Samsung Galaxy', 'Google Pixel', 'Xiaomi'].map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cart Condition</label>
                        <select
                            name="cartCondition"
                            value={formData.cartCondition}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="">Select condition</option>
                            {['Cart must contain all selected items', 'Cart must contain one or more selected items'].map(condition => (
                                <option key={condition} value={condition}>{condition}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Deal Duration</label>
                <div className="flex items-center">
                    <input
                        type="date"
                        name="dealDuration"
                        value={formData.dealDuration}
                        onChange={handleChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notify Users</label>
                <div className="flex flex-wrap gap-4">
                    {['Email', 'SMS', 'Push Notification'].map((type) => (
                        <label key={type} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="notifyUsers"
                                value={type.toLowerCase()}
                        
                                onChange={handleChange}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <span className="ml-1 text-sm text-gray-700">
                                {type}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Step2;

