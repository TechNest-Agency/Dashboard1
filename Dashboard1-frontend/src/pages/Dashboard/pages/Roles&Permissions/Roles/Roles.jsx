import RoleCard from "./RoleCard";
import RolesTableSection from "./RolesTableSection";

const Roles = () => {
  // Fake data for roles
  const roles = [
    {
      id: 1,
      name: 'Administrator',
      totalUsers: 4,
      users: [
        { id: 1, name: 'User 1', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 2, name: 'User 2', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 3, name: 'User 3', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: 4, name: 'User 4', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
      ]
    },
    {
      id: 2,
      name: 'Manager',
      totalUsers: 7,
      users: [
        { id: 5, name: 'User 5', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { id: 6, name: 'User 6', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { id: 7, name: 'User 7', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { id: 8, name: 'User 8', image: 'https://randomuser.me/api/portraits/women/8.jpg' },
        { id: 9, name: 'User 9', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
        { id: 10, name: 'User 10', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
        { id: 11, name: 'User 11', image: 'https://randomuser.me/api/portraits/men/11.jpg' },
      ]
    },
    {
      id: 3,
      name: 'Standard User',
      totalUsers: 2,
      users: [
        { id: 12, name: 'User 12', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
        { id: 13, name: 'User 13', image: 'https://randomuser.me/api/portraits/men/13.jpg' },
      ]
    },
    {
      id: 4,
      name: 'Support',
      totalUsers: 9,
      users: [
        { id: 14, name: 'User 14', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
        { id: 15, name: 'User 15', image: 'https://randomuser.me/api/portraits/men/15.jpg' },
        { id: 16, name: 'User 16', image: 'https://randomuser.me/api/portraits/women/16.jpg' },
        { id: 17, name: 'User 17', image: 'https://randomuser.me/api/portraits/men/17.jpg' },
        { id: 18, name: 'User 18', image: 'https://randomuser.me/api/portraits/women/18.jpg' },
        { id: 19, name: 'User 19', image: 'https://randomuser.me/api/portraits/men/19.jpg' },
        { id: 20, name: 'User 20', image: 'https://randomuser.me/api/portraits/women/20.jpg' },
        { id: 21, name: 'User 21', image: 'https://randomuser.me/api/portraits/men/21.jpg' },
        { id: 22, name: 'User 22', image: 'https://randomuser.me/api/portraits/women/22.jpg' },
      ]
    },
    {
      id: 5,
      name: 'Restricted User',
      totalUsers: 1,
      users: [
        { id: 23, name: 'User 23', image: 'https://randomuser.me/api/portraits/women/24.jpg' },
      ]
    }
  ];

  const handleEditRole = (role) => {
    console.log('Editing role:', role);
  };

  const handleAddRole = () => {
    // console.log('Add new role clicked');
  };

  return (
    <div className="container mx-auto px-2 py-3">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Roles List</h1>
        <p className="text-gray-600">
          Roles control access to specific menus and features based on user permissions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <RoleCard 
            key={role.id}
            role={role}
            onEdit={handleEditRole}
          />
        ))}

        {/* Add new role card ....*/}
        <div 
          onClick={handleAddRole}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="text-gray-600 mb-1">Add new role</p>
          <p className="text-xs text-gray-400 text-center">if it doesn't exist.</p>
        </div>
      </div>
      <RolesTableSection/>
    </div>
  );
};

export default Roles;