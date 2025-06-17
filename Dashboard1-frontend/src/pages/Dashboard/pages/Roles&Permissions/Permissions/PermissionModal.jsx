import { FiAlertTriangle, FiX } from 'react-icons/fi';

const PermissionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Main container with relative positioning............... */}
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative border border-gray-200">
        {/* Close button ....... */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-orange-50 rounded-full p-1.5 shadow-md border border-gray-200
                    text-gray-500 hover:text-gray-700 transition-all hover:scale-110"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/*heading with subtitle .............*/}
        <div className="text-center mb-6">
          <h3 className="text-xl font-medium">Add Permission</h3>
          <p className="text-base text-gray-500 mt-1">Add permission as per your requirements.</p>
        </div>
        
        {/* Warning message................ */}
        <div className="bg-orange-200 rounded-md p-3 mb-7 flex items-start">
          <FiAlertTriangle className="text-orange-300 text-xl mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-base text-orange-500">
            By Adding the permission name, you might break the system permissions functionality.
          </p>
        </div>

        {/* Input field ............*/}
        <div className="flex items-center gap-2 mb-5">
          <input 
            type="text" 
            placeholder="Enter permission name"
            className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm"
          />
          <button
            type="button"
            className="px-4 py-2.5 rounded text-sm bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-blue-500 text-white whitespace-nowrap"
          >
            Add
          </button>
        </div>

        {/* Core Permission Checkbox.................. */}
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-2 block text-sm text-gray-700">
            Set as core permission
          </span>
        </div>
      </div>
    </div>
  );
};

export default PermissionModal;