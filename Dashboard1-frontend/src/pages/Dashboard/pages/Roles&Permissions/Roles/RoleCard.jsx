
const RoleCard = ({ role, onEdit }) => {
  // Avatar display logic......
  const showCount = role.totalUsers > 3;
  const avatarsToShow = showCount ? 2 : Math.min(3, role.totalUsers);
  const remainingCount = role.totalUsers - avatarsToShow;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-[0px_4px_0px_0px_#7c48d8] transition-shadow duration-300">
      {/* Users count and avatars.................... */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Total {role.totalUsers} users</span>
        <div className="flex -space-x-2">
          {role.users.slice(0, avatarsToShow).map((user, index) => (
            <img
              key={user.id}
              src={user.image}
              alt={user.name}
              className="w-8 h-8 rounded-full border-2 border-white"
              style={{
                zIndex: 10 + index,
                marginLeft: index === 0 ? '0' : '-10px',
              }}
            />
          ))}
          {showCount && (
            <div 
              className="w-8 h-8 rounded-full bg-purple-700 border-2 border-white flex items-center justify-center text-xs font-medium text-white"
              style={{
                zIndex: 10 + avatarsToShow,
                marginLeft: '-10px',
              }}
            >
              +{remainingCount}
            </div>
          )}
        </div>
      </div>

      {/* Role name and edit button............... */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">{role.name}</h3>
        <button 
          onClick={() => onEdit(role)}
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Edit Role
        </button>
      </div>

      
    </div>
  );
};

export default RoleCard;