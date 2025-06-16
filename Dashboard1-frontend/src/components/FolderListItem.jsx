import React from "react";

function FolderListItem({ 
  folder, 
  count, 
  activeFolder, 
  setActiveFolder, 
  setSelectedEmails, 
  folderIcons 
}) {
  return (
    <li key={folder}>
      <button
        onClick={() => {
          setActiveFolder(folder);
          setSelectedEmails([]);
        }}
        className={`flex items-center justify-between w-full px-4 py-2 text-left ${
          activeFolder === folder ? "bg-blue-100 text-blue-800" : "hover:bg-gray-200"
        }`}
      >
        <div className="flex items-center">
          {folderIcons[folder]}
          <span className="capitalize">
            {folder === "allmail"
              ? "All Mail"
              : folder === "sent"
              ? "Sent Items"
              : folder}
          </span>
        </div>

        {count > 0 && (
          <span className="bg-blue-500 text-gray-50 text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </span>
        )}

      </button>
    </li>
  );
}

export default FolderListItem;
