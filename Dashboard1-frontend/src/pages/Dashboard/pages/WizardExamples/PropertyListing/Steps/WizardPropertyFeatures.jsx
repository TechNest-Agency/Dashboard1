import { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';

export default function WizardPropertyFeatures() {

    // Demo data for furnished status
    const furnishedOptions = [
        { value: 'furnished', label: 'Furnished' },
        { value: 'fully-furnished', label: 'Fully Furnished' },
        { value: 'semi-furnished', label: 'Semi Furnished' },
        { value: 'unfurnished', label: 'Unfurnished' },
    ];


    const options = [
        { id: 1, name: 'AC' },
        { id: 2, name: 'TV' },
        { id: 3, name: 'Fridge' },
        { id: 4, name: 'Washing Machine' },
        { id: 5, name: 'Sofa' },
        { id: 6, name: 'Dining Table' }
    ];

    const [selectedValues, setSelectedValues] = useState([options[0], options[1]]);
    const [isOpen, setIsOpen] = useState(false);

    const onSelect = (item) => {
        setSelectedValues([...selectedValues, item]);
    };

    const onRemove = (item) => {
        setSelectedValues(selectedValues.filter(i => i.id !== item.id));
    };


    return (
        <div className="space-y-6">
            {/* Bedrooms and Floor No */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <input
                        type="number"
                        defaultValue="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Floor No</label>
                    <input
                        type="number"
                        defaultValue="12"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                </div>
            </div>

            {/* Second Row - Bathroom and Furnished Status */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bathroom</label>
                    <input
                        type="number"
                        defaultValue="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Furnished Status</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
                        <option value="">Select Furnished Status</option>
                        {furnishedOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Furnishing Details (Multi-select) */}

            {/* Furnishing Details Dropdown */}
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Furnishing Details</label>
                <div className="relative">
                    {/* Input Box with selected items */}
                    <div
                        className="min-h-[42px] w-full p-2 border border-gray-300 rounded-md cursor-pointer flex flex-wrap items-center gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedValues.length > 0 ? (
                            selectedValues.map(item => (
                                <span
                                    key={item.id}
                                    className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                                >
                                    {item.name}
                                    <FiX
                                        className="ml-1.5 h-3 w-3 cursor-pointer hover:text-purple-600"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onRemove(item);
                                        }}
                                    />
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-400">Select items</span>
                        )}
                        <FiChevronDown className={`ml-auto text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {options.map(option => (
                                <div
                                    key={option.id}
                                    className={`px-4 py-2 cursor-pointer flex items-center ${selectedValues.some(item => item.id === option.id)
                                            ? 'bg-purple-50 text-purple-800'
                                            : 'hover:bg-gray-50'
                                        }`}
                                    onClick={() => onSelect(option)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedValues.some(item => item.id === option.id)}
                                        readOnly
                                        className="mr-2 h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                                    />
                                    <span>{option.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>


            </div>

            {/* Common Area Radio Buttons */}
            <div className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Is There Any Common Area?</label>
                    <div className="flex gap-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="commonArea"
                                value="yes"
                                className="text-purple-500 border-gray-300 focus:ring-purple-500"
                            />
                            <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="commonArea"
                                value="no"
                                className="text-purple-500 border-gray-300 focus:ring-purple-500"
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );


}
